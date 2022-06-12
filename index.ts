import fastify, {FastifyInstance} from 'fastify';
import S from 'fluent-json-schema';

const server: FastifyInstance = fastify();

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
  ,
  handler: function (request, reply) {
    type ASDF = { asdf: string };
    const temp: ASDF = request.query as ASDF;
    reply.send(temp.asdf)
  }
})

server.listen({ port: 3000, host:"0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
