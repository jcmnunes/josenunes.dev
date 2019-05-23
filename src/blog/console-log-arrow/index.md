---
title: Use console.log in arrow functions
date: '2019-05-22T13:50:23.641Z'
description:
  There is a little trick to put a console.log in an arrow function, with an
  implicit return, without changing the code too much.
---

Like them or not, arrow functions have a very concise syntax and were readily
adopted by the JS community. However, we've all been there. We have an arrow
function with an implicit return. Now we need to debug it, and there is not an
easy way to put a `console.log` in there. A typical case where that happens is
when debugging functional components.

Well, we can take advantage of the fact that calling `console.log` gives us
`undefined` and do the following:

```jsx{6}
// Original component
const Comp = props => <div>{props.children}</div>;

// With a console.log
const Comp = props =>
  console.log('Hey it works') || <div>{props.children}</div>;
```

It is a simple trick that works good enough 👌 (yes, I know, `console.log` is
not the best way to debug components, but I bet most developers still use it
sometimes 😉).
