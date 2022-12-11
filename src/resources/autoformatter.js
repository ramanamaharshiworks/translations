var paragraphs = [];

function add() {
  var name = document.getElementById("name").value,
    content = document.getElementById("content").value,
    paraphrase = document.getElementById("paraphrase").value,
    contentPartsAsArray = [];

  var contentParts = content.split("\n");
  console.log("parts:", contentParts);
  for (var i = 0; i < contentParts.length; i++) {
    var contentPart = contentParts[i],
      contentPartSections = contentPart.split(" => "),
      text = null,
      tooltip = null;

    text = contentPartSections[0];

    if (contentPartSections.length > 1) {
      tooltip = contentPartSections[1];
    }

    contentPartsAsArray.push({
      text: text,
      tooltip: tooltip,
    });
  }

  var currentIndex = 0,
    paraphraseParts = [];

  while (currentIndex < paraphrase.length) {
    var a = paraphrase.indexOf("[", currentIndex);
    if (a == -1) {
      paraphraseParts.push(paraphrase.substring(currentIndex));
      break;
    }

    paraphraseParts.push(paraphrase.substring(currentIndex, a));

    var b = paraphrase.indexOf("]", a);
    paraphraseParts.push(paraphrase.substring(a, b + 1));

    currentIndex = b + 1;
  }
  console.log(paraphraseParts);

  var json = JSON.stringify({
      name: name,
      content: contentPartsAsArray,
      paraphrase: paraphraseParts.map(n => ({
        text : n,
        isBracket : (n.indexOf("[") >= 0)
      }))
    }),
    result = document.getElementById("result");

  result.value = json;
}
