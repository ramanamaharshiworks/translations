import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable, Subscription, takeWhile } from 'rxjs';
import { DataFacadeService } from 'src/app/services/data-facade.service';
import { Work } from 'src/resources/types';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMenuComponent implements OnInit, OnDestroy {
  works?:Work[];
  worksSubscription?:Subscription;

  constructor(private dataService:DataFacadeService, private router:Router) { }

  ngOnDestroy(): void {
	this.worksSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.worksSubscription = this.dataService.getWorks().subscribe(
		n => this.works = n.filter( n => !n.workInProgress)
	)
  }

  onWorkSelected(work:Work): void {
    this.dataService.selectWork(work);
    this.router.navigate([work.id]);
  }

  onNoWorkSelected(): void {
    this.dataService.selectNoWork();
  }
}
