import { join, resolve } from "path";
import { ESLint } from "eslint";

export const runESLint = async (
  kind: string,
  config = `presets/${kind}.js`
): Promise<AccumulatedLintResult> => {
  const projectRoot = resolve(__dirname, "../..");
  const testDataRoot = join(projectRoot, "testdata");
  const dir = join(testDataRoot, kind);
  const linter = new ESLint({
    baseConfig: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        createDefaultProgram: true,
        project: "./tsconfig.json",
      },
    },
    overrideConfigFile: join(projectRoot, config),
    ignore: false,
    useEslintrc: false,
    extensions: [".ts", ".tsx"],
  });
  const results = await linter.lintFiles([dir]);
  const shortenName = (path: string): string => path.replace(`${dir}/`, "");
  return results.reduce<AccumulatedLintResult>(
    (acc, { messages, filePath }): AccumulatedLintResult => ({
      ...acc,
      [shortenName(filePath)]: messages.reduce<FileLintResult>(
        ({ errors, warnings }, { severity, ruleId }): FileLintResult => {
          if (ruleId === null) {
            return { errors, warnings };
          }
          switch (severity) {
            case 1:
              return { errors, warnings: [...warnings, ruleId] };
            case 2:
              return { warnings, errors: [...errors, ruleId] };
            default:
              throw new Error(
                `Unknown serverity: ${severity}; ruleId: ${ruleId}`
              );
          }
        },
        {
          errors: [],
          warnings: [],
        }
      ),
    }),
    {}
  );
};

export type AccumulatedLintResult = { [key: string]: FileLintResult };

export interface FileLintResult {
  readonly errors: string[];
  readonly warnings: string[];
}
