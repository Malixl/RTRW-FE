import api from './api';

const rtrwService = {
  // Get all rtrw (with pagination and search)
  getAll: async (params = {}) => {
    const response = await api.get('/rtrw', { params });
    return response.data;
  },

  // Get single rtrw
  getById: async (id) => {
    const response = await api.get(`/rtrw/${id}`);
    return response.data;
  },

  // Create rtrw
  create: async (data) => {
    const response = await api.post('/rtrw', data);
    return response.data;
  },

  // Update rtrw
  update: async (id, data) => {
    const response = await api.put(`/rtrw/${id}`, data);
    return response.data;
  },

  // Delete rtrw
  delete: async (id) => {
    const response = await api.delete(`/rtrw/${id}`);
    return response.data;
  },

  // Multi delete
  multiDelete: async (ids) => {
    const response = await api.post('/rtrw/multi-destroy', { ids });
    return response.data;
  },
};

export default rtrwService;
