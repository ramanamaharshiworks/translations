import { ContentPart, Paragraph, ParaphrasePart, Translation } from "./types";

const translation = (translation:Translation, content:string):Translation => {
  const result = {...translation};
  result.paragraphs = [];

  const paragraphParts = content.split("---");

  paragraphParts.forEach( paragraphPart => {
    const lines = paragraphPart.split('\n');
    let currentSection:string[] = [];
    const sections:string[] = [];
    lines.forEach((line) => {
      if (line == '' && currentSection.length > 0){
        sections.push(currentSection.join(" "));
        currentSection = [];
        return;
      }

      currentSection.push(line);
    });

    if (currentSection.length > 0){
      sections.push(currentSection.join(" "));
    }

    const paragraph = <Paragraph>{
      name : sections[0]?.trim(),
      content : getContentParts(sections[1]),
      paraphraseTitle : sections[2],
      paraphrase : getParaphraseParts(sections[3])
    };

    result.paragraphs?.push(paragraph);
  });

  return result;
};

function getParaphraseParts(paraphrase:string):ParaphrasePart[]{
  const paraphraseParts = [];
  let currentIndex = 0;

  while (currentIndex < paraphrase.length) {
    const a = paraphrase.indexOf("[", currentIndex);
    if (a == -1) {
      paraphraseParts.push(paraphrase.substring(currentIndex));
      break;
    }

    paraphraseParts.push(paraphrase.substring(currentIndex, a));

    const b = paraphrase.indexOf("]", a);
    paraphraseParts.push(paraphrase.substring(a, b + 1));

    currentIndex = b + 1;
  }



  return paraphraseParts.map(n => (<ParaphrasePart>{
    text : n,
    isBracket : (n.indexOf("[") >= 0)
  }));
}

function getContentParts(content:string):ContentPart[]{
  const result:ContentPart[] = [];
  const contentParts = content.match(/(?:[^\s"]+|"[^"]*")+/g);
  if (contentParts == null)
    return [];

  for (let i = 0; i < contentParts.length; i++) {
    const contentPart = contentParts[i];
    const contentPartSections = contentPart.split(":");
    let tooltip:string|undefined = undefined;
    let text = contentPartSections[0];

    if (contentPartSections.length > 1) {
      tooltip = contentPartSections[1].replace(/\"/g, "").trim();
      [",", ".", "¿", "?", "¡", "!", ";", ":", "-", "...", ")","("].forEach(
        (specialInput) => {
          if (tooltip?.endsWith(specialInput)) {
            tooltip = tooltip.substring(0, tooltip.length - specialInput.length);
            text = text + specialInput;
          }
        }
      );
    }

    result.push({
      text: text,
      tooltip: tooltip
    });
  }

  return result;
}

export { translation }
