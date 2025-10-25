import api from './api';

const polaruangService = {
    // Get all polaruang (with pagination and search)
    getAll: async (params = {}) => {
        const response = await api.get('/polaruang', { params });
        return response.data;
    },

    // Get single polaruang
    getById: async (id) => {
        const response = await api.get(`/polaruang/${id}`);
        return response.data;
    },

    // Create polaruang
    create: async (data) => {
        const response = await api.post('/polaruang', data);
        return response.data;
    },

    // Update polaruang
    update: async (id, data) => {
        const response = await api.put(`/polaruang/${id}`, data);
        return response.data;
    },

    // Delete polaruang
    delete: async (id) => {
        const response = await api.delete(`/polaruang/${id}`);
        return response.data;
    },

    // Multi delete
    multiDelete: async (ids) => {
        const response = await api.post('/polaruang/multi-destroy', { ids });
        return response.data;
    },
};

export default polaruangService;
