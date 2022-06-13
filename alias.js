const moduleAlias = require('module-alias');
const path = require('path');

const basePath = path.join(__dirname, 'build/src');

moduleAlias.addAlias('@logger', path.join(basePath, 'logger.js'));
