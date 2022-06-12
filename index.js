import fastify from 'fastify';
import S from 'fluent-json-schema';
const server = fastify();
server.route({
    method: 'GET',
    url: '/health',
    schema: S.object()
        .prop('body', undefined)
        .prop('headers', undefined)
        .prop('params', undefined)
        .prop('querystring', undefined)
        .prop('response', undefined)
        .valueOf()
    // {
    //   body: undefined,
    //   headers: undefined,
    //   params: undefined,
    //   querystring: undefined,
    //   response: {
    //     200: {
    //       type: 'string'
    //     }
    //   }
    // }
    ,
    handler: function (request, reply) {
        const temp = request.query;
        reply.send(temp.asdf);
    }
});
server.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
