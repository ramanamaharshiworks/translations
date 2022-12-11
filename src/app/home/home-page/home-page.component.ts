import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataFacadeService } from 'src/app/services/data-facade.service';
import { Translation, Work } from 'src/resources/types';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  host : {
    '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class HomePageComponent implements OnInit {
  selectedWork$:Observable<Work | null>;
  selectedTranslation$:Observable<Translation | undefined>;

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder, private dataService:DataFacadeService) {
    this.selectedWork$ = dataService.getSelectedWork();
    this.selectedTranslation$ = dataService.getSelectedTranslation();
  }

  ngOnInit(): void {
  }

  handleKeyboardEvents($event:KeyboardEvent) {
    switch($event.key) {
      case "ArrowUp":

        this.dataService.selectPreviousParagraph();
        $event.preventDefault();
        break;
      case "ArrowDown":
        this.dataService.selectNextParagraph();
        $event.preventDefault();
        break;
    }
  }
}
