# sometimesmotion.github.io

## [though this project is working, it is still a work in progress - download at your own risk]

### fixes & features to improve on:
* piwik
* eliminate script on 124 (index.html) - associated with strapdown.js?
* elim strapdown.js theme sxn; update from using xmp to pre; choose other md parser?
* comments
* port to other repo

## Blogging Framework

This project is intended as an easy way to implement a blog using Github Pages. It is purely JavaScript-based, with some JSON files to create dynamically populated menus. It also incorporates Bootstrap & the Bootswatch Flatly theme to allow you to have responsive pages and strapdown.js to use markdown to write your posts. 

I tried Jekyll and Octopress and although I'm sure they're great, they were above my ability-level and required too much finagling with the config files and such. This is meant to be a much simpler method, with a markdown option (using strapdown.js). The intent is for a platform that allows you to focus on writing and not the maintenance and setup of a new system to learn. It is all built on static webpages that link to JSON files to create small areas of dynamic content (kinda like using PHP includes). 

The idea is pretty simple- there is a JSON file that allows the navigation menu for recent posts and such to be dynamically generated for each page (much like a PHP include). There's no need to code a separate navigation menu for each page- as long as the JSON file gets updated, those links will automatically appear in the header menu. 

### Two things to keep in mind- 

* update the JSON file when you add a new post. It's pretty simple even if you don't know JSON- just follow the format of the existing entries. Cut and paste a previous entry and enter in the new data.

* if you're using the markdown option, all markdown needs to appear within the &lt;xmp&gt; tags. If you create a bunch of content outside of those, it may mess up the page rendering. 

### Themes

You can, of course, change the theme or get rid of the Bootswatch themes altogether by omitting that &gt;link&lt; element or by changing the href URL to point to one of the other [themes](https://bootswatch.com/ "Bootswatch homepage"). It's fairly simple to switch themes, replace the word 'flatly' with the other theme name in the URL. However, I haven't played around with changing the themes much, so you may need to update the <code>blogs.css</code> file as well.

### Creating an entry

To make a new blog post, just copy the <code>post.html</code> template file and overwrite the content. Rename the file. Add the new post metadata to your <code>posts.js</code> file and that's it! 

### That's about it. It's pretty simple. 

### Use

This work is free to use with an MIT license. I'd appreciate it if you let me know that you're using it and that you give me some feedback, but that's not necessary. I'm certainly no programming whiz- like I said, I created this to be a simpler way for me to write blogs than Jekyll and that's really not all that complex. 

#### MIT License info:

Copyright (c) 2015 Tim Miller

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
