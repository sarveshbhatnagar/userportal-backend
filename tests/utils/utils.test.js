import {buildResponse, isCharacterALetter} from '../../utils/utils';


describe('Utils Module', () => {

    test("Should return a properly formatted response", () => {
        const response = buildResponse(200, {message: "Test message"});
        expect(response).toEqual({
            statusCode: 200,
            isBase64Encoded: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: "Test message"})
        });
    });

    test("Should work with empty body", () => {
        const response = buildResponse(200);
        expect(response).toEqual({
            statusCode: 200,
            isBase64Encoded: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(undefined)
        });
    });


    test("Should throw an error if no status code is provided", () => {
        expect(() => buildResponse()).toThrow();
    });

    test("Should throw an error if status code is not a number", () => {
        expect(() => buildResponse("invalidStatus")).toThrow();
    });

    test("Should return true if first character is an aplhabet", () => {
        const response = isCharacterALetter("a");
        expect(response).toEqual(true)
    })

});