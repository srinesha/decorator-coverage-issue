import { Test } from "../src/app";

describe("Check application health", () => {
  test("application is accessible", async () => {
    const test = new Test();
    test.doSomething();
  });
});
