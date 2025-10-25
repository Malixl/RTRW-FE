import api from './api';

const klasifikasiService = {
  // Get all klasifikasi (with pagination and search)
  getAll: async (params = {}) => {
    const response = await api.get('/klasifikasi', { params });
    return response.data;
  },

  // Get single klasifikasi
  getById: async (id) => {
    const response = await api.get(`/klasifikasi/${id}`);
    return response.data;
  },

  // Create klasifikasi
  create: async (data) => {
    const response = await api.post('/klasifikasi', data);
    return response.data;
  },

  // Update klasifikasi
  update: async (id, data) => {
    const response = await api.put(`/klasifikasi/${id}`, data);
    return response.data;
  },

  // Delete klasifikasi
  delete: async (id) => {
    const response = await api.delete(`/klasifikasi/${id}`);
    return response.data;
  },

  // Multi delete
  multiDelete: async (ids) => {
    const response = await api.post('/klasifikasi/multi-destroy', { ids });
    return response.data;
  },
};

export default klasifikasiService;
