import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataFacadeService } from 'src/app/services/data-facade.service';
import { Translation } from 'src/resources/types';

@Component({
  selector: 'app-translation-selection',
  templateUrl: './translation-selection.component.html',
  styleUrls: ['./translation-selection.component.scss']
})
export class TranslationSelectionComponent implements OnInit {
  translations$:Observable<Translation[]>;

  constructor(private dataService:DataFacadeService) {
    this.translations$ = dataService.getTranslations();
  }

  ngOnInit(): void {
  }

  onTranslationSelected(translation:Translation):void {
    this.dataService.selectTranslation(translation);
  }
}
