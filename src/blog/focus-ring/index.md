---
title: A11y - How to stop hiding the focus-ring
date: '2019-08-11'
description:
  The focus ring is essential to make an app accessible. It is sometimes hidden
  to improve aesthetics. There's a way to have the better of both worlds.
---

When talking about A11y, and especially the focus ring, I immediately remember a
sentence from David Gilbertson in his article
[“Removing that ugly :focus ring (and keeping it too)”](https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2):

> Removing the focus outline is like removing the wheelchair ramp from a school
> because it doesn’t fit in with the aesthetic.

When using the keyboard, trying to navigate an app without the focus-ring is
almost impossible. Yet, we can see many apps with a hidden focus-ring (usually
by something like `button:focus { outline: none; }`).

## Possible solutions

There are several possible solutions to this problem. One interesting tweak is
explained by David Gilbertson in his blog post mentioned above. A different
solution was adopted by the Palantir team when developing the
[Blueprint UI kit](https://blueprintjs.com/). Essentially, they use a
[helper class](https://github.com/palantir/blueprint/blob/develop/packages/core/src/common/interactionMode.ts)
to determine the interaction mode (mouse or keyboard) and show the ring
accordingly. My preferred solution is to use the
[focus-visible polyfill](https://github.com/WICG/focus-visible).

### :focus-visible selector (Polyfill)

The steps to make the solution work are simple:

```bash
$ npm install --save focus-visible
```

Import the polyfill in the entry point of the app:

```js
import 'focus-visible/dist/focus-visible';
```

Disabled the outline in the global CSS file:

```css
/*
  This will hide the focus indicator if the element receives focus via the mouse,
  but it will still show up on keyboard focus.
*/
.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
  box-shadow: none;
}
```

Alternatively, we can rely on the `data-focus-visible-added` attribute (for
cases where the build system overwrites class names
[#179](https://github.com/WICG/focus-visible/issues/179)):

```css
.js-focus-visible :focus:not([data-focus-visible-added]) {
  outline: none;
}
```

For more info, see the
[focus-visible docs](https://github.com/WICG/focus-visible).
