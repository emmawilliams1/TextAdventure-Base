//Author: Emma Williams

var inputBox = document.querySelector('section > input');

console.log ( inputBox.tagName );
console.log ( inputBox.parentNode.tagName );

var weAreDumb = document.querySelector('#inventory');
console.log (weAreDumb.tagName );
console.log (weAreDumb.parentNode.tagName );

var tryingSoHard = document.querySelector('body > main > output > label');
console.log (tryingSoHard.tagName );
console.log (tryingSoHard.parentNode.tagName );

var prepareToFail = document.querySelector('#help');
console.log (prepareToFail.tagName);
console.log (prepareToFail.parentNode.tagName);

var childrenOfPrepareToFail = prepareToFail.childNodes;

for (i=0; i < childrenOfPrepareToFail.length; i++ ){
  console.log( childrenOfPrepareToFail[i].tagName );
};

console.log(document.getElementsByTagName('aside'));

console.log(document.getElementById('inventory');