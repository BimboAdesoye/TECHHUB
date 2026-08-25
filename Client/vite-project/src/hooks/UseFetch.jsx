import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFetchedData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchedData();
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
