var cardsStack = []

var authorize = function(){
  Trello.setKey('120c2ec2c451b05e340cd44d2c2a6aae');
  Trello.authorize({
    interactive:false,
  });
}

var insertToDOM = function(html){
  $('.js-discussion').prepend(html);
}

var prepareTemplate = function(cardInfo) {
  var uri = chrome.extension.getURL('src/template.mst');
  cardInfo.avatar = chrome.extension.getURL('trello.png');
  cardInfo.dateFormated = new Date(cardInfo.dateLastActivity).toString();
  cardInfo.detail = markdown.toHTML( cardInfo.desc );
  $.get(uri, function(template) {
    var html = Mustache.render(template, cardInfo);
    insertToDOM(html);
  });
}

var extractCardID = function(link) {
  return link.href.split('/')[4];
}

var retrieveCardInfo = function(cardID) {
  authorize();
  if(!Trello.authorized()) return false; 

  Trello.cards.get(cardID, function(cardInfo){
    console.log(cardInfo);
    prepareTemplate(cardInfo);
  });

}

var update = function(){
  var links = document.querySelectorAll('a');
  [].forEach.call(links, function(link){
    if(link.href && link.href.indexOf('trello.com') > -1){
      var cardID = extractCardID(link);
      if (cardsStack.indexOf(cardID) == -1) {
        retrieveCardInfo(cardID);
        cardsStack.push(cardID);
      }
    }
  });
}

chrome.runtime.onMessage.addListener(function(message, sender){
  localStorage.setItem('trello_token', message.token);
  update()
});
