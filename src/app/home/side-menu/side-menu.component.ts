import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFacadeService } from 'src/app/services/data-facade.service';
import { Paragraph, Translation } from 'src/resources/types';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent implements OnInit {
  constructor(private dataService:DataFacadeService) { }
  search?:string;

  paragraphs$?:Observable<Paragraph[] | undefined>;
  translation$?:Observable<Translation | undefined>;

  ngOnInit(): void {
    this.paragraphs$ = this.dataService.getParagraphs();
    this.translation$ = this.dataService.getTranslation();
  }

  onParagraphSelected(paragraph:Paragraph):void{
    console.log("Selected", paragraph);

    this.dataService.selectParagraph(paragraph);
  }

  private searchParagraphs() {
    this.dataService.searchParagraphs(this.search);
  }

  onSearchKeypress() {
    this.searchParagraphs();
  }

  onClearSearch() {
    this.search='';
    this.searchParagraphs();
  }
}
