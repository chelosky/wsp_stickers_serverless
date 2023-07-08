exports.handler = async function(event, context) {
    const { body, httpMethod } = event;
    const params = JSON.parse(body || null);

    if(httpMethod != 'PUT' || !params || !params.id) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Not valid parameters'}), };
    }

    const downloadKey = `download-${params.id}`;

    return require('./utils').handler([{key: downloadKey, value: 1}]);
}