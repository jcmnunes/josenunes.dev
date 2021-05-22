---
title: The "states" of a CRUD React app
date: '2021-04-19'
description:
  Being able to identify and list the possible types of state a typical CRUD can
  be the key to achieve a robust FE architecture.
---

State management has probably been the most discussed topic in the React
community over the years. As a result, there are plenty of state-management
solutions out there. All this experimentation led to a better understanding of
the different types of state a typical CRUD React app can have. Understanding
and identifying these types of states, and defining a proper strategy to handle
them, can certainly be detrimental in achieving a better and more robust FE
architecture.

## Server state

For a typical CRUD app, server state accounts for the vast majority of the app’s
state. The server state, as the name implies, usually lives in a remote server.
This state is asynchronous in nature, which brings some additional complexity.
Notably, handling loading, empty, and error states is now a requirement that
should never be overlooked. Moreover, caching is almost a must-have and keeping
it in sync can be a complex task. Also, it is not uncommon to have several
components using parts of this state at different levels of the component tree.
A great overview about server state can be found in the
[React Query docs](https://react-query.tanstack.com/overview) where these, and
more, limitations are identified and discussed.

Recently, hook-based solutions started to be adopted to handle this important
type of state. The most popular ones are
[React Query](https://react-query.tanstack.com/) and
[SWR](https://swr.vercel.app/). Both libraries do a great job managing server
state and should be an obvious choice for any modern app.

## Global app state

Although server state makes most of a typical CRUD app’s state, there are some
bits that don’t live on the server. Typical examples are UI-related state (is a
sidebar open, is dark-theme selected, which filters are active, etc). This state
needs usually easy access at several levels of the component tree. This makes
using component-level state (by lifting state up) very impractical. Global state
is the perfect candidate for a global state-management solution like
[React Context](https://reactjs.org/docs/context.html),
[Redux](https://redux-toolkit.js.org/), or [Zustand](https://zustand.surge.sh/).

## Component level state

React ships with two state-management solutions. One we already discussed above
(Context). The other is the component-level state (`useState` or `useReducer`).
This is by far the easiest solution to implement. However, there is a major
drawback to this approach. The only way to communicate state is from the parent
to the child. For large trees, this can easily lead to prop-drilling. However,
this is also the only viable option for reusable components. For those
components, using a global state store (like Redux) is simply not possible since
such a store is a singleton and reusable components can have several instances.

## Page state

Typical CRUD apps can be divided into pages (or screens) where usually
components interact with each other in a complex way but not with components
from other pages. In this scenario, a global state solution might be beneficial
to prevent prop-drilling. What makes that possible is the fact that we never
have several instances of the same page rendered at the same time.

## Route state

A sometimes overlooked piece of state, that almost every app has, lives in the
URL itself. Examples of this state are entities ids, user ids, etc. In React,
[React Router](https://reactrouter.com/) is the obvious choice.

## Form state

One final piece of state that can be identified is form state. Form state can be
hard to manage, especially when having validation, which is the case most of the
time. An app can benefit a lot from using a form library in this case.
[Formik](https://formik.org/) and
[React Hook Form](https://react-hook-form.com/) are popular options.

## 💡 The right tool for the job

Considering the various state types of a typical app, it is obvious that a good
architecture can benefit a lot from choosing the right tool for the job. Not
only does the code become more concise as well as it tends to scale much better,
especially in large teams and complex codebases. As such, trying to find a
one-size-fits-all solution is probably never the right thing to do in these
cases.
