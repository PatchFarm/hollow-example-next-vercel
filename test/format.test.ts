import { describe, expect, it } from "vitest";
import { age } from "../lib/format";

describe("age", () => {
  const now = new Date("2026-11-15T12:00:00Z");
  it("says just now under a minute", () => {
    expect(age(new Date("2026-11-15T11:59:30Z"), now)).toBe("just now");
  });
  it("counts minutes, hours and days", () => {
    expect(age(new Date("2026-11-15T11:45:00Z"), now)).toBe("15 min ago");
    expect(age(new Date("2026-11-15T09:00:00Z"), now)).toBe("3 h ago");
    expect(age(new Date("2026-11-13T12:00:00Z"), now)).toBe("2 d ago");
  });
});
