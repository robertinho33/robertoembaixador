import { describe, it, expect } from "vitest";
import About from "./About";

describe("About Component", () => {
  it("should be importable without errors", () => {
    expect(About).toBeDefined();
  });

  it("should be a valid React component", () => {
    expect(typeof About).toBe("function");
  });
});
