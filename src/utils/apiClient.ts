import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T;
}

interface ApiError {
  status: number;
  message: string;
}

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL:  process.env.BASE_URL,
      timeout: 5000,
    });

    this.instance.interceptors.response.use(
      (response: AxiosResponse<ApiResponse<any>>) => {
        return response;
      },
      (error: AxiosError<ApiError>) => {
        const status = error.response ? error.response.status : null;

        // Handle specific error codes
        switch (status) {
          case 401:
            // Perform some action for unauthorized access
            break;
          case 404:
            // Perform some action for not found error
            break;
          default:
            // Handle generic error codes
            break;
        }

        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await this.instance.get<ApiResponse<T>>(url);
    return response.data;
  }

  public async post<T>(url: string, data: any): Promise<ApiResponse<T>> {
    const response = await this.instance.post<ApiResponse<T>>(url, data);
    return response.data;
  }

  public async put<T>(url: string, data: any): Promise<ApiResponse<T>> {
    const response = await this.instance.put<ApiResponse<T>>(url, data);
    return response.data;
  }

  public async delete<T>(url: string): Promise<ApiResponse<T>> {
    const response = await this.instance.delete<ApiResponse<T>>(url);
    return response.data;
  }
}

const apiClient = new ApiClient();

export default apiClient;