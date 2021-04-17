---
title: Why JS developers should not fear TypeScript
date: '2020-04-10T09:44:38.580Z'
description:
  It can be hard for a JavaScript developer to accept the idea of using
  TypeScript. In this post, I talk about what made me lose that fear and being a
  happy TypeScript adopter.
---

In this post, I want to give my perspective on TypeScript briefly. Let me start
by saying that I was very reluctant about the idea of adopting it. In part
because I like to see myself as a JavaScript (die-hard) fan. I didn't like the
idea of polluting my code with type annotations or even changing the extension
of my files to ts or tsx. I used to think that JavaScript, being a dynamically
typed language by design, is being somewhat irreversibly changed with
TypeScript. In other words, I was not ready to abandon JavaScript.

A long time passed, and coincidentally, any of the projects I was working on at
the time were using TypeScript. As a result, I was happily writing type-unsafe
JS code, occasionally dealing with "can't read property ... of undefined"
errors, hard to track data structures and having sub-optimal auto-complete in my
code editor. At the same time, I was taking the time to properly define
PropTypes in every component file 🤷‍.

Some time ago, a co-worker of mine decided to shake things up a bit and
suggested we start using TypeScript in our codebase. Naturally, I did not like
the idea at first. I even tried some silly arguments to convince him otherwise.
However, in a good team spirit, I decided to put my concerns aside and give it a
try. Spoiler alert, nowadays, I will always use TypeScript if that is a viable
option.

Several things made me reconsider my initial perspective, however, there was one
thing that really made it. The idea started when watching Kent C. Dodds'
"Testing JavaScript" course. Kent was happily teaching popular tools like ESLint
and Prettier when he suddenly introduced a lesson called "Avoid Common Errors by
Installing and Configuring TypeScript". And then it hit me: "TypeScript can be
seen as one more tool (like ESLint and Prettier) that will help improve the
quality and correctness of my code". Well, for me, that argument is hard to
ignore.

My final thought is this: if someone cares about code static analysis, to the
point of taking the time to configure ESLint and Prettier, as well as writing
PropTypes and JSDocs, then that person must at least give TypeScript a try. I
did it, and I'm glad I did.
