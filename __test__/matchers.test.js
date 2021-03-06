import { exportAllDeclaration } from "@babel/types";

describe("Comparadores comunes", () => {
  const user = {
    name: "javier",
    lastname: "Fuentes"
  };
  const user2 = {
    name: "javier",
    lastname: "Fuentes"
  };
  test("igualdad de elementos", () => {
    expect(user).toEqual(user2);
  });
  test("No son exactamente iguales", () => {
    expect(user).not.toEqual("lala");
  });
});
