import axios from "axios";
import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../lib/config";

export function useCryptos(type = "all") {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        setLoading(true);
        setError(null);

        let url = API_ENDPOINTS.CRYPTO_ALL;
        if (type === "gainers") {
          url = API_ENDPOINTS.CRYPTO_GAINERS;
        } else if (type === "new") {
          url = API_ENDPOINTS.CRYPTO_NEW;
        }

        const response = await axios.get(url);
        const payload = response.data;
        setCryptos(Array.isArray(payload) ? payload : payload?.data ?? []);
      } catch (err) {
        const message =
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "Failed to load crypto data";
        setError(message);
        setCryptos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, [type]);

  return { cryptos, loading, error };
}
