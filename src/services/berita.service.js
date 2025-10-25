import api from './api';

const beritaService = {
  // Get all berita (with pagination and search)
  getAll: async (params = {}) => {
    const response = await api.get('/berita', { params });
    return response.data;
  },

  // Get single berita
  getById: async (id) => {
    const response = await api.get(`/berita/${id}`);
    return response.data;
  },

  // Create berita
  create: async (data) => {
    const response = await api.post('/berita', data);
    return response.data;
  },

  // Update berita
  update: async (id, data) => {
    const response = await api.put(`/berita/${id}`, data);
    return response.data;
  },

  // Delete berita
  delete: async (id) => {
    const response = await api.delete(`/berita/${id}`);
    return response.data;
  },

  // Multi delete
  multiDelete: async (ids) => {
    const response = await api.post('/berita/multi-destroy', { ids });
    return response.data;
  },
};

export default beritaService;
