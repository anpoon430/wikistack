const html = require("html-template-tag");
const marked = require("marked");
const layout = require("./layout");

module.exports = (page, author) => {
  const content = page.content;
  return layout(html`
  <h3>${page.title}
      <small> (<a href="/wiki/${page.slug}/similar">Similar</a>)</small>
  </h3>
  <h4>by <a href="/wiki/users/${author.id}">${author.name}</a></h4>
  <hr/>
  <div class="page-body">${content}</div>
  <hr/>
  <a href="/wiki/${page.slug}/edit" class="btn btn-primary">edit this page</a>
  <a href="/wiki/${
    page.slug
  }/delete" class="btn btn-danger">delete this page</a>
`)};
