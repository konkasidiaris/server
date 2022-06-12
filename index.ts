import fastify, {FastifyInstance} from 'fastify';
import S from 'fluent-json-schema';
import {logger} from './logger.js'

const server: FastifyInstance = fastify({logger});

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
  logger.info(`Server listening at ${address}`);
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(signal => {
  process.once(signal as NodeJS.Signals, () => {
    logger.info('Received %s - terminating process...', signal);
    server.close().then(() => {
      process.exit(0);
    });
  });
});

process.on('exit', () => logger.info('Process terminated'));