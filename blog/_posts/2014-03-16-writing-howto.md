---
layout: post

title: Writing posts
subtitle: "A howto"
cover_image: our-space/our-space-panorama.jpg

excerpt: "The MHV website features a community blog reel — for news and events — as well as a public exhibit of member projects."

author: klepas
---

The MHV website features a community blog reel — for news and events — as well as a public exhibit of member projects. We invite you to document exciting developments in your projects, list upcoming events you’re planning, and showcase your work via this community website.

We use a number of tools to automate the building of the site. This makes adding content to either of these areas managable and easy, but getting started can be a bit daunting. If you have any questions please ask. ☺

## Getting started

There are two ways to add your content, both requiring an account on [GitHub.com](https://github.com), where we host [the MakeHackVoid website code](https://github.com/makehackvoid/makehackvoid.com):

1. [adding your content directly via the GitHub web interface](https://help.github.com/articles/creating-and-editing-files-in-your-repository); or
2. by downloading a clone of the project for local editing

In either scenario you’ll want to [*fork* the project](https://help.github.com/articles/fork-a-repo) (cloning it into your own account). Use the button in the top-right corner on the project page. This gives you your own copy of the website to play with and edit.

From here you can add your content (e.g. a blog post). Once you’re happy send the project maintainers a *pull-request* to let them know of your intent to add your changes.

## Markdown

All our content is written in plain text [Markdown](https://en.wikipedia.org/wiki/Markdown) files (basic text files that use a simple human-readable syntax). For a primer check out [John Gruber’s initial project page](http://daringfireball.net/projects/markdown/syntax). (Specifically, we’re using [Maruku](http://maruku.rubyforge.org/index.html).)

## Github

### Working via the web interface

GitHub provides a decent web interface for adding text files and editing them. This allows you to navigate to `blog/_posts/`, `events/_posts/`, or `projects/_posts/` and add a file directly.

Note that if you want to add non-text files, like images, you will have to work locally — GitHub does not support adding binary files via the web interface.

### Working locally

Use your favourite Git client — GitHub have their own too for both [Windows](http://windows.github.com/) and [Mac](http://mac.github.com/) — or if you’re a terminal junkie clone the repo directly:

`git clone git@github.com:makehackvoid/makehackvoid.com.git`

### Pull requests

From the GitHub help documentation on [pull requests](https://help.github.com/articles/using-pull-requests):

> Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.

## Content customisation

From code highlighting to metadata and more, there is a lot you can customise for your posts and content.

### Content header metadata

Post metadata is defined at the start of your Markdown files in the [‘YAML front-matter’](http://jekyllrb.com/docs/frontmatter/). In addition to the stock variables we have a few extras:

{% highlight yaml %}
# Selects the layout from _layouts/
layout: post

title: Foo bar
subtitle: "This is my subtitle"

# An abstract, used in the /blog and /projects listings.
excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

# Author attribution; see _data/members.yml
author: klepas

# Select a banner/cover image for your post from files/ directory
cover_image: $category/$post-title/$filename.jpg|png

# Keep this as a draft (not published in index.html or feed.xml)
draft: false
{% endhighlight %}

### Member profile data

We’re tracking this via `members.yml` the `_data/` directory, for example:

{% highlight yaml %}
wonka:
  name: Willy Wonka
  github: willywonka
  link: http://wonkafactory.com
{% endhighlight %}

Remember to add yourself to this file if you’re posting for the first time. If you don’t or your alias doesn’t match the `author:` field in the post metadata your name/handle will be missing on your post(s).

### Hackergotchis/avatars

‘Hackergotchis‘ sit in `files/hackergotchis/` and need to be sized 180×180 pixels. To make a matching circle hackergotchi you can use your favourite raster image editor — like [GIMP](http://www.gimp.org/) — to crop a circular mugshot of yourself.

Typically this process involves opening your image, cropping it as desired, making a circular selection with your face in the center, inverting the selection, and cutting this (outside space of this circle). Please save your image as a transparent PNG instead of leaving this negative space a white background.

If you need a hand nudge @klepas.

### Content styles

We encourage you to use the right markup for your content, and with Markdown this is nice and easy. Here’s a quick style rundown of commonly used content elements.

#### Common content elements

These include:

- headings (`h1`–`h6`) — commence from `h2` in your writing (as `h1` is the title)
- paragraphs
- block quotations — if you come across styling issues when nesting content in blockquotes let us know
- lists, sorted and unsorted
- definition lists
- tables — these can be annoying to write in plain text so [a generator can be handy](http://www.tablesgenerator.com/markdown_tables)
- preformatted text/code

You can also set definitions easily as well, for example:

```
Definition term
: Lorem ipsum dolor sit amet, consectetur adipisicing elit.

Definition term
: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
: Ipsum, distinctio, nostrum excepturi aliquam quae sequi quis ipsa vel.
```

Renders to:

Definition term
: Lorem ipsum dolor sit amet, consectetur adipisicing elit.

Definition term
: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
: Ipsum, distinctio, nostrum excepturi aliquam quae sequi quis ipsa vel.

#### Code & syntax highlighting

Setting code blocks is simple, either with tab indents or using three backticks (\`) before and after your code block.

Syntax highlighting is also available, for example:

{% highlight text %}
{% raw %}
{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}
{% endraw %}
{% endhighlight %}

Renders as:

{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}

#### Images

You can insert images using Markdown syntax or using HTML. Additionally if you want to embed a larger image you can add a class in HTML to make it ‘zoomable’, for example:

{% highlight html %}
  <div class="full zoomable">
    <img src="/files/projects/robosapien-w-bluetooth-remote/seeeduino-work.jpg">
  </div>
{% endhighlight %}

Should provide (click on the image to zoom):

<div class="full zoomable"><img src="/files/projects/robosapien-w-bluetooth-remote/seeeduino-work.jpg"></div>

#### Buttons

We style our contact RSVP buttons in events by applying extra classes to the link:


`[foo@bar.com](mailto:foo@bar.com){: .btn .btn-outline}`

Which produces:

[foo@bar.com](mailto:foo@bar.com){: .btn .btn-outline}

## More resources

- [Markdown documentation](http://daringfireball.net/projects/markdown)
- [Jekyll documentation](http://jekyllrb.com/docs/home/)