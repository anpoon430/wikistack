const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div><input id="authorName" name="name" type="text" class="form-control"/>
    <label for="authorName">Name</label>
    </div>

    <div>
    <input id="email" name="email" type="email" class="form-control"/>
    <label for="email">Email</label>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div><label for="content">Content</label>
    <textarea id="content" name="content" class="form-control"/></textarea>
    </div>


      <div>
        <input id="status_open" name="status" value = 'open' type="radio" class="form-control"/>
        <label for="status_open">Open</label>


        <input id="status_closed" name="status" value = 'closed' type="radio" class="form-control"/>
        <label for="status_closed">Closed</label>
      </div


    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
