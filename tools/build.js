/* eslint-disable */
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.prod');
var fs = require('fs');
var path = require('path');
var colors = require('colors');

process.env.NODE_ENV = 'production';

const Spinner = require('cli-spinner').Spinner;
const LineUp = require('lineup');

const spinner = new Spinner('Generating josenunes.xyz\'s minified bundle for production. This will take a moment...'.cyan);
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

  if (jsonStats.hasErros) {
    spinner.stop();
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarning) {
    console.log(lineup.icon('warn'), 'Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  if (!(jsonStats.hasErros || jsonStats.hasWarning)) {
    console.log('\n');
    console.log(lineup.icon('success'), 'No warnings or errors were generated during the build process!'.green);
  }

  console.log(lineup.icon('success'), 'josenunes.xyz has been compiled in production mode and written to /dist.\n'.underline.green);

  spinner.stop();
  return 0;
});
