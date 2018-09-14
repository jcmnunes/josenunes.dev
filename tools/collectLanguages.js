/* eslint-disable no-console */
import path from 'path';
import poconnect from 'node-poeditor';
import mkdirp from 'mkdirp';
import download from 'download-file';

const LineUp = require('lineup');

const lineup = new LineUp();

const API_TOKEN = '794dd73030c311a858e81526a7dd8495';
const PROJECT_ID = 102633;
const localesPath = path.join(__dirname, '..', 'src', 'locales');

/**
 * Makes call to https://api.poeditor.com/v2/projects/export
 * See docs (https://poeditor.com/docs/api#projects_export)
 * 
 * @param {string} code 
 * @param {string} apiToken 
 * @param {number} projectId 
 */
const collectFile = async (code, apiToken, projectId) => {
  const obj = {
    language: code,
    type: 'json',
  };

  try {
    const res = await poconnect.projects.export(apiToken, projectId, obj);
      
    mkdirp(path.resolve(localesPath, code), err => {
      if (err) console.error(err);
      else {
        const options = {
          directory: path.resolve(localesPath, code),
          filename: 'translation.json',
        };
        download(res.url, options, e => {
          if (e) throw e;
          console.log(
            lineup.icon('success'),
            `Translations file for language ${code} saved to src/locales/${code}\n`.green,
          );
        }); 
      }
    });
  } catch (err) {
    console.log(err);
  }
};


/**
 * Makes call to https://api.poeditor.com/v2/languages/list
 * See docs (https://poeditor.com/docs/api#languages_list)
 * 
 * @param {string} apiToken
 * @param {number} projectId
 */
const collectLanguages = async (apiToken, projectId) => {
  try {
    const res = await poconnect.languages.list(apiToken, projectId);
    res.languages.forEach(lang => {
      collectFile(lang.code, apiToken, projectId);
    });
  } catch (err) {
    console.log(err);
  }
};

collectLanguages(API_TOKEN, PROJECT_ID);