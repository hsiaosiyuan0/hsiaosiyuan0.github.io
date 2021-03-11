import fs from "fs";
import yaml from "yaml";
import assert from "assert";
import path from "path";

assert.ok(process.env.ROOT, "process.env.ROOT should be set");
assert.ok(process.env.WORDS, "process.env.WORDS should be set");
assert.ok(process.env.BASENAME, "process.env.BASENAME should be set");

export const catalogFilename = "_catalog.md";
export const ROOT = process.env.ROOT;
export const WORDS = process.env.WORDS;
export const BASENAME = process.env.BASENAME;

export async function readCtgMeta(file: string): Promise<any> {
  try {
    const stuff = (await fs.promises.readFile(file)).toString();
    return yaml.parse(stuff);
  } catch (error) {
    return {};
  }
}

export async function retrieveConfig() {
  return readCtgMeta(path.join(ROOT, "gadget.yml"));
}
