import { sumar, restar, multiplicar, dividir } from "../math";

describe("Calculos matematicos", () => {
  test("Prueba de sumas", () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test("Prueba de restas", () => {
    expect(restar(1, 1)).toBe(0);
  });
  test("Prueba de multiplicar", () => {
    expect(multiplicar(5, 2)).toBe(10);
  });
  test("Prueba de sumas", () => {
    expect(dividir(10, 2)).toBe(5);
  });
});
