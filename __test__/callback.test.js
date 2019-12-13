import { callbackHell } from "../callback";

describe("Probando un callback", () => {
  test("Callback", (done) => {
    function otherCallback(data) {
      expect(data).toBe("Hola Javascripters");
      done();
    }
    callbackHell(otherCallback);
  });
 
});
