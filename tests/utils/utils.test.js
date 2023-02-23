import {buildResponse, isCharacterALetter, checkIfEmpty, areObjectsEqual} from '../../utils/utils';


describe('Utils Module : Build Response', () => {

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

});

describe('Utils Module : isCharacterALetter', () => {
    test("Should return true if character is a letter", () => {
        const response = isCharacterALetter("a");
        expect(response).toEqual(true)
    })

    test("Should return false if character is not a letter", () => {
        const response = isCharacterALetter("1");
        expect(response).toEqual(false)
    })

    test("Should return false if character is not a letter", () => {
        const response = isCharacterALetter("!");
        expect(response).toEqual(false)
    })

    test("Should return false if character is not a letter", () => {

        const response = isCharacterALetter(" ");
        expect(response).toEqual(false)
    })

    test("Should return false if character is undefined", () => {
        const response = isCharacterALetter(undefined);
        expect(response).toEqual(false)
    })

    test("Should return false if character is null", () => {
        const response = isCharacterALetter(null);
        expect(response).toEqual(false)
    })

    test("Should return false if character is empty string", () => {
        const response = isCharacterALetter("");
        expect(response).toEqual(false)
    })

});


describe('Utils Module : Check if empty', () => {
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

    test("Should return true if nothing is passed", () => {
        const response = checkIfEmpty();
        expect(response).toEqual(true)
    })
});


describe('Utils Module : areObjectsEqual', () => {
    test('should return true for two equal objects', () => {
      const obj1 = {a: 1, b: '2', c: true};
      const obj2 = {a: 1, b: '2', c: true};
      expect(areObjectsEqual(obj1, obj2)).toBe(true);
    });
  
    test('should return false for two objects with different properties', () => {
      const obj1 = {a: 1, b: '2', c: true};
      const obj2 = {a: 1, b: '2', d: false};
      expect(areObjectsEqual(obj1, obj2)).toBe(false);
    });
  
    test('should return false for two objects with different property values', () => {
      const obj1 = {a: 1, b: '2', c: true};
      const obj2 = {a: 1, b: '2', c: false};
      expect(areObjectsEqual(obj1, obj2)).toBe(false);
    });
  
    test('should return true for two empty objects', () => {
      const obj1 = {};
      const obj2 = {};
      expect(areObjectsEqual(obj1, obj2)).toBe(true);
    });
  
    test('should return false for an object and null', () => {
      const obj1 = {a: 1, b: '2', c: true};
      const obj2 = null;
      expect(areObjectsEqual(obj1, obj2)).toBe(false);
    });

    test('should return false for an object and undefined', () => {
        const obj1 = {a: 1, b: '2', c: true};
        const obj2 = undefined;
        expect(areObjectsEqual(obj1, obj2)).toBe(false);
      });
  
    test('should return false for two objects with different number of properties', () => {
      const obj1 = {a: 1, b: '2', c: true};
      const obj2 = {a: 1, b: '2'};
      expect(areObjectsEqual(obj1, obj2)).toBe(false);
    });
  
    test('should return true for two objects with same properties in different order', () => {
      const obj1 = {a: 1, b: '2'};
      const obj2 = {b: '2', a: 1};
      expect(areObjectsEqual(obj1, obj2)).toBe(true);
    });
  });
  