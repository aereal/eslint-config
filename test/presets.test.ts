import { runESLint } from "./lib/run-lint";

describe("preset", () => {
  test("typescript", async () => {
    const results = await runESLint("typescript");
    expect(results).toStrictEqual({
      "ok.ts": { errors: [], warnings: [] },
      "ng.ts": {
        errors: [
          "@typescript-eslint/member-ordering",
          "@typescript-eslint/member-ordering",
          "@typescript-eslint/member-ordering",
        ],
        warnings: [],
      },
      "deprecated.ts": { errors: [], warnings: ["deprecation/deprecation"] },
    });
  });

  test("docs-typescript", async () => {
    const results = await runESLint("docs-typescript");
    expect(results).toStrictEqual({
      "ok.ts": { errors: [], warnings: [] },
    });
  });

  test("react-typescript", async () => {
    const results = await runESLint("react-typescript");
    expect(results).toStrictEqual({
      "ok.tsx": { errors: [], warnings: [] },
    });
  });
});
