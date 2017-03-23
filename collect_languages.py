"""Collect all translation files from POEditor"""
import json
import os
import requests

URL = 'https://poeditor.com/api/'
API_TOKEN = '794dd73030c311a858e81526a7dd8495'
PROJECT_ID = 102633

base_path = os.path.dirname(os.path.abspath(__file__))
locales_path = os.path.join(base_path, 'src', 'locales')

def log(string):
    print "[Language] %s" % string

def collect_languages(api_token, project_id):
    """collects all the languages available from POEditor"""
    data = {
        'api_token': api_token,
        'action': 'list_languages',
        'id': project_id
    }
    post = requests.post(URL, data)
    post = json.loads(post.content)
    if post['response']['status'] == 'success':
        for language in post['list']:
            log('collecting ' + language['name'])
            collect_file(language['code'], api_token, project_id)
        log('\nTranslation files collected successfully.')
        log('Files saved to {0}'.format(locales_path))
    else:
        log('Something went wrong..')
        log(post['response']['message'])
        exit(1)

def collect_file(code, api_token, project_id):
    """collects the translation strings and and saves to translation.json"""
    data = {'api_token': api_token,
            'action': 'export', 'id': project_id, 'language': code,
            'type': 'key_value_json'}
    log('getting ' + code + ' url..')
    post = requests.post(URL, data)
    post = json.loads(post.content)
    log('got ' + post['item'])
    log('getting ' + code + ' strings..')
    get = requests.get(post['item'])
    get = json.loads(get.content)
    path = os.path.join(locales_path, code)
    if not os.path.exists(path):
        os.makedirs(path)
    filepath = os.path.join(path, 'translation.json')
    with open(filepath, 'w') as json_file:
        log('saving translation strings to json file...')
        json.dump(get, json_file)
        log('done')

if __name__ == '__main__':
    collect_languages(API_TOKEN, PROJECT_ID)
