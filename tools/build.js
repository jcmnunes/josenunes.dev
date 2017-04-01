/* eslint-disable no-console, max-len, no-unused-vars, no-bitwise */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import fs from 'fs';
import path from 'path';
import colors from 'colors';

process.env.NODE_ENV = 'production';

const Spinner = require('cli-spinner').Spinner;
const LineUp = require('lineup');

const spinner = new Spinner('Generating doDOC\'s minified bundle for production. This will take a moment...'.cyan);
spinner.setSpinnerString(18);
spinner.start();
console.log('\n');
const lineup = new LineUp();

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(lineup.icon('error'), err.bold.red);
    spinner.stop();
    return 1;
  }

  const jsonStats = stats.toJson();

  const dir = path.join(__dirname, '..', 'stats');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(path.join(dir, 'stats.json'), JSON.stringify(jsonStats));

  if (stats.hasErrors()) {
    spinner.stop();
    console.log('\n');
    console.log(lineup.icon('error'), 'Webpack generated the following errors: \n'.bold.red);
    return jsonStats.errors.map(error => console.log(error.red));
  }

  // if (stats.hasWarnings()) {
  //   console.log('\n');
  //   console.log(lineup.icon('warn'), 'Webpack generated the following warnings: \n'.bold.yellow);
  //   jsonStats.warnings.map(warning => console.log(warning.yellow));
  // }

  if (!(stats.hasErrors() || stats.hasWarnings())) {
    console.log('\n');
    console.log(lineup.icon('success'), 'No warnings or errors were generated during the build process!'.green);
  }

  console.log(lineup.icon('success'), 'doDOC app has been compiled in production mode and written to /dist.\n'.underline.green);

  spinner.stop();
  return 0;
});
