import { isNull, isTrue, isFalse, isUndefined } from "../true";

describe("Probar tipologia de datos", () => {
  test("null", () => {
    expect(isNull()).toBeNull();
  });
  test("undefined", () => {
    expect(isUndefined()).toBeUndefined();
  });
  test("true", () => {
    expect(isTrue()).toBeTruthy();
  });
  test("false", () => {
    expect(isFalse()).toBeFalsy();
  });
  test("cosa rara", () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
