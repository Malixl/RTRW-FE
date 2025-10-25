import { useState, useEffect, useCallback } from "react";
import { Table, Button, Modal, Form, Input, Space, message, Popconfirm, Card } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import DashboardLayout from "../../components/templates/DashboardLayout";
import polaruangService from "../../services/polaruang.service";

const PolaruangPage = () => {
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
      
      const response = await polaruangService.getAll(params);
      
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
      console.error("Error fetching polaruang:", error);
      message.error("Gagal memuat data pola ruang");
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
        await polaruangService.create(values);
        message.success("Pola ruang berhasil ditambahkan");
      } else {
        await polaruangService.update(editingRecord.id, values);
        message.success("Pola ruang berhasil diperbarui");
      }
      setIsModalOpen(false);
      form.resetFields();
      fetchData();
    } catch (error) {
      console.error("Error saving polaruang:", error);
      message.error("Gagal menyimpan data pola ruang");
    }
  };

  const handleDelete = async (id) => {
    try {
      await polaruangService.delete(id);
      message.success("Pola ruang berhasil dihapus");
      fetchData();
    } catch (error) {
      console.error("Error deleting polaruang:", error);
      message.error("Gagal menghapus pola ruang");
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
      title: "Nama Pola Ruang",
      dataIndex: "nama",
      key: "nama",
      render: (text) => text || "-",
    },
    {
      title: "Kode",
      dataIndex: "kode",
      key: "kode",
      render: (text) => text || "-",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      render: (text) => text || "-",
      ellipsis: true,
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
            title="Hapus pola ruang"
            description="Apakah Anda yakin ingin menghapus pola ruang ini?"
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
            Kelola Pola Ruang
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Kelola data pola ruang RTRW Gorontalo
          </p>
        </div>

        <Card className="shadow-elegant rounded-xl">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
            <Input.Search
              placeholder="Cari pola ruang..."
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
                Tambah Pola Ruang
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
            scroll={{ x: 800 }}
          />
        </Card>

        <Modal
          title={modalMode === "create" ? "Tambah Pola Ruang" : "Edit Pola Ruang"}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          width={600}
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit} className="mt-4">
            <Form.Item
              label="Nama Pola Ruang"
              name="nama"
              rules={[{ required: true, message: "Nama pola ruang harus diisi" }]}
            >
              <Input placeholder="Masukkan nama pola ruang" />
            </Form.Item>

            <Form.Item
              label="Kode"
              name="kode"
              rules={[{ required: true, message: "Kode harus diisi" }]}
            >
              <Input placeholder="Masukkan kode" />
            </Form.Item>

            <Form.Item label="Keterangan" name="keterangan">
              <Input.TextArea rows={4} placeholder="Masukkan keterangan (opsional)" />
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

export default PolaruangPage;
