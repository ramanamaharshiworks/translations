import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationListPageComponent } from './translation-list-page.component';

describe('TranslationListPageComponent', () => {
  let component: TranslationListPageComponent;
  let fixture: ComponentFixture<TranslationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
