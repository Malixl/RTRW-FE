import api from './api';

const wilayahService = {
    // Get all wilayah (with pagination and search)
    getAll: async (params = {}) => {
        const response = await api.get('/wilayah', { params });
        return response.data;
    },

    // Get single wilayah
    getById: async (id) => {
        const response = await api.get(`/wilayah/${id}`);
        return response.data;
    },

    // Create wilayah
    create: async (data) => {
        const response = await api.post('/wilayah', data);
        return response.data;
    },

    // Update wilayah
    update: async (id, data) => {
        const response = await api.put(`/wilayah/${id}`, data);
        return response.data;
    },

    // Delete wilayah
    delete: async (id) => {
        const response = await api.delete(`/wilayah/${id}`);
        return response.data;
    },

    // Multi delete
    multiDelete: async (ids) => {
        const response = await api.post('/wilayah/multi-destroy', { ids });
        return response.data;
    },
};

export default wilayahService;
