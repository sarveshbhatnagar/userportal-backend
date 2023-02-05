export function buildResponse(statusCode, body){
    return {
        isBase64Encoded: false,
        statusCode: statusCode,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}
