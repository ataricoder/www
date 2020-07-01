---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: "2020-02-02"
updated: "2020-06-30"
preview: "How adding just-for-me authentication cascaded into new ideas and possibilities for play."
---

> This post is a complement to episode 346 of Design Details, Quality Software. It is also informed by the 2018 WWDC talk, The Qualities of Great Design.

---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

-   Marketing pages
-   Blog posts
-   E-commerce product listings
-   Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

---

# This is a heading

## This is a heading 2

---

```python
print("Hello World")
```

```css
h1 {
	color: red;
}
```

---

-   This is a unordered list
-   This is another one

---
