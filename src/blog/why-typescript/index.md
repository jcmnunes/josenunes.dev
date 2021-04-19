---
title: Why JS developers should not fear TypeScript
date: '2020-04-10T09:44:38.580Z'
description:
  It can be hard for a JavaScript developer to accept the idea of using
  TypeScript. In this post, I talk about what made me lose that fear and become
  a happy TypeScript user.
---

In this post, I want to give my perspective on TypeScript briefly. Let me start
by saying that I was very reluctant about the idea of adopting it. In part
because I do like JavaScript. I used to think that JavaScript, being a
dynamically typed language by design, is being somewhat irreversibly changed
with TypeScript. In other words, I was not ready to abandon it.

A long time passed, and coincidentally, any of the projects I was working on at
the time were using TypeScript. As a result, I was happily writing type-unsafe
JS code, occasionally dealing with "can't read property ... of undefined"
errors, hard to track data structures and having sub-optimal auto-complete in my
code editor. At the same time, I was taking the time to properly define
PropTypes and JSDocs in every component file (🤷‍).

Over the years, several things made me reconsider my initial perspective.
Notably, TypeScript can be seen as one more tool (like ESLint and Prettier) that
improves the quality and correctness of the code.

Now, being a TypeScript user for quite some time, I can clearly see all the
benefits of working with types. For anything bigger than a small prototype,
TypeScript is almost a must-have since it greatly improves DX and helps to catch
and avoid mistakes in the code.
