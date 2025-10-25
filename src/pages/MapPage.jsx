import { useEffect, useMemo, useState } from 'react';
import { Layout, Button, Checkbox, Divider, Typography, Drawer, Space } from 'antd';
import { ArrowLeftOutlined, EnvironmentOutlined, MenuOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

// Register available GeoJSON datasets (extendable)
const DATASETS = [
  {
    key: 'gorontalo',
    name: 'Provinsi Gorontalo',
    url: '/geojson/Gorontalo.geojson',
    color: '#1677ff',
  },
];

const FitBounds = ({ features }) => {
  const map = useMap();
  useEffect(() => {
    if (!features || features.length === 0) return;
    const L = (window).L || undefined;
    // Compute bounds manually if Leaflet is not global
    try {
      const coords = [];
      features.forEach((f) => {
        const pushCoords = (c) => {
          if (Array.isArray(c[0])) c.forEach(pushCoords);
          else coords.push(c);
        };
        if (f.geometry) pushCoords(f.geometry.coordinates);
      });
      const lats = [], lngs = [];
      coords.forEach(([lng, lat]) => { lats.push(lat); lngs.push(lng); });
      if (lats.length && lngs.length) {
        const southWest = [Math.min(...lats), Math.min(...lngs)];
        const northEast = [Math.max(...lats), Math.max(...lngs)];
        map.fitBounds([southWest, northEast], { padding: [30, 30] });
      }
    } catch {
      // ignore
    }
  }, [features, map]);
  return null;
};

const MapPage = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeKeys, setActiveKeys] = useState(DATASETS.map((d) => d.key));
  const [geojsonData, setGeojsonData] = useState({}); // key -> GeoJSON

  // Fetch data when enabled
  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      await Promise.all(
        DATASETS.filter((d) => activeKeys.includes(d.key)).map(async (d) => {
          if (geojsonData[d.key]) return;
          try {
            const res = await fetch(d.url, { signal: controller.signal });
            if (!res.ok) return;
            const json = await res.json();
            setGeojsonData((prev) => ({ ...prev, [d.key]: json }));
          } catch {
            // ignore fetch errors
          }
        })
      );
    };
    load();
    return () => controller.abort();
  }, [activeKeys, geojsonData]);

  const allFeatures = useMemo(() => {
    const feats = [];
    activeKeys.forEach((k) => {
      const data = geojsonData[k];
      if (data?.features) feats.push(...data.features);
      else if (data?.geometry) feats.push(data);
    });
    return feats;
  }, [activeKeys, geojsonData]);

  const layerStyle = (color) => ({
    color,
    weight: 2,
    opacity: 0.9,
    fillColor: color,
    fillOpacity: 0.15,
  });

  const buildPopupHTML = (props = {}, title = '') => {
    const keys = Object.keys(props);
    const rows = keys.slice(0, 12).map((k) => {
      const v = props[k];
      return `<tr><td style="padding:4px 8px;color:#64748b;">${k}</td><td style="padding:4px 8px;color:#0f172a;font-weight:600;">${v}</td></tr>`;
    }).join('');
    return `
      <div style="min-width:220px;max-width:320px;">
        ${title ? `<div style="font-weight:800;margin-bottom:6px;color:#0f172a">${title}</div>` : ''}
        <table style="border-collapse:collapse;font-size:12px;">${rows}</table>
      </div>
    `;
  };

  const onEachFeatureFactory = (dataset) => (feature, layer) => {
    try {
      const content = buildPopupHTML(feature.properties, dataset.name);
      layer.bindPopup(content, { maxWidth: 320 });
    } catch {
      // ignore bind popup issue
    }
    layer.on({
      mouseover: () => {
        layer.setStyle({ weight: 3, fillOpacity: 0.25 });
  try { layer.bringToFront(); } catch { /* ignore */ }
      },
      mouseout: () => {
        layer.setStyle(layerStyle(dataset.color));
      },
      click: (e) => {
        try { layer.openPopup(e.latlng); } catch { /* ignore */ }
      }
    });
  };

  const renderLayers = () => (
    DATASETS.filter((d) => activeKeys.includes(d.key)).map((d) => (
      geojsonData[d.key] ? (
        <GeoJSON
          key={d.key}
          data={geojsonData[d.key]}
          style={layerStyle(d.color)}
          onEachFeature={onEachFeatureFactory(d)}
        />
      ) : null
    ))
  );

  const sidebar = (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 py-4 px-4 border-b">
        <span className="bg-primary-100 text-primary-600 p-2 rounded-lg">
          <EnvironmentOutlined />
        </span>
        <div>
          <Title level={5} className="m-0">Layer Peta</Title>
          <Text type="secondary" className="text-xs">Toggle GeoJSON</Text>
        </div>
      </div>

      <div className="p-4 space-y-3 overflow-auto">
        <Checkbox.Group
          className="w-full"
          value={activeKeys}
          onChange={(vals) => setActiveKeys(vals)}
        >
          <div className="grid gap-2">
            {DATASETS.map((d) => (
              <Checkbox key={d.key} value={d.key}>
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-sm" style={{ background: d.color }} />
                  {d.name}
                </span>
              </Checkbox>
            ))}
          </div>
        </Checkbox.Group>

        <Divider className="my-3" />
        <Space direction="vertical" className="w-full">
          <Button block onClick={() => setActiveKeys(DATASETS.map(d => d.key))}>
            Tampilkan Semua
          </Button>
          <Button block onClick={() => setActiveKeys([])}>
            Sembunyikan Semua
          </Button>
        </Space>
      </div>
    </div>
  );

  return (
    <Layout className="min-h-screen">
      {/* Floating back button */}
      <div className="fixed top-4 left-4 z-[1000]">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate('/')}
          className="bg-white/90 hover:!bg-white shadow-elegant"
        >
          Kembali
        </Button>
      </div>

      {/* Mobile layers button */}
      <div className="fixed top-4 right-4 z-[1000] md:hidden">
        <Button icon={<MenuOutlined />} onClick={() => setOpenDrawer(true)} className="bg-white/90 hover:!bg-white" />
      </div>

      {/* Sidebar (desktop) */}
      <Sider width={300} breakpoint="md" collapsedWidth={0} className="bg-white hidden md:block">
        {sidebar}
      </Sider>

      {/* Drawer (mobile) */}
      <Drawer
        title="Layer Peta"
        placement="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        className="md:hidden"
      >
        {sidebar}
      </Drawer>

      <Content className="relative">
        <div className="absolute inset-0">
          <MapContainer
            center={[-0.5, 122.5]}
            zoom={7}
            className="w-full h-screen"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {renderLayers()}
            <FitBounds features={allFeatures} />
          </MapContainer>
        </div>
      </Content>
    </Layout>
  );
};

export default MapPage;
