const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
    <label for="Author-name" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="Author-name" name="name" type="text" class="form-control"/></div>
    
    <div><label for="email" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control"/></div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div><label for="Content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <input id="content" name="content" type="text" class="form-control"/></div>
    
    <div><label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="status" name="status" type="text" class="form-control"/></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);