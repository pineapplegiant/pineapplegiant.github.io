---
title: "🥇My First blog post: 'The best is yet to come!'"
date: 2019-02-19T00:49:43-07:00
type: "blog"
draft: false
author: "Guillermo Rodriguez"
tags: ["Hugo", "Golang", "Blog"]
categories: ["Development", "Web"]
description: "Hi! This is my first ever blog post. I'm hoping to have some more blog posts here soon. It's really hard to be a perfectionist with deadlines. But alas one must start somewhere."
lastmod: 2024-02-10T17:11:55-0800
---

![too damn long](https://i.imgflip.com/2u1cgi.jpg)

Building a blog is harddd.

In this post, I'll share the tumultuous pain of creating my very own blog using [Golang](https://go.dev/) and [Hugo](https://gohugo.io/). Believe it or not there's not _really_ any JavaScript on this site (*UPDATE*: I wanted to use some JS for the nav, so that's what I did). But other than that it's HTML, CSS, a sprinkle of SVG, and of course the tears of existential pain embedded into the fabric of every page.

## Why Golang and Hugo?

Let's start with the choice of tools – Golang and Hugo. The truth is, when I sat down to make this site, Golang’s efficiency and "blazingly fast" concurrency really attracted me. Back in 2018, [static site generation](https://jamstack.org/generators/) was all of the rage. If you don't know SSG's allow you to create websites that are completely static, aka just a file. Web servers are SO good at this that it makes your site very quick because it's literally just text on a page. The beauty is that a SSG will compile Markdown posts into valid HTML and package it up nicely, this makes blogging super easy.

The thing that stuck out the most was that Hugo could [compile a large number of blog posts in like a couple milliseconds](https://www.youtube.com/watch?v=CdiDYZ51a2o) and the fastest JavaScript static site generator comparatively ([Gatbsy](https://www.gatsbyjs.com/)) would take like a "couple years" to compile a blog post (or so that's what I felt to be true if I were to try it out on my 2010 Macbook). My 20 year old pea-sized brain really wanted that SPEED, so naturally I chose Hugo. Joke was on me though because I only have one blog post as of Jan 2024. I also currently own an 2023 M2 Macbook Pro, and idk if you know but that means I can comfortably open up two instances of VSCODE at the same time. That's right ladies my RAM and CPU usage goes dummy hard. I might as well be mining bitcoin... The other gotcha is I also want to switch to NextJS too.
I want to switch to NextJS because: 1) "ooh shiny" and 2) to prove to every recruiter that hasn't been replaced by AI yet that I can use React. I digress.

When building the site I soon discovered the Golang community is a bit smarter than me. It's also much smaller than the JS community. This meant there wasn't a large amount of secondary documentation. As of this update, it looks like [Luke Smith has a video on how to use Hugo so if you're a Linux Nerd you'll be safe here our overlord has deemed this software bloat free](https://www.youtube.com/watch?v=ZFL09qhKi5I); go use it.

## 1: Golang's Syntax

![Golang as a language](https://external-preview.redd.it/tLIfFgM3JHRk0cXLSUxuzZfgy5rsvfmFaXzd4XsAdXQ.png?auto=webp&s=961f5db2f07b661aa46a7a2c04b8708bc86f3096)

Let's start from the top: Golang's syntax. If you're familiar with C, you'll be "C-ing" yourself smile because it's pretty similar. This is likely because Rob Pike had a hand in designing both. It's truly got some of the power of C with the weird simplistic beauty of Python.
Golang's known for its simplicity, but that doesn't mean it's _easy_. If you're used to JavaScript, it'll be a bit more different. The syntax and features were a bit weird early on. However, once I got the hang of it, Golang became pretty straightforward. The templating language wasn't so bad since I was familiar to using [Django's templating language](https://docs.djangoproject.com/en/5.0/topics/templates/#the-django-template-language), but the lack of feedback on errors have been annoying. I think it's more of a Hugo thing than a Golang one.

## Challenge 2: Hugo's Static Nature and Template Maze

Customizing the look and feel of my blog was where the real adventure began. Like I said, the lack of feedback on errors from Hugo is what plagued 20-something year old G-mo. Luckily my evil ex-girlfriend who's good at design, helped design my site to be as simple as possible. So crafting the perfect template and theme didn't have the highest overhead. I didn't need crazy animations, or custom dynamic page creation, I just needed a place to share my resume and prove I can code. The components that were needed were that of the tried and true HTML skeleton:
    <Header />
    <Main />
    <Footer />

The only dynamic bit was going to be `<Main/>` and Hugo's really good at templating in this basic way. 


The key thing to know about Hugo it that it has two types of pages. Single pages, and List pages. The cool bit is they're aptly named as such: single.html and list.html. When interfacing with it, you can even import a theme if you want, I have an [example demo site using a theme on Github Pages here](https://github.com/pineapplegiant/finishedSite)

Once I understood this structure of Hugo where things go like the layout of your site goes in `layout/` and content goes in `content/` things became much easier:


{{< highlight html >}}
.
├── README.md
├── archetypes/
│   └── default.md -- Can interact with pre-defined pages here
├── config.toml    -- Store Global Variables to reference here
├── content/       -- Where your markdown content goes
│   ├── about.md
│   ├── blog/
├── layouts/       -- Where the structure of your site goes
│   ├── 404.html   -- You can make a 404 page too
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── list.html
│   │   └── single.html
│   ├── about/
│   │   └── single.html
│   ├── blog/
│   │   ├── list.html
│   │   └── single.html
│   ├── index.html
│   ├── partials/   -- Where ur components go
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── main.html
├── netlify.toml    -- Config file netlify uses
├── public/
├── static/         -- Where I keep my CSS and junk
│   ├── assets/
│   │   ├── gmo-logo.svg
│   │   ├── pines.svg
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   └── profile-pic.jpg
└── themes         -- Optional place to store a theme
{{< / highlight >}}

## Triumph 1: Speedy Development and Deployment Wins the Day

Once I got past these initial hurdles, and read the docs a bit, the magic started to happen. Hugo's static site generation made it easy to create my desired site, and with Hugo running I could see changes instantly. It was as easy as using the `Hugo server` command.

The real beauty came in deployment to a CDN. [Netlify](https://docs.netlify.com/integrations/frameworks/hugo/) makes it dummy easy with their free integration. In my opinion, all of the people working at Netlify deserve a big old smooch. I currently don't think I pay anything too! Absolute bonkers.

This efficiency was a game-changer. Netlify has a great thing going. Even though I'll likely switch to Vercel, I think both services are amazing and I've deployed documentation using Netlify a bunch.


## [Conclusion: Life is pain, but we gotta scrape the joy out of it every chance we get](https://www.youtube.com/watch?v=DrM05F3bRkA)

Building my blog with Golang and Hugo was like riding a roller-coaster. There were stomach-dropping moments of confusion, but I'm happy I did it. Despite the challenges, the end result is a blog that's uniquely mine. 

Thanks for being here 🍍
