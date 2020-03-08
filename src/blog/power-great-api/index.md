---
title: The power of a great API
date: '2020-01-25T23:18:31.296Z'
description:
  This post is about the art of problem-solving by analyzing a recent new
  feature of the React library.
---

In this post, I want to talk about something that happened recently at the job,
and that got me thinking. More specifically, I want to talk about how sometimes
a new perspective, and way of doing things, is so great that it immediately
starts to be adopted in a frictionless way by an entire team. That fact, for me,
is something remarkable when we think about it.

To give more context, this new thing I'm talking about is React hooks. I've
never experienced something being so quickly adopted by my team. In a matter of
days, all of us were writing new React components using hooks like that was
something we were already doing for a long time. And now, I can't even remember
the last time we wrote a class component (or a container for that matter). The
code is so much easier to read and write after hooks.

I want to understand why that happened and what makes hooks so much better. The
first step for me is to recognize which specific problems hooks solved in our
codebase.

## Reduce boilerplate

I think the simple "counter" example well describes the "power" of hooks.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

Both the simplicity and the concise boilerplate is so much better that I bet
almost no developer would opt to use the class component version instead:

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.setCount = this.setCount.bind(this);
  }

  setCount(count) {
    this.setState({ count });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setCount(this.state.count + 1)}>
          Click me
        </button>
      </div>
    );
  }
}
```

Also, in reality, using classes to represent React components is not intuitive
at all if we think about it. We are used to instantiate classes, apply
inheritance, create public and private methods and properties, and all those
other OO related things. For that reason, I've always found class components to
feel a bit off.

## Lifecycle methods

One extremely typical pattern among all class React components is the use of
three lifecycle methods CDM, CDU and CWU. The use of these methods quickly
starts to spread business logic. In some cases, it even repeats it across the
component.

When I found I could do all that with just one hook, my mind got blown. The
advantage of using the useEffect hook is that all the code, related with some
functionality, is colocated inside it. Again that makes the code so much easier
to read and write.

## Better Redux usage

One more problem hooks solved on our codebase was Redux containers. Before
hooks, most of our components had an associated redux container file. All the
file was doing was injecting props by using mapStateToProps and
mapDispatchToProps. With the useSelector and useDispatch hooks, containers are
no longer needed.

## Conclusion

So, the main problems hooks fixed were:

- No need for class components (since class components don't behave like typical
  OO classes at all, that makes the code easier to understand).
- Reduce boilerplate. The code is so much cleaner and boilerplate free after
  hooks that it is not even comparable.
- No need for 3 individual lifecycle methods that, in most cases, contain bits
  of the same functionality spread all over the component.
- No more need for Redux's container files, which is a good thing since those
  components were essentially boilerplate code.
- The overall collocation of code is much higher which makes the code both
  easier to read and write.

However, I think all those advantages alone can't explain why my team adopted
hooks so quickly. In my opinion, hooks were so consensual because they have a
great developer experience by providing an api that is easy to use and reason
about. For instance, classes fix the problem of having stateful components but do it
with unnecessary boilerplate and complexity. I guess we can say that Occam's
Razor principle always applies:

> When you have two competing theories that make exactly the same predictions,
> the simpler one is the better.
