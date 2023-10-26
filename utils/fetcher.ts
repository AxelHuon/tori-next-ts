import axios from 'axios';

class CustomError extends Error {
  private status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const fetcherCollection = async (args: any) => {
  const [url, params] = args;
  try {
    const response = await axios.get(url, { params });
    if (response.data.animes.length === 0) {
      throw new Error('Rien ne correspond à votre recherche...');
    } else {
      return response.data;
    }
  } catch (error: any) {
    if (error.message === 'Rien ne correspond à votre recherche...') {
      throw new CustomError(error.message, 404);
    } else if (error.request) {
      if (error.request.status === 404) {
        throw new CustomError('404 Not found', 404);
      } else {
        throw new Error(error.message, error.request.status);
      }
    }
  }
};

export const fetcherSingleItem = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    if (error.request) {
      console.log(error.request);
      if (error.request.status === 404) {
        throw new Error('404 Not found');
      } else {
        throw new Error(error.message);
      }
    }
  }
};
