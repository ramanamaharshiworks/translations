import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataFacadeService } from 'src/app/services/data-facade.service';
import { Work } from 'src/resources/types';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMenuComponent implements OnInit {
  works$?:Observable<Work[]>;

  constructor(private dataService:DataFacadeService, private router:Router) { }

  ngOnInit(): void {
    this.works$ = this.dataService.getWorks();
  }

  onWorkSelected(work:Work): void {
    this.dataService.selectWork(work);
    this.router.navigate(["work", work.id]);
  }

  onNoWorkSelected(): void {
    this.dataService.selectNoWork();
  }
}
