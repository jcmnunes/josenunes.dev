import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    key: uuidv4(),
    linkText: 'Widy app',
    linkUrl: 'https://github.com/jcmnunes/widy',
    auxInfo: 'Widy is a productivity app. On the frontend, Widy is a SPA React/Redux app. On the backend, Widy is a Node/Express/MongoDB app.',
  },
  {
    key: uuidv4(),
    linkText: 'UI-Capsules',
    linkUrl: 'https://github.com/jcmnunes/ui-capsules',
    auxInfo: 'React UI kit',
  },
  {
    key: uuidv4(),
    linkText: 'josenunes.dev',
    linkUrl: 'https://github.com/jcmnunes/josenunesxyz',
    auxInfo: 'Personal Website/Blog (Powered by Gatsby)',
  },
  {
    key: uuidv4(),
    linkText: 'BC Editor',
    linkUrl: 'https://github.com/jcmnunes/editor',
    auxInfo: 'Prosemirror based editor with markdown shortcuts and serialization.',
  },
];

export default projects;
