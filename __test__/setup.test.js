//despues de cada prueba
afterEach(() => console.log("Despeus de cada prueba"));

afterAll(() => console.log("Despues de todas las pruebas"));

//antes de cada prueba

beforeAll(() => console.log("Antes de todas las pruebas"));
beforeEach(() => console.log("Antes de cada prueba"));

describe('Preparar anets de ejecutar', () => {
    test('es verdadero', () => {
        expect(true).toBeTruthy()
    });
})
