import { describe, it, expect } from "vitest";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("should be importable without errors", () => {
    expect(Navbar).toBeDefined();
  });

  it("should be a valid React component", () => {
    expect(typeof Navbar).toBe("function");
  });
});
