import { describe, it, beforeEach, expect, vi, Mock } from "vitest";
import { HttpService } from "lib/http/http.service.tsx";

describe("HttpService", () => {
  const baseUrl = "http://localhost:3000";

  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  it("get should return data from the given path", async () => {
    const mockData = { id: 1, name: "Test" };
    (globalThis.fetch as Mock).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    const result = await HttpService.get("/test-path");
    expect(result).toEqual(mockData);
    expect(globalThis.fetch).toHaveBeenCalledWith(`${baseUrl}/test-path`);
  });

  it("post should send data and return response", async () => {
    const mockData = { id: 1, name: "Test" };
    const postData = { name: "Test" };
    (globalThis.fetch as Mock).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    const result = await HttpService.post("/test-path", postData);
    expect(result).toEqual(mockData);
    expect(globalThis.fetch).toHaveBeenCalledWith(`${baseUrl}/test-path`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
  });

  it("put should update data and return response", async () => {
    const mockData = { id: 1, name: "Updated Test" };
    const putData = { name: "Updated Test" };
    (globalThis.fetch as Mock).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    const result = await HttpService.put("/test-path", putData);
    expect(result).toEqual(mockData);
    expect(globalThis.fetch).toHaveBeenCalledWith(`${baseUrl}/test-path`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(putData),
    });
  });

  it("delete should remove data and return response", async () => {
    const mockData = { success: true };
    (globalThis.fetch as Mock).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    const result = await HttpService.delete("/test-path");
    expect(result).toEqual(mockData);
    expect(globalThis.fetch).toHaveBeenCalledWith(`${baseUrl}/test-path`, {
      method: "DELETE",
    });
  });

  it("get should handle fetch errors", async () => {
    (globalThis.fetch as Mock).mockRejectedValue(new Error("Fetch error"));

    await expect(HttpService.get("/test-path")).rejects.toThrow("Fetch error");
  });

  it("post should handle fetch errors", async () => {
    (globalThis.fetch as Mock).mockRejectedValue(new Error("Fetch error"));

    await expect(HttpService.post("/test-path", {})).rejects.toThrow(
      "Fetch error",
    );
  });

  it("put should handle fetch errors", async () => {
    (globalThis.fetch as Mock).mockRejectedValue(new Error("Fetch error"));

    await expect(HttpService.put("/test-path", {})).rejects.toThrow(
      "Fetch error",
    );
  });

  it("delete should handle fetch errors", async () => {
    (globalThis.fetch as Mock).mockRejectedValue(new Error("Fetch error"));

    await expect(HttpService.delete("/test-path")).rejects.toThrow(
      "Fetch error",
    );
  });
});
