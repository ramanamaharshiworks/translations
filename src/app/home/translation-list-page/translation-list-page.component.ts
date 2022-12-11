import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataFacadeService } from 'src/app/services/data-facade.service';
import { Translation } from 'src/resources/types';

@Component({
  templateUrl: './translation-list-page.component.html',
  styleUrls: ['./translation-list-page.component.scss']
})
export class TranslationListPageComponent implements OnInit {
  translations$:Observable<Translation[]>;
  workId:string = "";

  constructor(private dataService:DataFacadeService, private route:ActivatedRoute, private router:Router) {
    this.workId = this.route.snapshot.params["name"];
    this.dataService.selectWorkById(this.workId);
    this.translations$ = dataService.getTranslations();
  }

  ngOnInit(): void {}

  onTranslationSelected(translation:Translation):void {
    this.router.navigate(["work", this.workId, translation.name ]);
  }
}
