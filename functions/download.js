exports.handler = async function(event, context) {
    const { queryStringParameters: params, httpMethod } = event;

    if(httpMethod != 'PUT' || !params.id) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Not valid parameters' }), };
    }

    const downloadKey = `download-${params.id}`;

    return require('./utils').handler([{key: downloadKey, value: 1}]);
}