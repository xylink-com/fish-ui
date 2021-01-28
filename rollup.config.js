import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import copy from "rollup-plugin-copy";

const path = require("path");
const packageJson = require("./package.json");
const customResolver = resolve({
  extensions: [".mjs", ".js", ".jsx", ".json", ".sass", ".scss"],
});

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    alias({
      entries: [{ find: "src/", replacement: path.resolve("src/") }],
      customResolver
    }),
    postcss({
      plugins: [],
    }),
    resolve(),
    peerDepsExternal(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    copy({
      targets: [
        {
          src: "src/README.en-US.md",
          dest: "./",
          rename: "README.en-US.md",
        },
        {
          src: "src/README.zh-CN.md",
          dest: "./",
          rename: "README.md",
        },
      ],
    }),
  ],
};
