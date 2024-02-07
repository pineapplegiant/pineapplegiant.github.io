# [Welcome to the code repo for my personal website](https://pineapplegiant.com)

It was made with lots of ❤️  and care.

Below you'll find the (slightly trimmed) directory structure for my [ Hugo site ](https://gohugo.io/). I'll go through it all alphabetically.

*  **archetypes**   - Directory used for Hugo to add specific YAML/TOML/JSON style "front-matter" (basically fancy variables) for your blog posts. If you want diffrent type of content you could run `hugo new blog/new_post.md` and hugo would populate the front matter with the `blog` content front-matter. A script outputting a template basically.
*  **config.toml**  - This is my site configuration file. Major settings live here. My main menu links live in there too.
*  **content**      - This is where all the content for my site is. So like my `about.md`. Blog posts, Project Posts. Everything!
*  **data**         - This is Hugo's 'database'. If I ever wanna import some JSON stuff over and use that info I can in here.
*  **layouts**      - This is where Hugo's magic *really* lives. Where all of my HTML template code live.
    * **partials**  - Bits of code that are injected into different templates
    * **defaults**  - The default templates for hugo other "Type" pages. Hugo breaks HTML templates into 2 categories: `list.html` and `single.html` templates.
* **static**        - Pretty self explanatory. Where my images and svg stuff live.
* **themes**        - If I wanted to use a theme I would include the repository here. Basically it's somebody else's `layouts` directory that pulls their "list" and "single" templates.
* *(netlify.toml)*  - Configuration for netlify hosting.

```css
.
├── README.md
├── archetypes/
│   └── default.md
├── assets/
│   ├── sass/
│   │   └── main.scss
│   └── js/
│       └── main.js
├── config.toml
├── content/
│   ├── about.md
│   ├── blog
│   └── projects
├── data/
├── layouts/
│   ├── 404.html
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
│   ├── partials/
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── main.html
│   ├── projects/
├── netlify.toml
├── public/
├── static/
│   ├── assets
│   │   ├── gmo-logo.svg
│   │   ├── pines.svg
│   ├── img
│   │   └── GMO.png
└── themes/
```

