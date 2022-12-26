export interface Work {
  id:string,
  name:string,
  selected:boolean,
  workInProgress:boolean
}

export interface Translation {
  workId:string,
  name:string,
  urlId:string,
  paragraphs?:Paragraph[],
  translatedByNotes:string,
  adaptatedByNotes:string,
  selected?:boolean,
  subtitle?:string
}

export interface Paragraph{
  name:string,
  content:ContentPart[],
  paraphraseTitle?:string,
  paraphrase?:ParaphrasePart[],
  selected?:boolean
}

export interface ContentPart {
  text:string,
  tooltip?:string
}

export interface ParaphrasePart {
  text:string,
  isBracket?:boolean
}
