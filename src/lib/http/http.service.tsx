const baseUrl = "http://localhost:3000";

export class HttpService {
  static async get(path: string) {
    const response = await fetch(`${baseUrl}${path}`);
    return response.json();
  }

  static async post<T>(path: string, data: T) {
    const response = await fetch(`${baseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async put<T>(path: string, data: T) {
    const response = await fetch(`${baseUrl}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async delete(path: string) {
    const response = await fetch(`${baseUrl}${path}`, {
      method: "DELETE",
    });
    return response.json();
  }
}
