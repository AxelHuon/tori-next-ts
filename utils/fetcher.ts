import axios from "axios";

export const fetcherCollection = async (args: any) => {
  const [url, params] = args;
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error: any) {
    throw new Error(`Network request failed: ${error.message}`);
  }
};

export const fetcherSingleItem = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Network request failed: ${error.message}`);
  }
};
