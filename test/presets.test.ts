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
    });
  });

  test("docs-typescript", async () => {
    const results = await runESLint("docs-typescript");
    expect(results).toStrictEqual({
      "ok.ts": { errors: [], warnings: [] },
    });
  });
});
