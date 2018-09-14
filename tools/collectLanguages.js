import path from 'path';

const poconnect = require('node-poeditor');

const URL = 'https://poeditor.com/api/languages/list';
const API_TOKEN = '794dd73030c311a858e81526a7dd8495';
const PROJECT_ID = 102633;

const localesPath = path.join(__dirname, '..', 'locales');

const https = require('https');
const fs = require('fs');

const collectFile = (code, apiToken, projectId) => {
  (async () => {
    const obj = {
      language: code,
      type: 'json',
    };

    try {
      const res = await poconnect.projects.export(apiToken, projectId, obj);
      const dir = path.join(localesPath, code);
      console.log(dir);
      if (!fs.existsSync(dir)) {
        console.log('here');
        fs.mkdirSync(dir);
      }
      const file = fs.createWriteStream(path.join(dir, 'translation.json'));
      https.get(res.url, response => response.pipe(file));
    } catch (err) {
      // err => returns an error when failed
    }
  })();
};

const collectLanguages = (apiToken, projectId) => {
  (async () => {
    try {
      const res = await poconnect.languages.list(apiToken, projectId);
      res.languages.forEach(lang => {
        collectFile(lang.code, apiToken, projectId);
      });
    } catch (err) {
      // err => returns an error when failed
    }
  })();
};

collectLanguages(API_TOKEN, PROJECT_ID);