import { AppLogger } from "../src/utils/logger";
import { LogLevel } from "../src/utils/loggerTypes";

function makeLogger(overrides?: ConstructorParameters<typeof AppLogger>[0]) {
  return new AppLogger(overrides);
}

test("logs error messages via console.error", () => {
  const spy = vi.spyOn(console, "error").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.ERROR });
  log.error("boom");
  expect(spy).toHaveBeenCalledOnce();
  expect(spy.mock.calls[0][0]).toContain("[ERROR]");
  expect(spy.mock.calls[0][0]).toContain("boom");
  spy.mockRestore();
});

test("logs info messages via console.info", () => {
  const spy = vi.spyOn(console, "info").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.INFO });
  log.info("hello");
  expect(spy).toHaveBeenCalledOnce();
  expect(spy.mock.calls[0][0]).toContain("[INFO]");
  spy.mockRestore();
});

test("logs debug messages via console.debug", () => {
  const spy = vi.spyOn(console, "debug").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.DEBUG });
  log.debug("trace");
  expect(spy).toHaveBeenCalledOnce();
  expect(spy.mock.calls[0][0]).toContain("[DEBUG]");
  spy.mockRestore();
});

test("suppresses messages below configured level", () => {
  const spy = vi.spyOn(console, "debug").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.ERROR });
  log.debug("should not appear");
  expect(spy).not.toHaveBeenCalled();
  spy.mockRestore();
});

test("includes meta as JSON when provided", () => {
  const spy = vi.spyOn(console, "error").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.ERROR });
  log.error("msg", { key: "val" });
  expect(spy.mock.calls[0][0]).toContain('{"key":"val"}');
  spy.mockRestore();
});

test("includes timestamp in output by default", () => {
  const spy = vi.spyOn(console, "info").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.INFO, timestamp: true });
  log.info("ts test");
  expect(spy.mock.calls[0][0]).toMatch(/\[\d{4}-\d{2}-\d{2}T/);
  spy.mockRestore();
});

test("omits timestamp when disabled", () => {
  const spy = vi.spyOn(console, "info").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.INFO, timestamp: false });
  log.info("no-ts");
  expect(spy.mock.calls[0][0]).not.toMatch(/\[\d{4}-\d{2}-\d{2}T/);
  spy.mockRestore();
});

test("includes prefix in output", () => {
  const spy = vi.spyOn(console, "info").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.INFO, prefix: "MyModule" });
  log.info("prefixed");
  expect(spy.mock.calls[0][0]).toContain("[MyModule]");
  spy.mockRestore();
});

test("child logger uses combined prefix", () => {
  const spy = vi.spyOn(console, "info").mockReturnValue(undefined);
  const parent = makeLogger({ level: LogLevel.INFO, prefix: "Parent" });
  const child = parent.child("Child");
  child.info("from child");
  expect(spy.mock.calls[0][0]).toContain("[Parent:Child]");
  spy.mockRestore();
});

test("child logger without parent prefix uses just child prefix", () => {
  const spy = vi.spyOn(console, "info").mockReturnValue(undefined);
  const log = makeLogger({ level: LogLevel.INFO });
  const child = log.child("Sub");
  child.info("sub msg");
  expect(spy.mock.calls[0][0]).toContain("[Sub]");
  spy.mockRestore();
});

test("logger with no config uses defaults (INFO level, timestamp on)", () => {
  const spy = vi.spyOn(console, "info").mockReturnValue(undefined);
  const log = makeLogger();
  log.info("default cfg");
  expect(spy).toHaveBeenCalledOnce();
  spy.mockRestore();
});
