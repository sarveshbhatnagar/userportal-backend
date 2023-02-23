const validateStatusCode = (statusCode: number) => {
    if (!statusCode) {
        return false;
    }
    if (isNaN(statusCode)) {
        return false;
    }
    return true;
}

const validateResponse = (statusCode, body) => {
    if (!validateStatusCode(statusCode)) {
        return false;
    }
    return true;
    
}

export { validateResponse };