let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
  "title" : "Tropes",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg",
  "favorite_color" : "#FF0072",
  "notes" : ["cat", "dog", "roomba"]
}

var randomIndex = Math.floor(Math.random() * myJSON["notes"].length);

printToPage( myJSON['title']);

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "Enemies to Lovers",
    "picture_url" : "https://pbs.twimg.com/media/EsOPpKdXMAA2Tcv.jpg",
    "favorite_color" : "dimgrey",
    "notes" : ["5/10", "high potential for greatness", "overdone & uneccessarily complicated"]
  },
  {
    "title" : "Love Triangle",
    "picture_url" : "https://static.more.com/wp-content/uploads/2014/11/09200728/love_triangle.2e16d0ba.fill-620x413.jpg",
    "favorite_color" : "dimgrey",
    "notes" : ["3/10", "mostly annoying", "fighting for someone's love isn't cute"]
  },
  {
    "title" : "Childhood Bestfriends",
    "picture_url" : "https://i.huffpost.com/gen/2080862/thumbs/o-KIDS-570.jpg?1",
    "favorite_color" : "dimgrey",
    "notes" : ["8/10", "good buildup", "love the mutual pining & wholesome af"]
  },
  {
    "title" : "Badboy Goodgirl",
    "picture_url" : "https://image.shutterstock.com/image-vector/male-devil-female-angel-260nw-181027814.jpg",
    "favorite_color" : "dimgrey",
    "notes" : ["2/10", "women don't need to save men", "the men often suck & why is this a thing??"]
  },
  {
  "title" : "Mr. Nice Guy",
  "picture_url" : "https://i.ytimg.com/vi/hz-Uo4iMvn4/maxresdefault.jpg",
  "favorite_color" : "dimgrey",
  "notes" : ["5/10", "it's cute if he's actually nice", "can turn into a self-serving creep very fast"]
  },
  {
  "title" : "You Don't Know You're Beautiful",
  "picture_url" : "https://www.billboard.com/wp-content/uploads/stylus/2660969-one-direction-new-617-409.jpg",
  "favorite_color" : "dimgrey",
  "notes" : ["3/10", "validation shouldn't come from male attention", "overal weird with some genuine moments ig"]
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {

  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\">";

  for (var i = 0; i < incomingJSON['notes'].length; i++) {
    var noteString = "<li>" + incomingJSON['notes'][i] + "</li>";
    incompleteHTML += noteString;
  }

  incompleteHTML += "</ul></div>";
  contentGridElement.innerHTML = incompleteHTML;
  console.log(incompleteHTML);
}

function createElementProper(incomingJSON) {


  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');


  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];

newContentElement.appendChild(newContentHeading);


  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Key things:";
  newContentElement.appendChild(newContentSubhead);


  let newContentNoteList = document.createElement("UL");
  newContentElement.appendChild(newContentNoteList);


  for (var i = 0; i < incomingJSON['notes'].length; i++) {
    var currentNoteString = incomingJSON['notes'][i];
    var newNoteItem = document.createElement("LI");
    newNoteItem.innerText = currentNoteString;
    newContentNoteList.appendChild(newNoteItem);
  }


  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);


  contentGridElement.appendChild(newContentElement);

}
