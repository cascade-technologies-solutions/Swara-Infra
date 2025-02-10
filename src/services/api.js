
// import axios from 'axios';

// // Use Flask backend running on port 5001
// const API_URL = 'http://localhost:5001';

// // Fetch images based on status (Completed or Ongoing)
// export const getImagesByStatus = async (status) => {
//   try {
//     const response = await axios.get(`${API_URL}/get_images/${status}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error;
//   }
// };

// // Upload image to Flask API
// export const uploadImage = async (formData) => {
//   try {
//     const response = await axios.post(`${API_URL}/upload_image`, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     throw error;
//   }
// };

// // User login API
// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, credentials, {
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     });
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error('Login error:', error.response?.data || error.message);
//     return { success: false, error: error.response?.data?.message || 'Login failed' };
//   }
// };

// // User registration API
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, userData, {
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     });
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error('Registration error:', error.response?.data || error.message);
//     return { success: false, error: error.response?.data?.message || 'Registration failed' };
//   }
// };

// // Contact form submission API
// export const submitContactForm = async (contactData) => {
//   try {
//     const response = await axios.post(`${API_URL}/contact`, contactData, {
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     });
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error('Contact form submission error:', error.response?.data || error.message);
//     return { success: false, error: error.response?.data?.message || 'Contact form submission failed' };
//   }
// };


import axios from 'axios';

// Use the deployed Flask backend URL on Render
const API_URL = 'https://swara-infra-backend.onrender.com';

// Fetch images based on status (Completed or Ongoing)
export const getImagesByStatus = async (status) => {
  try {
    const response = await axios.get(`${API_URL}/get_images/${status}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

// Upload image to Flask API
export const uploadImage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/upload_image`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// User login API
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    return { success: false, error: error.response?.data?.message || 'Login failed' };
  }
};

// User registration API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    return { success: false, error: error.response?.data?.message || 'Registration failed' };
  }
};

// Contact form submission API
export const submitContactForm = async (contactData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, contactData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Contact form submission error:', error.response?.data || error.message);
    return { success: false, error: error.response?.data?.message || 'Contact form submission failed' };
  }
};
