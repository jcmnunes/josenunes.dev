interface Project {
  key: string;
  url: string;
  linkText: string;
  helpText: string;
  auxInfo: string;
}

export const projects: Project[] = [
  {
    key: 'widy',
    url: 'https://github.com/BinaryCapsule/widy-web',
    linkText: 'Widy',
    helpText: 'Productivity app',
    auxInfo:
      'Widy is is a modern React SPA with all the common features of a CRUD app. It consumes a NestJS based REST API.',
  },
  {
    key: 'ui-caps',
    url: 'https://github.com/jcmnunes/ui-capsules',
    linkText: 'UI-Capsules',
    helpText: 'React UI kit',
    auxInfo:
      'UI-Capsules is a collection of reusable and accessible components to build UIs with React. It is similar in nature to some popular projects like Chakra UI or Mantine.',
  },
  {
    key: 'editor',
    url: 'https://github.com/jcmnunes/editor',
    linkText: 'Editor',
    helpText: 'Rich text editor',
    auxInfo: 'Prosemirror based editor with markdown shortcuts and serialization.',
  },
  {
    key: 'website',
    url: 'https://github.com/jcmnunes/josenunesxyz',
    linkText: 'josenunes.dev',
    helpText: 'Personal Website',
    auxInfo:
      'My personal website (you are looking at it). It is  a static site powered by Next.js.',
  },
];
