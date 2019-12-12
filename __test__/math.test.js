import { sumar, restar, multiplicar, dividir } from "../math";

describe("Calculos matematicos", () => {
  test("Prueba de sumas", () => {
    expect(sumar(1, 1)).toBe(2);
  });
});
