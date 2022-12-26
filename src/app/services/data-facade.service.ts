import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Paragraph, Translation, Work } from 'src/resources/types';
import { translations, works } from 'src/resources/data';

@Injectable({
  providedIn: 'root'
})
export class DataFacadeService {
  /* Observables. */
  works$:BehaviorSubject<Work[]>;
  paragraphs$:BehaviorSubject<Paragraph[] | undefined>;
  translations$:BehaviorSubject<Translation[]>;
  selectedWork$?:BehaviorSubject<Work | null>;
  selectedTranslation$?:BehaviorSubject<Translation | undefined>;
  selectedParagraph$:BehaviorSubject<Paragraph | undefined>;

  /* Private */
  private _selectedParagraph?:Paragraph | null;

  constructor() {
    this.works$ = new BehaviorSubject<Work[]>(works);
    this.translations$ = new BehaviorSubject<Translation[]>(translations);
    this.paragraphs$ = new BehaviorSubject<Paragraph[] | undefined>(undefined);
    this.selectedParagraph$ = new BehaviorSubject<Paragraph | undefined>(undefined);
  }

  getWorks():Observable<Work[]> {
    return this.works$;
  }

  getTranslations():Observable<Translation[]> {
    return this.translations$;
  }

  getTranslation():Observable<Translation | undefined> {
    if (this.selectedTranslation$ == null)
      this.selectedTranslation$ = new BehaviorSubject<Translation | undefined>(
        translations[0]);

    return this.selectedTranslation$;
  }

  getParagraphs():Observable<Paragraph[] | undefined>{
    return this.paragraphs$;
  }

  private getAvailableTranslations(workId:string):Translation[] {
    return translations.filter( n => n.workId == workId );
  }

  private getAvailableParagraphs():Paragraph[] {
    const selectedTranslation = this.selectedTranslation$?.value;
    if (selectedTranslation == null)
      return [];
    if (selectedTranslation.paragraphs == null)
      return [];

    return selectedTranslation.paragraphs?.map( n => ({
      ...n,
      selected: this._selectedParagraph?.name ==  n.name
    }));
  }

  searchParagraphs(searchText?:string):void {
    const availableParagraphs = this.getAvailableParagraphs();

    if (searchText == null || searchText == "") {
      this.paragraphs$?.next(availableParagraphs);
      return;
    }

    const result = availableParagraphs?.filter( n =>
      (
        n.content.map( o => o.text + o.tooltip ?? "") +
        n.name +
        n.paraphrase ?? ""
      ).toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) >= 0
    )

    this.paragraphs$?.next(result);
  }

  selectParagraph(paragraph:Paragraph) {
    this._selectedParagraph = paragraph;
    const currentlyVisibleParagraphs = this.paragraphs$?.value;
    if (currentlyVisibleParagraphs == null)
      return;

    const visibleParagraphs = currentlyVisibleParagraphs.map( n => ({
      ...n, selected : n.name == paragraph.name
    }));

    this.paragraphs$?.next(visibleParagraphs);
    this.selectedParagraph$.next(paragraph);
  }

  private getSelectedParagraphSibling(distance:number) : Paragraph | null {
    if (this._selectedParagraph == null)
      return null;

    const paragraphs = this.paragraphs$?.getValue();
    if (paragraphs == null)
      return null;

    const currentIndex = paragraphs.findIndex((n) => n.name == this._selectedParagraph?.name);
    if (currentIndex == null)
      return null;

    const nextParagraph = paragraphs[currentIndex + distance];
    return nextParagraph;
  }

  selectNextParagraph() {
    const nextParagraph = this.getSelectedParagraphSibling(1);
    if (nextParagraph == null)
      return;

    this.selectParagraph(nextParagraph);
  }

  selectPreviousParagraph() {
    const previousParagraph = this.getSelectedParagraphSibling(-1);
    if (previousParagraph == null)
      return;

    this.selectParagraph(previousParagraph);
  }

  selectTranslation(translation:Translation) {
    this.selectedTranslation$?.next(translation);
    this.paragraphs$.next(translation.paragraphs);
    if (translation.paragraphs == null)
      return;
    this.selectParagraph(translation.paragraphs[0]);
  }

  selectNoWork(){
    this.works$?.next(works.map( n => ({... n, selected : false })));
    this.selectedWork$?.next(null);
    this.selectedTranslation$?.next(undefined);
  }

  selectWork(work:Work) {
    this.works$?.next(works.map( n => ({... n, selected : n.id == work.id })));
    this.selectedWork$?.next({...work});
    this.selectedTranslation$?.next(undefined);
    this.translations$?.next(this.getAvailableTranslations(work.id));
    this._selectedParagraph = null;
  }

  selectTranslationByUrlId(workName:string, translationUrlId:string){
    const matchedWorks = works.filter( work => work.id == workName );
    this.selectWork(matchedWorks[0]);
    const matchedTranslations = translations.filter( 
		translation => translation.urlId == translationUrlId && translation.workId == workName
	);
    if (matchedTranslations.length > 0){
      this.selectTranslation(matchedTranslations[0]);
    }
  }

  selectWorkById(workId:string){
    const matchedWorks = works.filter( n => n.id == workId);
    if (matchedWorks.length > 0) {
      this.selectWork(matchedWorks[0]);
    }
  }

  getSelectedWork():Observable<Work | null> {
    if (this.selectedWork$ == null) {
      this.selectedWork$ = new BehaviorSubject<Work | null>(null);
    }

    return this.selectedWork$;
  }

  getSelectedTranslation():Observable<Translation | undefined> {
    if (this.selectedTranslation$ == null){
      this.selectedTranslation$ = new BehaviorSubject<Translation | undefined>(undefined)
    }

    return this.selectedTranslation$;
  }

  getSelectedParagraph():Observable<Paragraph | undefined> {
    return this.selectedParagraph$;
  }
}
