import { getDataFromApi } from "../promise";
describe("Testing using promises with async/await", () => {
  test("Calling an API", async () => {
    const { results } = await getDataFromApi(
      "https://rickandmortyapi.com/api/character/"
    );
    expect(results.length).toBeGreaterThan(0);

    const { name } = await getDataFromApi(
      "https://rickandmortyapi.com/api/character/1"
    );
    expect(name).toEqual("Rick Sanchez");
  });
});
