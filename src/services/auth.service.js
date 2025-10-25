import api from './api';

const authService = {
    // Login
    login: async (credentials) => {
        const response = await api.post('/login', credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    },

    // Logout
    logout: async () => {
        try {
            await api.post('/logout');
        } finally {
            localStorage.removeItem('token');
        }
    },

    // Get current user
    me: async () => {
        const response = await api.get('/me');
        return response.data;
    },

    // Check if user is authenticated
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    // Get token
    getToken: () => {
        return localStorage.getItem('token');
    },
};

export default authService;
