import { arrayFruits, arrayColors } from "../array";
describe("Comprobaremos que existe un elemtno", () => {
  test("¿Tiene una banana? ", () => {
    expect(arrayFruits()).toContain("platano");
  });

  test("¿No contiene una banana? ", () => {
    expect(arrayFruits()).not.toContain("banana");
  });
  test("Comprobar tamañoa de un arreglo? ", () => {
    expect(arrayFruits()).toHaveLength(6);
  });
});
