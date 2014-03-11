makehackvoid.com
================

This project maintains the [Jekyll](http://jekyllrb.com/) layouts, stylesheets, and other assets required to automatically build the [makehackvoid.com](http://makehackvoid.com) website.

Usage
-----

We build the website automatically from plaintext [Markdown](https://en.wikipedia.org/wiki/Markdown) files. This means adding your content is quite simple, with two options for doing so:

1. add your content directly via GitHub
2. fork the project, add your content, and send us a pull-request

To hack on the website you’ll need [Ruby and Ruby Gems](http://jekyllrb.com/docs/installation/):

    bundle install

You may need to install some dependancies too (if you don't already have them):

    sudo gem install jekyll-assets
    sudo gem install sass
    sudo gem install uglifier

and then build the site locally while watching for changes:

    jekyll serve --watch

File structure
--------------

- `news/_posts/`: news items (blog)
- `events/_posts/`: event postings (blog)
- `projects/_posts/`: project exhibition

We’re making use of some extra features over vanilla Jekyll:

- `_assets`: https://github.com/ixti/jekyll-assets
- `_data`: http://jekyllrb.com/docs/datafiles/

Technologies
------------
* Jekyll (1.1)
* Twitter Bootstrap (3.0)
* jQuery (1.10)
* Jekyll-Incorporated

Other resources
---------------

Liquid cheat-sheet: http://cheat.markdunkley.com/

License
-------
The licensed for this project will be finalised before public release. It is proposed that it be released under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

To-dos
------

Layout/code:

- responsive nav
- about dropdown
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
