import { v4 as uuidv4 } from 'uuid';

const articles = [
  {
    key: uuidv4(),
    linkText: 'React Query as a State Manager',
    linkUrl: 'https://prateeksurana.me/blog/why-using-object-spread-with-reduce-bad-idea/',
    secondaryInfo: 'TkDodo',
    auxInfo: 'Part #10 of TkDoddo’s article collection about react-query. As usual, a mandatory read.',
  },
  {
    key: uuidv4(),
    linkText: 'The magic of react-query and supabase',
    linkUrl: 'https://dev.to/ankitjey/the-magic-of-react-query-and-supabase-1pom',
    secondaryInfo: 'Ankit Jena',
    auxInfo: 'Extensive and well written article about combining react-query and Supabase.',
  },
  {
    key: uuidv4(),
    linkText: 'Why using object spread with reduce probably a bad idea',
    linkUrl: 'https://prateeksurana.me/blog/why-using-object-spread-with-reduce-bad-idea/',
    secondaryInfo: 'Prateek Surana',
    auxInfo: 'An interesting article from Prateek Surana regarding performance of the object spread operator and its use in Array.reduce.',
  },
  {
    key: uuidv4(),
    linkText: 'Using WebSockets with React Query',
    linkUrl: 'https://tkdodo.eu/blog/using-web-sockets-with-react-query',
    secondaryInfo: 'TkDodo',
    auxInfo: 'Adding websockets into a react-query powered app can be a walk in the park. TkDodo explains why.',
  },
  {
    key: uuidv4(),
    linkText: 'How to choose the right React state management solution',
    linkUrl: 'https://blog.logrocket.com/how-to-choose-the-right-react-state-management-solution/',
    secondaryInfo: 'Iva Kop',
    auxInfo: 'A great overview of several state management solutions in the React ecosystem.',
  },
  {
    key: uuidv4(),
    linkText: 'Reduce State Management Footprint with React Query',
    linkUrl: 'https://blog.testdouble.com/posts/2021-05-03-reduce-state-management-with-react-query/',
    secondaryInfo: 'Tommy Groshong',
    auxInfo: 'Tommy Groshong talks about React Query, and why he thinks it is a must have in a React app.',
  },
  {
    key: uuidv4(),
    linkText: 'Practical React Query',
    linkUrl: 'https://tkdodo.eu/blog/practical-react-query',
    secondaryInfo: 'TkDodo',
    auxInfo: 'A great collection of articles about React Query.',
  },
  {
    key: uuidv4(),
    linkText: 'Should You Really Use useMemo in React? Let’s Find Out',
    linkUrl: 'https://medium.com/swlh/should-you-use-usememo-in-react-a-benchmarked-analysis-159faf6609b7',
    secondaryInfo: 'Kevin Van Ryckegem',
    auxInfo: 'An interesting performance experiment related to the use of useMemo.',
  },
  {
    key: uuidv4(),
    linkText: 'How React Query gives you almost everything you thought you needed GraphQL for',
    linkUrl: 'https://swizec.com/blog/how-react-query-gives-you-almost-everything-you-thought-you-needed-graphql-for/',
    secondaryInfo: 'Swizec',
    auxInfo: 'The author explains how and why React Query almost replaces GraphQL (functionality-wise) allowing to at the same work with REST APIs.',
  },
  {
    key: uuidv4(),
    linkText: 'Flatten Array using Array.flat() in JavaScript',
    linkUrl: 'https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat/',
    secondaryInfo: 'Samantha Ming',
    auxInfo: 'An article about the useful Array method "flat" (ES2019).',
  },
  {
    key: uuidv4(),
    linkText: 'Four Ways to Fetch Data in React',
    linkUrl: 'https://www.bitnative.com/2020/07/06/four-ways-to-fetch-data-in-react/',
    secondaryInfo: 'Cory House',
    auxInfo: 'Cory House was one of the first developers that introduce me to React. In this great article he discusses several ways to fetch data in a React app.',
  },
  {
    key: uuidv4(),
    linkText: 'Taking Notion to the Next Level',
    linkUrl: 'https://dev.to/whoisryosuke/taking-notion-to-the-next-level-2nln',
    secondaryInfo: 'Ryosuke',
    auxInfo: 'The author reveals in great detail his Notion setup. Great article to get some ideas on how to structure a personal KB.',
  },
  {
    key: uuidv4(),
    linkText: 'The Secret of Simple Code',
    linkUrl: 'https://medium.com/javascript-scene/the-secret-of-simple-code-a2cacd8004dd',
    secondaryInfo: 'Eric Elliott',
    auxInfo: 'This articles gives an interesting take on abstraction, definitely one difficult thing to master in software development.',
  },
  {
    key: uuidv4(),
    linkText: 'React Hook Form VS Formik',
    linkUrl: 'https://blog.bitsrc.io/react-hook-form-vs-formik-form-builder-library-for-react-23ed559fdae',
    secondaryInfo: 'Nathan Sebhastian',
    auxInfo: 'A comparison between the two most popular form libraries in React.',
  },
  {
    key: uuidv4(),
    linkText: 'Five common mistakes writing react components (with hooks) in 2020',
    linkUrl: 'https://www.lorenzweiss.de/common_mistakes_react_hooks/',
    secondaryInfo: 'Loren Weiss',
    auxInfo: '5 easy-to-make mistakes in React land with detailed explanations why they are bad.',
  },
  {
    key: uuidv4(),
    linkText: 'How Stripe Designs Beautiful Websites',
    linkUrl: 'https://leerob.io/blog/how-stripe-designs-beautiful-websites',
    secondaryInfo: 'Lee Robinson',
    auxInfo: 'How Stripes makes design a priority - and why it pays off.',
  },
  {
    key: uuidv4(),
    linkText: 'Why You Should Be Storing Remote Data in a Cache (and Not in State)',
    linkUrl: 'https://medium.com/better-programming/why-you-should-be-separating-your-server-cache-from-your-ui-state-1585a9ae8336',
    secondaryInfo: 'Jason Ankers',
    auxInfo: 'For a long time, we were saving remote data in state. This article explains why that might not be the best approach.',
  },
  {
    key: uuidv4(),
    linkText: 'React Libraries in 2020',
    linkUrl: 'https://www.robinwieruch.de/react-libraries',
    secondaryInfo: 'Robin Wieruch',
    auxInfo: 'This article lists the most popular libraries in the React ecosystem. A good reference for 2020.',
  },
  {
    key: uuidv4(),
    linkText: 'Why Development Teams are Slow',
    linkUrl: 'https://medium.com/javascript-scene/why-development-teams-are-slow-89107985c75c',
    secondaryInfo: 'Eric Elliot',
    auxInfo: 'A great article from Eric Elliot touching the several reasons that can contribute to a slow development process inside a team.',
  },
  {
    key: uuidv4(),
    linkText: 'Building a real-time collaborative text editor for the web',
    linkUrl: 'https://medium.com/@david.roegiers/building-a-real-time-collaborative-text-editor-for-the-web-draftjs-sharedb-1dd8e8826295',
    secondaryInfo: 'David Roegiers',
    auxInfo: 'An interesting article where the author describes the thought process behind the implementation of a collaborative text editor.',
  },
  {
    key: uuidv4(),
    linkText: 'A checklist to improve your product UI',
    linkUrl: 'https://uxdesign.cc/how-to-improve-your-product-ui-designers-checklist-58510947e6ab',
    secondaryInfo: 'Anna Sh',
    auxInfo: 'Anna Sh provides some great tips that will easily increase the quality of any UI.',
  },
  {
    key: uuidv4(),
    linkText: 'Lesser-known CSS properties in GIFs',
    linkUrl: 'https://medium.com/@PavelLaptev/lesser-known-css-properties-in-gifs-966a143497ba',
    secondaryInfo: 'Pavel Laptev',
    auxInfo: 'Super interesting CSS properties, most of them I was not even aware they exist. The only downside is poor cross browser support at the moment.',
  },
  {
    key: uuidv4(),
    linkText: 'Understanding React\'s key prop',
    linkUrl: 'https://kentcdodds.com/blog/understanding-reacts-key-prop',
    secondaryInfo: 'Kent C. Dodds',
    auxInfo: 'Kent talks about a useful but relatively unknown feature of React - the use of key prop to unmount the previous component instance and to mount a new one.',
  },
  {
    key: uuidv4(),
    linkText: 'Why React Hooks?',
    linkUrl: 'https://tylermcginnis.com/why-react-hooks/',
    secondaryInfo: 'Tyler McGinnis',
    auxInfo: 'The author makes an overview of the different ways of writing React apps along the years and why hooks are much more than being able to use state inside function components.',
  },
  {
    key: uuidv4(),
    linkText: 'React, Inline Functions, and Performance',
    linkUrl: 'https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578',
    secondaryInfo: 'Ryan Florence',
    auxInfo: 'Not a new article, but full of great insights related with performance.',
  },
  {
    key: uuidv4(),
    linkText: 'Why should you use "noopener"? Beware of security Flaws',
    linkUrl: 'https://dev.to/dhilipkmr/why-should-you-use-noopener-beware-of-security-flaws-3i57',
    secondaryInfo: 'Dhilip kumar',
    auxInfo: 'The author explains why target blank can introduce vulnerabilities.',
  },
  {
    key: uuidv4(),
    linkText: '9 Useful Browser Extensions for Developers — 2020 edition',
    linkUrl: 'https://medium.com/better-programming/9-productivity-browser-extensions-for-developers-2020-edition-eb84cda6f038',
    secondaryInfo: 'Indrek Lasn',
    auxInfo: 'Some interesting browser extensions.',
  },
  {
    key: uuidv4(),
    linkText: '22 Miraculous Tools for React Developers in 2019',
    linkUrl: 'https://dev.to/jsmanifest/22-miraculous-tools-for-react-developers-in-2019-4i46',
    secondaryInfo: 'jsmanifest',
    auxInfo: 'A comprehensive list of React related tools.',
  },
  {
    key: uuidv4(),
    linkText: 'What you should know about CORS',
    linkUrl: 'https://dev.to/jsmanifest/22-miraculous-tools-for-react-developers-in-2019-4i46',
    secondaryInfo: 'jsmanifest',
    auxInfo: 'An article about CORS with valuable information.',
  },
  {
    key: uuidv4(),
    linkText: 'My Personal Git Tricks Cheatsheet',
    linkUrl: 'https://dev.to/antjanus/my-personal-git-tricks-cheatsheet-23j1',
    secondaryInfo: 'Antonin Januska',
    auxInfo: 'A list of useful Git commands.',
  },
  {
    key: uuidv4(),
    linkText: "What To Expect When You're Expecting To Drop IE11",
    linkUrl: 'https://dev.to/samthor/what-to-expect-when-you-re-expecting-to-drop-ie11-ifg',
    secondaryInfo: 'Sam Thorogood',
    auxInfo: 'A (sad) article about the things we miss when supporting IE11.',
  },
  {
    key: uuidv4(),
    linkText: 'Forget about component lifecycles and start thinking in effects',
    linkUrl: 'https://sebastiandedeyne.com/forget-about-component-lifecycles-and-start-thinking-in-effects/',
    secondaryInfo: 'Sebastian De Deyne',
    auxInfo: 'An article about the useState hook and how it can replace lifecycle methods.',
  },
  {
    key: uuidv4(),
    linkText: 'The 10 Component Commandments',
    linkUrl: 'https://dev.to/selbekk/the-10-component-commandments-2a7f',
    secondaryInfo: 'Kristofer Selbekk',
    auxInfo: 'Ten React best practices explained by Selbekk in an interesting article.',
  },
  {
    key: uuidv4(),
    linkText: 'A Vacancy Has Been Detected',
    linkUrl: 'https://kellysutton.com/2019/06/19/a-vacancy-has-been-detected.html',
    secondaryInfo: 'Kelly Sutton',
    auxInfo: 'Interesting article about empathy in software development.',
  },
  {
    key: uuidv4(),
    linkText: 'Destructuring JavaScript objects like a pro',
    linkUrl: 'https://dev.to/willamesoares/destructuring-javascript-objects-like-a-pro-17bg',
    secondaryInfo: 'Will Soares',
    auxInfo: '',
  },
  {
    key: uuidv4(),
    linkText: 'Up your Git game and clean up your history',
    linkUrl: 'https://dev.to/christopherkade/up-your-git-game-and-clean-up-your-history-4j3j',
    secondaryInfo: 'Christopher Kade',
    auxInfo: 'An informative article about the superpowers of git rebase.',
  },
  {
    key: uuidv4(),
    linkText: 'The Top 5 Books That Made Me a Better Developer',
    linkUrl: 'https://davidtucker.net/the-top-5-books-that-made-me-a-better-developer-1ffc3a28a10b',
    secondaryInfo: 'David Tucker',
    auxInfo: 'Five resources to learn how to better code, communicate, and collaborate.',
  },
  {
    key: uuidv4(),
    linkText: 'Dropbox Paper Will Set Us Free',
    linkUrl: 'https://medium.com/needmore-notes/dropbox-paper-will-set-us-free-811421d7c566',
    secondaryInfo: 'Raymond Brigleb',
    auxInfo: 'Dropbox paper is a neat piece of software. In this post, Raymond Brigleb highlights some of its features.',
  },
  {
    key: uuidv4(),
    linkText: 'Basics of writing Clean code',
    linkUrl: 'https://medium.com/programming-hacks/basics-of-writing-clean-code-c1e79f3315d3',
    secondaryInfo: 'Gaurav Singh',
    auxInfo: 'This blog post discusses some best practices to write clean code (inspired by the "Clean Code" book.',
  },
  {
    key: uuidv4(),
    linkText: 'Contributing to an open source project: How to get started',
    linkUrl: 'https://medium.com/mindsdb/contributing-to-an-open-source-project-how-to-get-started-6ba812301738',
    secondaryInfo: 'Adam Carrigan',
    auxInfo: 'Article regarding OpenSource contribution and how to get started.',
  },
  {
    key: uuidv4(),
    linkText: 'How to Use Array Reduce for More than Just Numbers',
    linkUrl: 'https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/',
    secondaryInfo: 'James Sinclair',
    auxInfo: 'An article about Array.reduce and some good use cases of it.',
  },
  {
    key: uuidv4(),
    linkText: 'The Art of Command Line',
    linkUrl: 'https://github.com/jlevy/the-art-of-command-line',
    secondaryInfo: 'Joshua Levy',
    auxInfo: 'A comprehensive article about the command line.',
  },
  {
    key: uuidv4(),
    linkText: 'Absolute imports with Create React App',
    linkUrl: 'https://hackernoon.com/absolute-imports-with-create-react-app-4c6cfb66c35d',
    secondaryInfo: 'David Gilbertson',
    auxInfo: 'Another handy article from David Gilbertson. This time, regarding absolute imports in CRA.',
  },
  {
    key: uuidv4(),
    linkText: 'How to create a Countdown component using React & MomentJS',
    linkUrl: 'https://medium.freecodecamp.org/how-to-create-a-countdown-component-using-react-momentjs-4717edc4ac3',
    secondaryInfo: 'Florin Pop',
    auxInfo: 'A neat little React project to sharpen momentjs and SVG skills.',
  },
  {
    key: uuidv4(),
    linkText: 'TDD Changed My Life',
    linkUrl: 'https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80',
    secondaryInfo: 'Eric Elliott',
    auxInfo: 'Great article about TDD.',
  },
  {
    key: uuidv4(),
    linkText: 'Taking Control of React Performance',
    linkUrl: 'https://blog.opendigerati.com/taking-control-of-react-performance-4f21a15a19b5',
    secondaryInfo: 'Michael Haglund',
    auxInfo: '',
  },
  {
    key: uuidv4(),
    linkText: 'How to use the JavaScript console: going beyond console.log()',
    linkUrl: 'https://medium.freecodecamp.org/how-to-use-the-javascript-console-going-beyond-console-log-5128af9d573b',
    secondaryInfo: 'Yash Agrawal',
    auxInfo: '',
  },
  {
    key: uuidv4(),
    linkText: 'How to get better at testing with test-driven development',
    linkUrl: 'https://medium.freecodecamp.org/how-to-get-better-at-testing-with-test-driven-development-18a7d097b23f',
    secondaryInfo: 'Thomas Lombart',
    auxInfo: 'A good exercise on TDD. Nice explanation of the true value of it.',
  },
  {
    key: uuidv4(),
    linkText: 'How to identify and resolve wasted renders in React',
    linkUrl: 'https://medium.freecodecamp.org/how-to-identify-and-resolve-wasted-renders-in-react-cc4b1e910d10',
    secondaryInfo: 'Nayeem Reza',
    auxInfo: '',
  },
  {
    key: uuidv4(),
    linkText: 'Advanced Redux Patterns: Normalisation',
    linkUrl: 'https://blog.brainsandbeards.com/advanced-redux-patterns-normalisation-6b9a5aa46e1f',
    secondaryInfo: 'Wojciech Ogrodowczyk',
    auxInfo: 'Wojciech talks about data normalization, and the normalizr package, in the context of Redux.',
  },
  {
    key: uuidv4(),
    linkText: 'Let’s build a fast, slick and customizable rich text editor with Slate.js and React',
    linkUrl: 'https://medium.freecodecamp.org/lets-build-a-customizable-rich-text-editor-with-slate-and-react-beefd5d441f2',
    secondaryInfo: 'Indrek Lasn',
    auxInfo: 'A nice little project to learn the basics of Slatejs ➜ a completely customizable framework for building rich text editors.',
  },
  {
    key: uuidv4(),
    linkText: 'To Grid or to Flex?',
    linkUrl: 'https://css-irl.info/to-grid-or-to-flex/',
    secondaryInfo: 'Michelle Barker',
    auxInfo: 'Interesting article, published at css-irl.info, that talks about CSS Grid and Flexbox.',
  },
  {
    key: uuidv4(),
    linkText: 'ES5 to ESNext — here’s every feature added to JavaScript since 2015',
    linkUrl: 'https://medium.freecodecamp.org/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e',
    secondaryInfo: 'Flavio Copes',
    auxInfo: 'A must-read article from Flavio Copes, describing all additions to the JavaScript language since 2015.',
  },
  {
    key: uuidv4(),
    linkText: 'How to Set Up a Mac for Web Development',
    linkUrl: 'https://www.upandrunningtutorials.com/how-to-set-up-a-mac-for-web-development',
    secondaryInfo: 'Michael Uloth',
    auxInfo: 'An interesting list of the most relevant developer tools for the mac.',
  },
  {
    key: uuidv4(),
    linkText: 'Folder Structure in React Apps',
    linkUrl: 'https://blog.usejournal.com/folder-structure-in-react-apps-c2ae8974d21f',
    secondaryInfo: 'Katia Wheeler',
    auxInfo: 'An easy to digest article from Katia Wheeler talking about folder structure in React apps.',
  },
  {
    key: uuidv4(),
    linkText: 'Authentication and Authorization Basics with GraphQL and REST',
    linkUrl: 'https://www.prisma.io/tutorials/graphql-rest-authentication-authorization-basics-ct20/',
    secondaryInfo: 'Prisma',
    auxInfo: 'A tutorial from the folks at Prisma about Authentication and Authorization.',
  },
  {
    key: uuidv4(),
    linkText: 'Components testing in React: what and how to test with Jest and Enzyme',
    linkUrl: 'https://medium.freecodecamp.org/components-testing-in-react-what-and-how-to-test-with-jest-and-enzyme-7c1cace99de5',
    secondaryInfo: 'Alona Pysarenko',
    auxInfo: 'Alona Pysarenko, Frontend Engineer at Django Stars, talks about about react components testing.',
  },
  {
    key: uuidv4(),
    linkText: 'Per-Link Gatsby page transitions with TransitionLink',
    linkUrl: 'https://www.gatsbyjs.org/blog/2018-12-04-per-link-gatsby-page-transitions-with-transitionlink/',
    secondaryInfo: 'Tyler Barnes',
    auxInfo: 'Tyler describes the thought process behind gatsby-plugin-transition-link.',
  },
  {
    key: uuidv4(),
    linkText: 'Things I Don’t Know as of 2018',
    linkUrl: 'https://overreacted.io/things-i-dont-know-as-of-2018/',
    secondaryInfo: 'Dan Abramov',
    auxInfo: 'Interesting article by Dan where he talks about the "things" he doesn\'t know.',
  },
  {
    key: uuidv4(),
    linkText: '7 Practical Tips for Cheating at Design',
    linkUrl: 'https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886',
    secondaryInfo: 'Adam Wathan & Steve Schoger',
    auxInfo: '7 extremelly helpfull design tips from Adam Wathan & Steve Schoger.',
  },
];

export default articles;