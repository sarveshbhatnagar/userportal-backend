import {buildResponse, isCharacterALetter, checkIfEmpty} from '../../utils/utils';


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


describe('Check if empty', () => {
    test("Should return true if value is null", () => {
        const response = checkIfEmpty(null);
        expect(response).toEqual(true)
    })

    test("Should return true if value is empty string", () => {
        const response = checkIfEmpty("");
        expect(response).toEqual(true)
    })

    test("Should return false if value is not empty", () => {
        const response = checkIfEmpty("test");
        expect(response).toEqual(false)
    })

    test("Should return true if value is undefined", () => {
        const response = checkIfEmpty(undefined);
        expect(response).toEqual(true)
    })
});