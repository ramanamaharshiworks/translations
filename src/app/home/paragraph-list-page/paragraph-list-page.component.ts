import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { DataFacadeService } from 'src/app/services/data-facade.service';
import { Paragraph, Translation, Work } from 'src/resources/types';

@Component({
  templateUrl: './paragraph-list-page.component.html',
  styleUrls: ['./paragraph-list-page.component.scss']
})
export class ParagraphListPageComponent implements OnInit {
  selectedWork$?:Observable<Work | null>;
  paragraphs$?:Observable<Paragraph[] | undefined>;
  translation$?:Observable<Translation | undefined>;

  constructor(private dataService:DataFacadeService, private route:ActivatedRoute ) {
    this.translation$ = this.dataService.getTranslation();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const workName = params["name"];
      const workTranslation = params["translation"];

      this.paragraphs$ = this.dataService.getParagraphs();
      this.selectedWork$ = this.dataService.getSelectedWork();

      this.dataService.selectTranslationByName(workName, workTranslation);
    });
  }

}
