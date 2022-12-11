import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import {  DataFacadeService } from 'src/app/services/data-facade.service';
import { ContentPart, Paragraph, ParaphrasePart } from 'src/resources/types';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContentComponent implements OnInit {
  selectedParagraph$:Observable<Paragraph | undefined>;

  constructor(dataService: DataFacadeService) {
    this.selectedParagraph$ = dataService.getSelectedParagraph();
  }

  ngOnInit(): void {
  }
}
