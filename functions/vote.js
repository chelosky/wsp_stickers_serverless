exports.handler = async function(event, context) {
    const { body, httpMethod } = event;
    const params = JSON.parse(body || null);

    if(httpMethod != 'PUT' || !params || !params.id || !params.vote || isNaN(params.vote)) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Invalid parameters!' }), };
    }

    const sumKey = `rev-sum-${params.id}`;
    const countKey = `rev-count-${params.id}`;

    return require('./utils').handler([{key: sumKey, value: params.vote}, {key: countKey, value: 1}]);
}