---
title: Interactive rebase
date: '2019-05-23'
description:
  Interactive rebase is a powerful tool to rewrite Git history and maintain a
  sane commit history.
---

Interactive rebase is a powerful tool. There is a lot we can do with it. In most
cases, I use it to squash all the previous commits into a large commit with a
structured commit message. To give an example, let's consider a hypothetical
feature implementation.

Let's imagine we have a ticket to modify our app to point the user into this
blog post. Let's also imagine the change needs to be made in the following
component:

```jsx
import React from 'react';

const Hero = () => (
  <div>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
);

export default Hero;
```

We may start by changing the text in the p tag:

```jsx{5}
import React from 'react';

const Hero = () => (
  <div>
    <p>I have a new blog post.</p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
);

export default Hero;
```

Let's commit the change:

```bash
$ git commit -am "New pre-link text"
```

Now, we need to change the URL of the link:

```jsx{8}
import React from 'react';

const Hero = () => (
  <div>
    <p>I have a new blog post.</p>
    <a
      className="App-link"
      href="https://josenunes.dev/blog/git-i-rebase"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
);

export default Hero;
```

We commit the new change:

```bash
$ git commit -am "New link URL"
```

Finally, we need to change the link text:

```jsx{12}
import React from 'react';

const Hero = () => (
  <div>
    <p>I have a new blog post.</p>
    <a
      className="App-link"
      href="https://josenunes.dev/blog/git-i-rebase"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read it here
    </a>
  </div>
);

export default Hero;
```

We commit the new change:

```bash
$ git commit -am "New link text"
```

If we check the history now, we can see three commits associated with the
feature we are implementing. However, there is not a great value in having all
those separate commits. In situations like these, I tend to use an interactive
rebase to squash all the commits and to give this new commit a proper commit
message. The command I use often is:

```bash
$ git rebase -i develop
```

Which results in:

```git
pick b2e19af New pre-link text
pick 857153b New link URL
pick 8b2be25 New link text

# Rebase 09b0d2e..8b2be25 onto 09b0d2e (3 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

What I do next is to change the last two commands to be "squash" instead of
"pick". As a pro-tip, in Vim, there is an easy way to do that. Place the cursor
at the beginning of each pick and type `cw`. Vim will delete the word "pick" and
enter "Insert" mode. From there, we just need to type a character "s". The final
result should be:

```git{2-3}
pick b2e19af New pre-link text
s 857153b New link URL
s 8b2be25 New link text

# Rebase 09b0d2e..8b2be25 onto 09b0d2e (3 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

After saving the changes (":wq" in Vim land) we enter a second screen:

```git
# This is a combination of 3 commits.
# This is the 1st commit message:

New pre-link text

# This is the commit message #2:

New link URL

# This is the commit message #3:

New link text

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Thu May 23 14:59:51 2019 +0100
#
# interactive rebase in progress; onto 09b0d2e
# Last commands done (3 commands done):
#    s 857153b New link URL
#    s 8b2be25 New link text
# No commands remaining.
# You are currently rebasing branch 'feature/TST-1_new-blog-post-link' on '09b0d2e'.
#
# Changes to be committed:
#       new file:   src/Hero.js
#
```

Here, what I usually do is to delete some lines (I use Vim's "dd" command for
that) and leave just the commit messages as follows:

```git{1-8}
Add link to new blog post

Changes:
- New pre-link text
- New link URL
- New link text

TST-1
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Thu May 23 14:59:51 2019 +0100
#
# interactive rebase in progress; onto 09b0d2e
# Last commands done (3 commands done):
#    s 857153b New link URL
#    s 8b2be25 New link text
# No commands remaining.
# You are currently rebasing branch 'feature/TST-1_new-blog-post-link' on '09b0d2e'.
#
# Changes to be committed:
#       new file:   src/Hero.js
#
```

Now, instead of a bunch of commits, there is one global commit with a solid
commit message. Of course, there is a lot more we can do while rebasing a
feature branch. The
[Juri Strumpflohner course](https://egghead.io/courses/productive-git-for-developers)
on Egghead.io is a great resource. I definitely recommend it.
