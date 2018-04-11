function callServer() {
  var url = 'http://localhost:3001/doSomething';
  var reqContent = {
    firstName: 'Jhon',
    latName: 'Doe'
  };
  $.post(url, reqContent)
   .done(resp => console.log(resp))
   .fail(err => console.error(err))
   .always(() => console.log('End'));
}
