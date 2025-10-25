import { useState, useEffect, useCallback } from "react";
import { Table, Button, Modal, Form, Input, Space, message, Popconfirm, Card, Tag } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DashboardLayout from "../../components/templates/DashboardLayout";
import beritaService from "../../services/berita.service";

const BeritaPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const params = {
        page: pagination.current,
        per_page: pagination.pageSize,
        search: searchText,
      };
      
      const response = await beritaService.getAll(params);
      
      if (response.data) {
        setData(response.data);
        setPagination({
          ...pagination,
          total: response.total || response.data.length,
        });
      } else {
        setData(Array.isArray(response) ? response : []);
        setPagination({
          ...pagination,
          total: Array.isArray(response) ? response.length : 0,
        });
      }
    } catch (error) {
      console.error("Error fetching berita:", error);
      message.error("Gagal memuat data berita");
    } finally {
      setLoading(false);
    }
  }, [pagination, searchText]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTableChange = (newPagination) => {
    setPagination({
      ...pagination,
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    });
  };

  const handleSearch = (value) => {
    setSearchText(value);
    setPagination({ ...pagination, current: 1 });
  };

  const showCreateModal = () => {
    setModalMode("create");
    setEditingRecord(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const showEditModal = (record) => {
    setModalMode("edit");
    setEditingRecord(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setEditingRecord(null);
  };

  const handleSubmit = async (values) => {
    try {
      if (modalMode === "create") {
        await beritaService.create(values);
        message.success("Berita berhasil ditambahkan");
      } else {
        await beritaService.update(editingRecord.id, values);
        message.success("Berita berhasil diperbarui");
      }
      setIsModalOpen(false);
      form.resetFields();
      fetchData();
    } catch (error) {
      console.error("Error saving berita:", error);
      message.error("Gagal menyimpan data berita");
    }
  };

  const handleDelete = async (id) => {
    try {
      await beritaService.delete(id);
      message.success("Berita berhasil dihapus");
      fetchData();
    } catch (error) {
      console.error("Error deleting berita:", error);
      message.error("Gagal menghapus berita");
    }
  };

  const columns = [
    {
      title: "No",
      key: "index",
      width: 60,
      render: (_, __, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
    },
    {
      title: "Judul Berita",
      dataIndex: "judul",
      key: "judul",
      render: (text) => text || "-",
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
      render: (text) => text ? <Tag color="blue">{text}</Tag> : "-",
    },
    {
      title: "Penulis",
      dataIndex: "penulis",
      key: "penulis",
      render: (text) => text || "-",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      render: (text) => {
        if (!text) return "-";
        const date = new Date(text);
        return date.toLocaleDateString('id-ID', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        });
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        const colors = {
          'published': 'green',
          'draft': 'orange',
          'archived': 'gray',
        };
        return text ? <Tag color={colors[text] || 'default'}>{text}</Tag> : "-";
      },
    },
    {
      title: "Aksi",
      key: "action",
      width: 120,
      render: (_, record) => (
        <Space size="small">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => showEditModal(record)}
            className="text-primary-600 hover:text-primary-700"
          >
            Edit
          </Button>
          <Popconfirm
            title="Hapus berita"
            description="Apakah Anda yakin ingin menghapus berita ini?"
            onConfirm={() => handleDelete(record.id)}
            okText="Ya"
            cancelText="Tidak"
            okButtonProps={{ danger: true }}
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Hapus
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Kelola Berita
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Kelola artikel dan berita RTRW Gorontalo
          </p>
        </div>

        <Card className="shadow-elegant rounded-xl">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
            <Input.Search
              placeholder="Cari berita..."
              allowClear
              enterButton={<SearchOutlined />}
              onSearch={handleSearch}
              className="w-full sm:w-64"
            />
            <Space>
              <Button icon={<ReloadOutlined />} onClick={fetchData}>
                Refresh
              </Button>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={showCreateModal}
                className="bg-primary-600 hover:bg-primary-700"
              >
                Tambah Berita
              </Button>
            </Space>
          </div>

          <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            loading={loading}
            pagination={pagination}
            onChange={handleTableChange}
            scroll={{ x: 1000 }}
          />
        </Card>

        <Modal
          title={modalMode === "create" ? "Tambah Berita" : "Edit Berita"}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          width={700}
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit} className="mt-4">
            <Form.Item
              label="Judul Berita"
              name="judul"
              rules={[{ required: true, message: "Judul berita harus diisi" }]}
            >
              <Input placeholder="Masukkan judul berita" />
            </Form.Item>

            <Form.Item
              label="Kategori"
              name="kategori"
              rules={[{ required: true, message: "Kategori harus diisi" }]}
            >
              <Input placeholder="Contoh: Pengumuman, Kegiatan, Peraturan" />
            </Form.Item>

            <Form.Item
              label="Penulis"
              name="penulis"
            >
              <Input placeholder="Nama penulis (opsional)" />
            </Form.Item>

            <Form.Item
              label="Tanggal"
              name="tanggal"
            >
              <Input type="date" />
            </Form.Item>

            <Form.Item
              label="Status"
              name="status"
            >
              <Input placeholder="published, draft, atau archived" />
            </Form.Item>

            <Form.Item label="Konten" name="konten">
              <Input.TextArea rows={6} placeholder="Masukkan konten berita (opsional)" />
            </Form.Item>

            <Form.Item label="Sumber" name="sumber">
              <Input placeholder="Sumber berita (opsional)" />
            </Form.Item>

            <Form.Item label="URL Gambar" name="gambar">
              <Input placeholder="https://example.com/image.jpg (opsional)" />
            </Form.Item>

            <Form.Item className="mb-0">
              <Space className="w-full justify-end">
                <Button onClick={handleCancel}>Batal</Button>
                <Button type="primary" htmlType="submit" className="bg-primary-600">
                  {modalMode === "create" ? "Tambah" : "Simpan"}
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default BeritaPage;
