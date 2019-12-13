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
  test('Respuestas de API',async () => {
   try {
      // Sabemos que esta request va a devolver un error 500, entonces va a ejecutar el catch con el error.
      await getDataFromApi(`http://httpstat.us/500`);
    } catch(error) {
      expect(error).toEqual(new Error('Request failed with status code 500'));
    }
  });
});
