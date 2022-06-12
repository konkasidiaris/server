
/**
 * Logger module
 *
 * @module logger
 */

import pino from 'pino';

const prettyPrintLogs = process.env['PINO_PRETTY'] === 'yes';

export const logger = pino({
    level: process.env['LOG_LEVEL'] || 'info',
    prettyPrint: prettyPrintLogs ? {colorize: true} : false,
  enabled: process.env['NODE_ENV'] !== 'test' && process.env['LOG_DISABLED'] !== 'yes'
})