describe("Comprobar cadenas de texto", () => {
  const text = "Un bonito texto";
  test("Debe de contener el texto ", () => {
    expect(text).toMatch(/bonito/);
  });
  test("Tamaño de texto", () => {
    expect(text).toHaveLength(15);
  });
});
