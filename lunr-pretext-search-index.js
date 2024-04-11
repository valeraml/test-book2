var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "1",
  "title": "Chapter Title",
  "body": " Chapter Title   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "2",
  "title": "Chapter 1",
  "body": " Chapter 1   Text before the first section.  Some section  Some section pic1.jpg   A pendulum   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes    another   A pendulum simple.jpg   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes     A pendulum ball.svg   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes     A pendulum matter.svg   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes    sgv          A simple eigenvector demonstration     1-Dimensional Kinematics     "
},
{
  "id": "figure-function-derivative",
  "level": "2",
  "url": "ch-chapter-title.html#figure-function-derivative",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " A pendulum   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes   "
},
{
  "id": "figure-function-derivative1",
  "level": "2",
  "url": "ch-chapter-title.html#figure-function-derivative1",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": " A pendulum simple.jpg   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes   "
},
{
  "id": "figure-function-derivative2",
  "level": "2",
  "url": "ch-chapter-title.html#figure-function-derivative2",
  "type": "Figure",
  "number": "2.3",
  "title": "",
  "body": " A pendulum ball.svg   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes   "
},
{
  "id": "figure-function-derivative3",
  "level": "2",
  "url": "ch-chapter-title.html#figure-function-derivative3",
  "type": "Figure",
  "number": "2.4",
  "title": "",
  "body": " A pendulum matter.svg   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes   "
},
{
  "id": "sec--8",
  "level": "2",
  "url": "ch-chapter-title.html#sec--8",
  "type": "Figure",
  "number": "2.5",
  "title": "",
  "body": "      "
},
{
  "id": "figure-simple-eigenvector",
  "level": "2",
  "url": "ch-chapter-title.html#figure-simple-eigenvector",
  "type": "Figure",
  "number": "2.6",
  "title": "",
  "body": " A simple eigenvector demonstration   "
},
{
  "id": "sec--10",
  "level": "2",
  "url": "ch-chapter-title.html#sec--10",
  "type": "Figure",
  "number": "2.7",
  "title": "",
  "body": " 1-Dimensional Kinematics   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
