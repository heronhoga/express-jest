import { calculate } from "../src/controllers/calculator-controllers";
import { jest } from "@jest/globals";

describe("calculate controller", () => {
    let req, res;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    test("should return 400 if request body is missing", async () => {
        req.body = null;

        await calculate(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Invalid request body" });
    });

    test("should return 400 if a or b is missing", async () => {
        req.body = { a: 5 };

        await calculate(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Both 'a' and 'b' should be provided" });
    });

    test("should return 200 with sum result", async () => {
        req.body = { a: 2, b: 3 };

        await calculate(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: "Calculation successful", result: 5 });
    });

    // test("should return 500 if an unexpected error occurs", async () => {
    //     req.body = { a: 2, b: 3 };

    //     jest.spyOn(global.console, "error").mockImplementation(() => {});
    //     jest.spyOn(JSON, "stringify").mockImplementation(() => { throw new Error("Test Error"); });

    //     await calculate(req, res);

    //     expect(res.status).toHaveBeenCalledWith(500);
    //     expect(res.json).toHaveBeenCalledWith({ message: "Internal server error" });

    //     JSON.stringify.mockRestore();
    // });
});
