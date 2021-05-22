---
title: What's the meaning of Euler's number
date: '2020-01-31'
description:
  Euler's number is a math star. However, unlike the number pi, its meaning is
  not so well known. In this post I talk about the way I tend to think about
  Euler's number.
---

In this post, and for something a bit different, I want to talk about Math. Math
is not the most loved discipline between students. However, I do feel that
people would enjoy it more if we improve the way it is usually taught.

It is not uncommon to find people, even with an academic engineering background,
not being able to tell the meaning of the number $\pi$. That fact is even more
impressive when we think that $\pi$ is nothing more than the ratio between the
circumference and the diameter of a circle.

Another poorly understood superstar number in Math is the so-called Euler's
number ($e$). Although not as easy to explain as the number $\pi$, it can be
taught in such a way that it becomes less mysterious. That is precisely the
subject of this blog post.

## How to define Euler's number?

To get things started, consider an exponential function of base $a$:

$$
f(x) = a^{x}
$$

We know that by definition its derivative is:

$$
\frac{d}{dx}a^{x} = \lim_{dx \rightarrow 0} \frac{a^{x+dx} - a^{x}}{dx}
$$

If we rearrange the terms a bit we can see that the derivative of an exponential
function is the function itself times a constant:

$$
\frac{d}{dx}a^{x} = a^{x}\lim_{dx \rightarrow 0} \frac{a^{dx} - 1}{dx}
$$

Since $a$ is itself also constant, there is a specific number for which the
above constant is equal to $1$. If we call that number "$e$" we get:

$$
\lim_{dx \rightarrow 0} \frac{e^{dx} - 1}{dx} = 1
$$

It is not difficult to see that $e$ is:

$$
e = \lim_{dx \rightarrow 0} \left(1 + dx\right) ^ {1/dx}
$$

Finally, we can see that for an exponential function of base $e$:

$$
\frac{d}{dx}e^{x} = e^{x}
$$

In other words, an exponential function with base $e$ has a derivative that is
equal to itself. This means the slope of the function at any point is equal to
the value of the function at that same point.

As a side note, our definition of $e$ allows us to easily get approximations for
its value (by replacing $dx$ with small values). For instance, for $dx = 0.0001$
we calculate $e$ to be:

$$
e = \left( 1 + 0.0001 \right) ^ {1 / 0.0001} = 2.718145926824926
$$

It is already pretty close to the real value of $e$ ($2.718281828459045...$).

## So, what is Euler's number exactly?

In reality, there are more ways to define Euler's number. However, this is the
way I like to think about it. Namely, $e$ is the number for which an exponential
function derivative is equal to itself.
