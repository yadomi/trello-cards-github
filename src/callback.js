var onAuthorize = function() {
  console.log(localStorage.getItem('trello_token'));
  // Trello.deauthorize();
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

var button = document.querySelector('button');
button.addEventListener('click', function(){
  authorize();
});