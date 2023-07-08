exports.handler = async function(event, context) {
    const { queryStringParameters: params, httpMethod } = event;

    if(httpMethod != 'PUT' || !params.id || !params.vote || isNaN(params.vote)) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Not valid parameters' }), };
    }

    const sumKey = `rev-sum-${params.id}`;
    const countKey = `rev-count-${params.id}`;

    return require('./utils').handler([{key: sumKey, value: params.vote}, {key: countKey, value: 1}]);
}