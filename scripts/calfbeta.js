import {core} from './getVersion.js';
import uglyCalf from './uglyCalf';

const github = require('./config.json').github;

export default uglyCalf(
  'beta',
  {
    _BETA: true,
    _CSSPATH: `${github}resources/beta/${core}/`,
    _DEV: false
  }
);
