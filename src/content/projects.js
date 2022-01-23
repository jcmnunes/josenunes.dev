import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    key: uuidv4(),
    linkText: 'Widy',
    linkUrl: 'https://github.com/BinaryCapsule/widy-web',
    auxInfo: 'Widy is a (breakable toy) productivity app.',
  },
  {
    key: uuidv4(),
    linkText: 'UI-Capsules',
    linkUrl: 'https://github.com/jcmnunes/ui-capsules',
    auxInfo: 'React UI kit',
  },
  {
    key: uuidv4(),
    linkText: 'Editor',
    linkUrl: 'https://github.com/jcmnunes/editor',
    auxInfo: 'Prosemirror based editor with markdown shortcuts and serialization.',
  },
  {
    key: uuidv4(),
    linkText: 'josenunes.dev',
    linkUrl: 'https://github.com/jcmnunes/josenunesxyz',
    auxInfo: '(This) Personal Website/Blog',
  },
];

export default projects;
