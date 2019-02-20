# Welcome to my personal website code

It was made with lots of ❤️  and care. I haven't used a lick of Javascript, but maybe one day I will. It was made only with CSS grid and still has a lot I need to do with it.

Below you'll find the current directory structure for my [ Hugo site ](https://gohugo.io/). I'll go through it all alphabetically.

*  **Archetypes**   - Directory used for Hugo to add specific YAML/TOML/JSON style "front-matter" (basically fancy variables) for your blog posts. If you want diffrent type of content you could run `hugo new blog/new_post.md` and hugo would populate the front matter with the `blog` content front-matter. A script outputting a template basically.
*  **Config.toml**  - This is my site configuration file. Major settings live here. My main menu links live in there too.
*  **Content**      - This is where all the content for my site is. So like my `about.md`. Blog posts, Project Posts. Everything!
*  **Data**         - This is Hugo's 'database'. If I ever wanna import some JSON stuff over and use that info I can in here.
*  **Layouts**      - This is where Hugo's magic *really* lives. Where all of my HTML template code live.
    * **Partials**  - Bits of code that are injected into different templates
    * **defaults**  - The default templates for hugo other "Type" pages.
* **Static**       - Pretty self explanatory. Where my images and svg stuff live.

```fortran
.
├── README.md
├── archetypes
│   └── default.md
├── config.toml
├── content
│   ├── about.md
│   ├── blog
│   │   ├── how-to-write-the-best-tech-docs-eva.md
│   │   ├── just-for-testing.md
│   │   ├── learning-goals-for-2019.md
│   │   ├── philosophy
│   │   │   └── platos-theory-of-forms-explained.md
│   │   ├── pls-help.md
│   │   ├── vim
│   │   │   ├── beginners-guide-to-vim.md
│   │   │   └── why-i-write-my-resume-in-markdown.md
│   │   └── what-classes-im-taking-in-2019.md
│   └── projects
│       ├── hugo_blog.md
│       ├── python_orm.md
│       └── to_do_web_app.md
├── data
├── layouts
│   ├── 404.html
│   ├── _default
│   │   ├── baseof.html
│   │   ├── list.html
│   │   └── single.html
│   ├── about
│   │   └── single.html
│   ├── blog
│   │   ├── list.html
│   │   └── single.html
│   ├── index.html
│   ├── partials
│   │   ├── footer.html
│   │   ├── footer_mid.html
│   │   ├── header.html
│   │   └── main.html
│   ├── projects
│   │   ├── list.html
│   │   └── single.html
│   └── resources
│       └── _gen
│           ├── assets
│           └── images
├── netlify.toml
├── public
│   ├── 404.html
│   ├── about
│   │   └── index.html
│   ├── assets
│   │   ├── 404.mp4
│   │   ├── gmo-logo-black.svg
│   │   ├── gmo-logo-icon-16.png
│   │   ├── gmo-logo-icon-32.png
│   │   ├── gmo-logo.svg
│   │   ├── pines-black.svg
│   │   ├── pines.svg
│   │   └── sorry.svg
│   ├── blog
│   │   ├── index.html
│   │   ├── index.xml
│   │   └── just-for-testing
│   │       └── index.html
│   ├── categories
│   │   ├── blueberry-muffins
│   │   │   ├── index.html
│   │   │   └── index.xml
│   │   ├── index.html
│   │   └── index.xml
│   ├── css
│   │   └── style.css
│   ├── img
│   │   └── profile-pic.jpg
│   ├── index.html
│   ├── index.xml
│   ├── projects
│   │   ├── hugo_blog
│   │   │   └── index.html
│   │   ├── index.html
│   │   ├── index.xml
│   │   ├── python_orm
│   │   │   └── index.html
│   │   └── to_do_web_app
│   │       └── index.html
│   ├── resume
│   │   ├── resume.html
│   │   └── style.css
│   ├── sitemap.xml
│   └── tags
│       ├── index.html
│       ├── index.xml
│       ├── personal
│       │   ├── index.html
│       │   └── index.xml
│       └── research-assistant
│           ├── index.html
│           └── index.xml
├── resources
│   └── _gen
│       ├── assets
│       └── images
├── static
│   ├── assets
│   │   ├── 404.mp4
│   │   ├── gmo-logo-black.svg
│   │   ├── gmo-logo-icon-16.png
│   │   ├── gmo-logo-icon-32.png
│   │   ├── gmo-logo.svg
│   │   ├── pines-black.svg
│   │   ├── pines.svg
│   │   └── sorry.svg
│   ├── css
│   │   └── style.css
│   ├── img
│   │   └── profile-pic.jpg
│   └── resume
│       ├── resume.html
│       └── style.css
└── themes

44 directories, 77 files
```
