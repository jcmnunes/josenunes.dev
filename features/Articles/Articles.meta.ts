interface Article {
  linkText: string;
  url: string;
  helpText: string;
  auxInfo: string;
}

export const articles: Article[] = [
  {
    linkText: 'Mac Setup for Web Development [2022]',
    url: 'https://www.robinwieruch.de/mac-setup-web-development/',
    helpText: 'Robin Wieruch',
    auxInfo: 'Robin Wieruch shares his Mac setup for web development.',
  },
  {
    linkText: 'My Custom CSS Reset',
    url: 'https://www.joshwcomeau.com/css/custom-css-reset/',
    helpText: 'Josh Comeau',
    auxInfo:
      'Not only does Josh shares a very useful CSS reset as well as he goes the extra mile in explaining what each piece of code is doing.',
  },
  {
    linkText: 'React Query as a State Manager',
    url: 'https://prateeksurana.me/blog/why-using-object-spread-with-reduce-bad-idea/',
    helpText: 'TkDodo',
    auxInfo:
      'Part #10 of TkDoddo’s article collection about react-query. As usual, a mandatory read.',
  },
  {
    linkText: 'The magic of react-query and supabase',
    url: 'https://dev.to/ankitjey/the-magic-of-react-query-and-supabase-1pom',
    helpText: 'Ankit Jena',
    auxInfo: 'Extensive and well written article about combining react-query and Supabase.',
  },
  {
    linkText: 'Why using object spread with reduce probably a bad idea',
    url: 'https://prateeksurana.me/blog/why-using-object-spread-with-reduce-bad-idea/',
    helpText: 'Prateek Surana',
    auxInfo:
      'An interesting article from Prateek Surana regarding performance of the object spread operator and its use in Array.reduce.',
  },
  {
    linkText: 'Using WebSockets with React Query',
    url: 'https://tkdodo.eu/blog/using-web-sockets-with-react-query',
    helpText: 'TkDodo',
    auxInfo:
      'Adding websockets into a react-query powered app can be a walk in the park. TkDodo explains why.',
  },
  {
    linkText: 'How to choose the right React state management solution',
    url: 'https://blog.logrocket.com/how-to-choose-the-right-react-state-management-solution/',
    helpText: 'Iva Kop',
    auxInfo: 'A great overview of several state management solutions in the React ecosystem.',
  },
  {
    linkText: 'Reduce State Management Footprint with React Query',
    url: 'https://blog.testdouble.com/posts/2021-05-03-reduce-state-management-with-react-query/',
    helpText: 'Tommy Groshong',
    auxInfo:
      'Tommy Groshong talks about React Query, and why he thinks it is a must have in a React app.',
  },
  {
    linkText: 'Practical React Query',
    url: 'https://tkdodo.eu/blog/practical-react-query',
    helpText: 'TkDodo',
    auxInfo: 'A great collection of articles about React Query.',
  },
  {
    linkText: 'Should You Really Use useMemo in React? Let’s Find Out',
    url: 'https://medium.com/swlh/should-you-use-usememo-in-react-a-benchmarked-analysis-159faf6609b7',
    helpText: 'Kevin Van Ryckegem',
    auxInfo: 'An interesting performance experiment related to the use of useMemo.',
  },
  {
    linkText: 'How React Query gives you almost everything you thought you needed GraphQL for',
    url: 'https://swizec.com/blog/how-react-query-gives-you-almost-everything-you-thought-you-needed-graphql-for/',
    helpText: 'Swizec',
    auxInfo:
      'The author explains how and why React Query almost replaces GraphQL (functionality-wise) allowing to at the same work with REST APIs.',
  },
  {
    linkText: 'Flatten Array using Array.flat() in JavaScript',
    url: 'https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat/',
    helpText: 'Samantha Ming',
    auxInfo: 'An article about the useful Array method "flat" (ES2019).',
  },
  {
    linkText: 'Four Ways to Fetch Data in React',
    url: 'https://www.bitnative.com/2020/07/06/four-ways-to-fetch-data-in-react/',
    helpText: 'Cory House',
    auxInfo:
      'Cory House was one of the first developers that introduce me to React. In this great article he discusses several ways to fetch data in a React app.',
  },
  {
    linkText: 'Taking Notion to the Next Level',
    url: 'https://dev.to/whoisryosuke/taking-notion-to-the-next-level-2nln',
    helpText: 'Ryosuke',
    auxInfo:
      'The author reveals in great detail his Notion setup. Great article to get some ideas on how to structure a personal KB.',
  },
  {
    linkText: 'The Secret of Simple Code',
    url: 'https://medium.com/javascript-scene/the-secret-of-simple-code-a2cacd8004dd',
    helpText: 'Eric Elliott',
    auxInfo:
      'This articles gives an interesting take on abstraction, definitely one difficult thing to master in software development.',
  },
  {
    linkText: 'React Hook Form VS Formik',
    url: 'https://blog.bitsrc.io/react-hook-form-vs-formik-form-builder-library-for-react-23ed559fdae',
    helpText: 'Nathan Sebhastian',
    auxInfo: 'A comparison between the two most popular form libraries in React.',
  },
  {
    linkText: 'Five common mistakes writing react components (with hooks) in 2020',
    url: 'https://www.lorenzweiss.de/common_mistakes_react_hooks/',
    helpText: 'Loren Weiss',
    auxInfo: '5 easy-to-make mistakes in React land with detailed explanations why they are bad.',
  },
  {
    linkText: 'How Stripe Designs Beautiful Websites',
    url: 'https://leerob.io/blog/how-stripe-designs-beautiful-websites',
    helpText: 'Lee Robinson',
    auxInfo: 'How Stripes makes design a priority - and why it pays off.',
  },
  {
    linkText: 'Why You Should Be Storing Remote Data in a Cache (and Not in State)',
    url: 'https://medium.com/better-programming/why-you-should-be-separating-your-server-cache-from-your-ui-state-1585a9ae8336',
    helpText: 'Jason Ankers',
    auxInfo:
      'For a long time, we were saving remote data in state. This article explains why that might not be the best approach.',
  },
  {
    linkText: 'React Libraries in 2020',
    url: 'https://www.robinwieruch.de/react-libraries',
    helpText: 'Robin Wieruch',
    auxInfo:
      'This article lists the most popular libraries in the React ecosystem. A good reference for 2020.',
  },
  {
    linkText: 'Why Development Teams are Slow',
    url: 'https://medium.com/javascript-scene/why-development-teams-are-slow-89107985c75c',
    helpText: 'Eric Elliot',
    auxInfo:
      'A great article from Eric Elliot touching the several reasons that can contribute to a slow development process inside a team.',
  },
  {
    linkText: 'Building a real-time collaborative text editor for the web',
    url: 'https://medium.com/@david.roegiers/building-a-real-time-collaborative-text-editor-for-the-web-draftjs-sharedb-1dd8e8826295',
    helpText: 'David Roegiers',
    auxInfo:
      'An interesting article where the author describes the thought process behind the implementation of a collaborative text editor.',
  },
  {
    linkText: 'A checklist to improve your product UI',
    url: 'https://uxdesign.cc/how-to-improve-your-product-ui-designers-checklist-58510947e6ab',
    helpText: 'Anna Sh',
    auxInfo: 'Anna Sh provides some great tips that will easily increase the quality of any UI.',
  },
  {
    linkText: 'Lesser-known CSS properties in GIFs',
    url: 'https://medium.com/@PavelLaptev/lesser-known-css-properties-in-gifs-966a143497ba',
    helpText: 'Pavel Laptev',
    auxInfo:
      'Super interesting CSS properties, most of them I was not even aware they exist. The only downside is poor cross browser support at the moment.',
  },
  {
    linkText: "Understanding React's key prop",
    url: 'https://kentcdodds.com/blog/understanding-reacts-key-prop',
    helpText: 'Kent C. Dodds',
    auxInfo:
      'Kent talks about a useful but relatively unknown feature of React - the use of key prop to unmount the previous component instance and to mount a new one.',
  },
  {
    linkText: 'Why React Hooks?',
    url: 'https://tylermcginnis.com/why-react-hooks/',
    helpText: 'Tyler McGinnis',
    auxInfo:
      'The author makes an overview of the different ways of writing React apps along the years and why hooks are much more than being able to use state inside function components.',
  },
  {
    linkText: 'React, Inline Functions, and Performance',
    url: 'https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578',
    helpText: 'Ryan Florence',
    auxInfo: 'Not a new article, but full of great insights related with performance.',
  },
  {
    linkText: 'Why should you use "noopener"? Beware of security Flaws',
    url: 'https://dev.to/dhilipkmr/why-should-you-use-noopener-beware-of-security-flaws-3i57',
    helpText: 'Dhilip kumar',
    auxInfo: 'The author explains why target blank can introduce vulnerabilities.',
  },
  {
    linkText: '9 Useful Browser Extensions for Developers — 2020 edition',
    url: 'https://medium.com/better-programming/9-productivity-browser-extensions-for-developers-2020-edition-eb84cda6f038',
    helpText: 'Indrek Lasn',
    auxInfo: 'Some interesting browser extensions.',
  },
  {
    linkText: '22 Miraculous Tools for React Developers in 2019',
    url: 'https://dev.to/jsmanifest/22-miraculous-tools-for-react-developers-in-2019-4i46',
    helpText: 'jsmanifest',
    auxInfo: 'A comprehensive list of React related tools.',
  },
  {
    linkText: 'What you should know about CORS',
    url: 'https://dev.to/jsmanifest/22-miraculous-tools-for-react-developers-in-2019-4i46',
    helpText: 'jsmanifest',
    auxInfo: 'An article about CORS with valuable information.',
  },
  {
    linkText: 'My Personal Git Tricks Cheatsheet',
    url: 'https://dev.to/antjanus/my-personal-git-tricks-cheatsheet-23j1',
    helpText: 'Antonin Januska',
    auxInfo: 'A list of useful Git commands.',
  },
  {
    linkText: "What To Expect When You're Expecting To Drop IE11",
    url: 'https://dev.to/samthor/what-to-expect-when-you-re-expecting-to-drop-ie11-ifg',
    helpText: 'Sam Thorogood',
    auxInfo: 'A (sad) article about the things we miss when supporting IE11.',
  },
  {
    linkText: 'Forget about component lifecycles and start thinking in effects',
    url: 'https://sebastiandedeyne.com/forget-about-component-lifecycles-and-start-thinking-in-effects/',
    helpText: 'Sebastian De Deyne',
    auxInfo: 'An article about the useState hook and how it can replace lifecycle methods.',
  },
  {
    linkText: 'The 10 Component Commandments',
    url: 'https://dev.to/selbekk/the-10-component-commandments-2a7f',
    helpText: 'Kristofer Selbekk',
    auxInfo: 'Ten React best practices explained by Selbekk in an interesting article.',
  },
  {
    linkText: 'A Vacancy Has Been Detected',
    url: 'https://kellysutton.com/2019/06/19/a-vacancy-has-been-detected.html',
    helpText: 'Kelly Sutton',
    auxInfo: 'Interesting article about empathy in software development.',
  },
  {
    linkText: 'Destructuring JavaScript objects like a pro',
    url: 'https://dev.to/willamesoares/destructuring-javascript-objects-like-a-pro-17bg',
    helpText: 'Will Soares',
    auxInfo: '',
  },
  {
    linkText: 'Up your Git game and clean up your history',
    url: 'https://dev.to/christopherkade/up-your-git-game-and-clean-up-your-history-4j3j',
    helpText: 'Christopher Kade',
    auxInfo: 'An informative article about the superpowers of git rebase.',
  },
  {
    linkText: 'The Top 5 Books That Made Me a Better Developer',
    url: 'https://davidtucker.net/the-top-5-books-that-made-me-a-better-developer-1ffc3a28a10b',
    helpText: 'David Tucker',
    auxInfo: 'Five resources to learn how to better code, communicate, and collaborate.',
  },
  {
    linkText: 'Dropbox Paper Will Set Us Free',
    url: 'https://medium.com/needmore-notes/dropbox-paper-will-set-us-free-811421d7c566',
    helpText: 'Raymond Brigleb',
    auxInfo:
      'Dropbox paper is a neat piece of software. In this post, Raymond Brigleb highlights some of its features.',
  },
  {
    linkText: 'Basics of writing Clean code',
    url: 'https://medium.com/programming-hacks/basics-of-writing-clean-code-c1e79f3315d3',
    helpText: 'Gaurav Singh',
    auxInfo:
      'This blog post discusses some best practices to write clean code (inspired by the "Clean Code" book.',
  },
  {
    linkText: 'Contributing to an open source project: How to get started',
    url: 'https://medium.com/mindsdb/contributing-to-an-open-source-project-how-to-get-started-6ba812301738',
    helpText: 'Adam Carrigan',
    auxInfo: 'Article regarding OpenSource contribution and how to get started.',
  },
  {
    linkText: 'How to Use Array Reduce for More than Just Numbers',
    url: 'https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/',
    helpText: 'James Sinclair',
    auxInfo: 'An article about Array.reduce and some good use cases of it.',
  },
  {
    linkText: 'The Art of Command Line',
    url: 'https://github.com/jlevy/the-art-of-command-line',
    helpText: 'Joshua Levy',
    auxInfo: 'A comprehensive article about the command line.',
  },
  {
    linkText: 'Absolute imports with Create React App',
    url: 'https://hackernoon.com/absolute-imports-with-create-react-app-4c6cfb66c35d',
    helpText: 'David Gilbertson',
    auxInfo:
      'Another handy article from David Gilbertson. This time, regarding absolute imports in CRA.',
  },
  {
    linkText: 'How to create a Countdown component using React & MomentJS',
    url: 'https://medium.freecodecamp.org/how-to-create-a-countdown-component-using-react-momentjs-4717edc4ac3',
    helpText: 'Florin Pop',
    auxInfo: 'A neat little React project to sharpen momentjs and SVG skills.',
  },
  {
    linkText: 'TDD Changed My Life',
    url: 'https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80',
    helpText: 'Eric Elliott',
    auxInfo: 'Great article about TDD.',
  },
  {
    linkText: 'Taking Control of React Performance',
    url: 'https://blog.opendigerati.com/taking-control-of-react-performance-4f21a15a19b5',
    helpText: 'Michael Haglund',
    auxInfo: '',
  },
  {
    linkText: 'How to use the JavaScript console: going beyond console.log()',
    url: 'https://medium.freecodecamp.org/how-to-use-the-javascript-console-going-beyond-console-log-5128af9d573b',
    helpText: 'Yash Agrawal',
    auxInfo: '',
  },
  {
    linkText: 'How to get better at testing with test-driven development',
    url: 'https://medium.freecodecamp.org/how-to-get-better-at-testing-with-test-driven-development-18a7d097b23f',
    helpText: 'Thomas Lombart',
    auxInfo: 'A good exercise on TDD. Nice explanation of the true value of it.',
  },
  {
    linkText: 'How to identify and resolve wasted renders in React',
    url: 'https://medium.freecodecamp.org/how-to-identify-and-resolve-wasted-renders-in-react-cc4b1e910d10',
    helpText: 'Nayeem Reza',
    auxInfo: '',
  },
  {
    linkText: 'Advanced Redux Patterns: Normalisation',
    url: 'https://blog.brainsandbeards.com/advanced-redux-patterns-normalisation-6b9a5aa46e1f',
    helpText: 'Wojciech Ogrodowczyk',
    auxInfo:
      'Wojciech talks about data normalization, and the normalizr package, in the context of Redux.',
  },
  {
    linkText: 'Let’s build a fast, slick and customizable rich text editor with Slate.js and React',
    url: 'https://medium.freecodecamp.org/lets-build-a-customizable-rich-text-editor-with-slate-and-react-beefd5d441f2',
    helpText: 'Indrek Lasn',
    auxInfo:
      'A nice little project to learn the basics of Slatejs ➜ a completely customizable framework for building rich text editors.',
  },
  {
    linkText: 'To Grid or to Flex?',
    url: 'https://css-irl.info/to-grid-or-to-flex/',
    helpText: 'Michelle Barker',
    auxInfo:
      'Interesting article, published at css-irl.info, that talks about CSS Grid and Flexbox.',
  },
  {
    linkText: 'ES5 to ESNext — here’s every feature added to JavaScript since 2015',
    url: 'https://medium.freecodecamp.org/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e',
    helpText: 'Flavio Copes',
    auxInfo:
      'A must-read article from Flavio Copes, describing all additions to the JavaScript language since 2015.',
  },
  {
    linkText: 'How to Set Up a Mac for Web Development',
    url: 'https://www.upandrunningtutorials.com/how-to-set-up-a-mac-for-web-development',
    helpText: 'Michael Uloth',
    auxInfo: 'An interesting list of the most relevant developer tools for the mac.',
  },
  {
    linkText: 'Folder Structure in React Apps',
    url: 'https://blog.usejournal.com/folder-structure-in-react-apps-c2ae8974d21f',
    helpText: 'Katia Wheeler',
    auxInfo:
      'An easy to digest article from Katia Wheeler talking about folder structure in React apps.',
  },
  {
    linkText: 'Authentication and Authorization Basics with GraphQL and REST',
    url: 'https://www.prisma.io/tutorials/graphql-rest-authentication-authorization-basics-ct20/',
    helpText: 'Prisma',
    auxInfo: 'A tutorial from the folks at Prisma about Authentication and Authorization.',
  },
  {
    linkText: 'Components testing in React: what and how to test with Jest and Enzyme',
    url: 'https://medium.freecodecamp.org/components-testing-in-react-what-and-how-to-test-with-jest-and-enzyme-7c1cace99de5',
    helpText: 'Alona Pysarenko',
    auxInfo:
      'Alona Pysarenko, Frontend Engineer at Django Stars, talks about about react components testing.',
  },
  {
    linkText: 'Per-Link Gatsby page transitions with TransitionLink',
    url: 'https://www.gatsbyjs.org/blog/2018-12-04-per-link-gatsby-page-transitions-with-transitionlink/',
    helpText: 'Tyler Barnes',
    auxInfo: 'Tyler describes the thought process behind gatsby-plugin-transition-link.',
  },
  {
    linkText: 'Things I Don’t Know as of 2018',
    url: 'https://overreacted.io/things-i-dont-know-as-of-2018/',
    helpText: 'Dan Abramov',
    auxInfo: 'Interesting article by Dan where he talks about the "things" he doesn\'t know.',
  },
  {
    linkText: '7 Practical Tips for Cheating at Design',
    url: 'https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886',
    helpText: 'Adam Wathan & Steve Schoger',
    auxInfo: '7 extremelly helpfull design tips from Adam Wathan & Steve Schoger.',
  },
];
