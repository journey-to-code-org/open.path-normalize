import path from "node:path";

export function normalizePath(value, options = {}) {
  if (typeof value !== "string") throw new TypeError("Expected value to be a string");
  const style = options.style ?? "native";
  if (style === "native") return path.normalize(value);
  if (style === "posix") return path.posix.normalize(value.replace(/\\/gu,"/"));
  if (style === "windows") return path.win32.normalize(value.replace(/\//gu,"\\"));
  throw new RangeError("Unknown path style");
}

export function toPosixPath(value) {
  if (typeof value !== "string") throw new TypeError("Expected value to be a string");
  return value.replace(/\\/gu,"/");
}

export function toWindowsPath(value) {
  if (typeof value !== "string") throw new TypeError("Expected value to be a string");
  return value.replace(/\//gu,"\\");
}
