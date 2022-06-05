---
<<<<<<< HEAD
title: Building My Personal Website -- Choosing The Stack
layout: ../../layouts/blog.astro
=======
title: Building My Personal Website -- Constructing The Stack
>>>>>>> 5b580847c383db0ac1bb502197b6b51c4ac5574d
date: 2022-06-03T02:19:32.773Z
thumbnail: https://css-tricks.com/wp-content/uploads/2021/05/astro-homepage.png
tags:
  - Astro
  - Programming
---
This week, I decided to start working on my personal website. It probably doesn't need to be something too fancy, so I could definitely do it in vanilla HTML, CSS and Javascript. That sounded kind of boring though, so I decided to hunt around for something else. Static site generators would be the tool to do the job, as they improve performance and SEO, and having worked primarily in React, the most obvious options were probably going to be the big names like NextJS or Gatsby. But digging around [Jamstack.org](https://jamstack.org/generators/) a little bit more, I found Astro, and seeing it allowed me to write in not only React but also other frameworks such as Vue, Svelte... , I was immediately curious.

After watching a couple of Youtube videos and digging around a little bit more, I finally decided to try Astro out. Here are my reasons:

* I've always wanted to check out SolidJS but doing a full side project with it seemed too time consuming. With Astro, I will be able to experiment with all kinds of frameworks on a smaller scale and swap them in and out.
* It is built on top of Vite, which is a new bundler that is blazingly fast!
* I really dig the aesthetic of their website XD

That being said, since it's still in beta so there's going to be risks being an early adopter. So far it's been really enjoyable to use though and hopefully that continues to be the case.

I also wanted a simple CMS (content management system) cause I didn't want to write my content in pure HTML or markdown and manage it manually. I think of CMSes as an abstraction layer over your persistence layer, whether that be files (in that case, a Git based CMS) or databases (in that case, an API based CMS), that simplifies common usecases such as CRUD operations, data modelling, permission management with an admin UI or an API. When I started researching, I was really blown away by the amount of choices that there were on the market. They all vary in customizability, underlying database or file structure, API friendliness, ability to self-host...

I was really having analysis paralysis, but I finally decided to choose the simplest one I found and just go with it. I decide on NetlifyCMS, and here are my reasons:

* I decided to go with one that could be self-hosted because using external services I wouldn't have as much control of my data and storage or editing limits my produce extra costs down the line.
* I decided with a Git based CMS because dealing with extra complexities of an external database wouldn't be necessary for a small personal website, and that way, I could also utilize git for version control.

So that's it for now! Thanks for reading, and have a nice day ❤(●'◡'●)