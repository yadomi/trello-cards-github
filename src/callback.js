var button = document.querySelector('button');

var onAuthorize = function() {
  button.remove();
  $('body').append('<span style="color:green;">Compte liée</span>');
}

Trello.authorize({
  interactive:false,
  success: onAuthorize
});

var authorize = function(){
  Trello.setKey('120c2ec2c451b05e340cd44d2c2a6aae');
  Trello.authorize({
    name: "Trello Cards for Github",
    type: "redirect",
    expiration: 'never',
    success: onAuthorize
  });
}

button.addEventListener('click', function(){
  authorize();
});