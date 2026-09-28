import test from "node:test";
import assert from "node:assert/strict";
import { normalizePath, toPosixPath, toWindowsPath } from "../src/index.js";
test("posix conversion",()=>assert.equal(toPosixPath("a\\b\\c"),"a/b/c"));
test("windows conversion",()=>assert.equal(toWindowsPath("a/b/c"),"a\\b\\c"));
test("posix normalization",()=>assert.equal(normalizePath("a//b/../c",{style:"posix"}),"a/c"));
