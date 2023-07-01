import {expect} from "chai"
import { helloController } from "../../sources/controllers/hello.mjs";

describe("Hello Controller", () => {
    it("should return 'hello world' string", () => {
        const result = helloController()

        expect(result).to.be.equal("Hello, world!")
    });
});