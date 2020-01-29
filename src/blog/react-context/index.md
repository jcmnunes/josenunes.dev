---
title: React Context and the useContext hook
date: '2019-10-20T21:38:50.169Z'
description:
  React Context can be a great tool to mitigate prop-drilling. With the
  useContext hook, boilerplate is minimal, which makes it a great choice in some
  scenarios.
---

It was soon in my learning React journey that I started to ear about Redux.
Initially, I was not sure why people were using it. The reason for that is the
fact that I was essential learning React and building small toy apps, where prop
drilling and scalability were not issues. As soon as I started working on a real
app, the need for Redux became apparent.

After almost three years, I still work on React apps that are using Redux. In my
opinion, Redux is still a pretty decent way to handle data flow in a React app,
and it has proved to be viable in large applications. As a bonus,
[Hooks](https://react-redux.js.org/next/api/hooks) makes using Redux even
better, with no need for containers and much less boilerplate (something to
discuss on a future post).

That being said, Redux might not always be the right choice. Recently, while
implementing a new feature, I had a big folder containing a large amount of
React components that composes a single feature of a large React app. Most of
those components need access to two IDs: the `clientId` and the `subscriberId`.
We are talking about a section of the app that renders information about a
specific subscriber of a particular client. However, only the top-level parent
has direct access to them.

I started implementing the feature the usual way, i.e., passing down those props
to the components that need access to them. As expected, prop-drilling soon
became an issue (as it can be seen in the code below, taken from a component
positioned somewhere in the middle of the component tree):

```jsx{3,7,9,13,15}
// ...
case ENROLLMENT_STATUS.NONE:
  return <Enroll clientId={clientId} subscriberId={subscriberId} />;
case ENROLLMENT_STATUS.ERROR:
  return <Error />;
case ENROLLMENT_STATUS.ENROLLED:
  return <Terms clientId={clientId} subscriberId={subscriberId} />;
case ENROLLMENT_STATUS.ENROLLED_AND_ACCEPTED_TERMS:
  return <Questions clientId={clientId} subscriberId={subscriberId} />;
case ENROLLMENT_STATUS.PENDING_VERIFICATION:
  return <Pending />;
case ENROLLMENT_STATUS.AUTHENTICATED:
  return <Report clientId={clientId} subscriberId={subscriberId} report={report} />;
case ENROLLMENT_STATUS.REJECTED:
  return <Rejected clientId={clientId} subscriberId={subscriberId} />;
// ...
```

When dealing with prop-drilling issues, I tend to use Redux. In this case, one
would create two new entries in the Redux store to store both IDs. However,
doing that implies two more action creators, two action types, two more entries
in the reducer, and so on. That is one of the significant issues of Redux, the
large amount of boilerplate code. With that in mind, I decided to give React
Context a try. Below is a stripped-down version of the parent component:

```jsx
// Parent.jsx
export const FeatureContext = React.createContext({
  clientId: null,
  subscriberId: null,
});

const Parent = ({ clientId, subscriberId }) => {
  if (isFetchingSubscribers) {
    return <LoadingView />;
  }

  return (
    <FeatureContext.Provider value={{ clientId, subscriberId }}>
      {hasSubscribers ? <Reports /> : <Landing />}
    </FeatureContext.Provider>
  );
};

export default Parent;
```

Two major things should be noted:

- We are creating a context object with `React.createContext`
- The Parent component renders its children wrapped in a Provider tag with a
  `value` prop, exposing both `clientId` and `subscriberId`

With that out of the way, now any child will be able to access those props with
the help of the `useContext` hook:

```jsx
// Child.jsx
import React, { useContext } from 'react';
import LoremContext from './Parent';

const Child = () => {
  const { clientId, subscriberId } = useContext(LoremContext);

  return (
    <div>
      {clientId} {subscriberId}
    </div>
  );
};

export default Child;
```

As can be seen in the code above, using Context with hooks is exceptionally
straightforward, and it is a great way to mitigate prop-drilling.

However, I should say I don’t feel React Context should replace Redux
altogether. Especially for large features, containing many actions, API calls,
etc. I do feel Context has its place in situations like the one described here.

## Caveats

The [React docs](https://reactjs.org/docs/context.html#caveats) mention a
standard caveat of using Context the way I did above. The problem is the
Provider value containing a new object reference on every Parent’s render. There
is an excellent [post](https://phinguyen.io/context-caveat-deep-dive/) from Phi
Nguyen on the subject. As with everything performance-related, there is always a
trade-off between optimization and code complexity. I certainly feel performance
optimization should be done when performance is an apparent problem, and we have
a reliable way to measure it.
