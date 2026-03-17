import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should be importable without errors", () => {
    expect(Footer).toBeDefined();
  });

  it("should be a valid React component", () => {
    expect(typeof Footer).toBe("function");
  });
});
