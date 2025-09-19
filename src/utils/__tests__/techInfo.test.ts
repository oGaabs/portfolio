/**
 * techInfo tests generated on 2025-09-19.
 * Testing framework: Jest/Vitest compatible (describe/it/expect). No new dependencies introduced.
 * Focus: Validate public interfaces found in src/utils/techInfo.* with emphasis on PR changes.
 */

const g = globalThis as any;
const useJest = typeof g.jest !== "undefined";
const mocker = useJest ? g.jest : g.vi;
const resetAll = () => {
  if (useJest) {
    g.jest.resetAllMocks?.();
    g.jest.restoreAllMocks?.();
    g.jest.clearAllMocks?.();
  } else if (g.vi) {
    g.vi.resetAllMocks?.();
    g.vi.restoreAllMocks?.();
    g.vi.clearAllMocks?.();
  }
};

describe("techInfo utilities", () => {
  beforeEach(() => {
    resetAll();
  });

  let mod: any;
  const importModule = async () => {
    try { mod = await import("../techInfo"); return mod; } catch {}
    try { mod = await import("../../techInfo"); return mod; } catch {}
    try { mod = await import("../../../utils/techInfo"); return mod; } catch {}
    throw new Error("Cannot locate techInfo module from test. Update import paths.");
  };

  const withNavigatorUA = (ua: string | null, fn: () => void) => {
    const originalNav = g.navigator;
    const originalUA = originalNav?.userAgent;
    const fakeNav: any = { userAgent: ua ?? "" };
    Object.defineProperty(globalThis, "navigator", {
      configurable: true,
      get: () => (ua === null ? undefined : { ...fakeNav }),
    });
    try { fn(); } finally {
      if (originalNav) {
        Object.defineProperty(globalThis, "navigator", {
          configurable: true,
          get: () => originalNav,
        });
        if (originalUA !== undefined) {
          try { g.navigator.userAgent = originalUA; } catch {}
        }
      } else {
        try { delete g.navigator; } catch {}
      }
    }
  };

  it("loads module and exposes expected public APIs", async () => {
    await importModule();
    const apis = ["getTechInfo", "getBrowserInfo", "getOSInfo", "isBrowser", "isNode"];
    apis.forEach(name => expect(mod[name]).toBeDefined());
  });

  it("getBrowserInfo handles standard Chrome UA", async () => {
    await importModule();
    if (!mod || typeof mod.getBrowserInfo !== "function") return;
    withNavigatorUA(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      () => {
        const info = mod.getBrowserInfo();
        expect(info.name).toMatch(/chrome/i);
        expect(info.engine).toMatch(/chrom(e|ium)/i);
      }
    );
  });

  it("getBrowserInfo handles null UA without throwing", async () => {
    await importModule();
    if (!mod || typeof mod.getBrowserInfo !== "function") return;
    withNavigatorUA(null, () => {
      expect(() => mod.getBrowserInfo()).not.toThrow();
      const info = mod.getBrowserInfo();
      expect(info && typeof info).toBe("object");
    });
  });

  it("getTechInfo returns cohesive summary", async () => {
    await importModule();
    if (!mod || typeof mod.getTechInfo !== "function") return;
    const summary = mod.getTechInfo();
    expect(summary && typeof summary).toBe("object");
    ["browser", "os"].forEach(k => expect(Object.keys(summary)).toContain(k));
  });
});