import { describe, it, expect } from "vitest";
import CTA from "./CTA";

describe("CTA Component", () => {
  it("should be importable without errors", () => {
    expect(CTA).toBeDefined();
  });

  it("should be a valid React component", () => {
    expect(typeof CTA).toBe("function");
  });
});
