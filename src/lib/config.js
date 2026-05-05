/**
 * API Configuration
 *
 * Centralized configuration for backend API endpoints.
 * Update this single file to change all API requests.
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://assessment-msb3.onrender.com";

export const API_ENDPOINTS = {
  // Auth
  AUTH_REGISTER: `${API_BASE_URL}/api/auth/register`,
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,

  // User
  USER_PROFILE: `${API_BASE_URL}/api/user/profile`,

  // Crypto
  CRYPTO_ALL: `${API_BASE_URL}/api/crypto`,
  CRYPTO_GAINERS: `${API_BASE_URL}/api/crypto/gainers`,
  CRYPTO_NEW: `${API_BASE_URL}/api/crypto/new`,
};
