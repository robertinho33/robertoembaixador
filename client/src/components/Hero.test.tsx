import { describe, it, expect } from "vitest";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("should be importable without errors", () => {
    expect(Hero).toBeDefined();
  });

  it("should be a valid React component", () => {
    expect(typeof Hero).toBe("function");
  });
});
