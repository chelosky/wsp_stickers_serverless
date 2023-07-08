exports.handler = async function(event, context) {
    return { statusCode: 200, body: JSON.stringify({ message: 'API V.1.0.1' }), };
}