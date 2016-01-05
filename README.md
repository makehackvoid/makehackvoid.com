makehackvoid.com
================

This project maintains the [Jekyll](https://jekyllrb.com/) layouts, stylesheets, and other assets required to automatically build the [makehackvoid.com](https://makehackvoid.com) website.

Usage
-----

We build the website automatically from plaintext [Markdown](https://en.wikipedia.org/wiki/Markdown) files. This means adding your content is quite simple, with two options for doing so:

1. directly via GitHub’s web interface; or
2. by downloading the project for editing locally

For more detail see the [howto for writing/adding content on the MHV blog](http://makehackvoid.com/blog/2014/03/15/writing-howto/).

To hack on the website you’ll need [Ruby and Ruby Gems](https://jekyllrb.com/docs/installation/). To fetch the necessary packages/dependencies use bundle, in the root of the project:

    bundle install

and then build the site locally while watching for changes:

    jekyll serve --watch

File structure
--------------

- `news/_posts/`: news items (blog)
- `events/_posts/`: event postings (blog)
- `projects/_posts/`: project exhibition

We’re making use of some extra features over vanilla Jekyll:

- `_assets`: https://github.com/ixti/jekyll-assets
- `_data`: https://jekyllrb.com/docs/datafiles/

Technologies
------------
* Jekyll (1.1)
* Twitter Bootstrap (3.0)
* jQuery (1.10)
* [Jekyll-Incorporated](https://github.com/kippt/jekyll-incorporated)

Other resources
---------------

Liquid cheat-sheet: http://cheat.markdunkley.com/

License
-------
The licensed for this project will be finalised before public release. It is proposed that it be released under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

To-dos
------

Layout/code:

- join link (dropdown?) — membership.md - membership options, entry to google forms, email
- events/news structure — fold together under journal

Content:

- homepage
- membership/join page
- about/about our space page

Design:

- mhv logo
- homepage hero/banner items
- footer goodness
- project portfolio layout & typography
- blog-reel layout & typography
- news item styling (blog)
- event item styling (blog)
- table formatting
