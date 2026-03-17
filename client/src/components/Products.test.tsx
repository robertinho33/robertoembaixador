import { describe, it, expect } from "vitest";
import Products from "./Products";

describe("Products Component", () => {
  it("should be importable without errors", () => {
    expect(Products).toBeDefined();
  });

  it("should be a valid React component", () => {
    expect(typeof Products).toBe("function");
  });
});
