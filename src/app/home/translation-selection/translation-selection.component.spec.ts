import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationSelectionComponent } from './translation-selection.component';

describe('TranslationSelectionComponent', () => {
  let component: TranslationSelectionComponent;
  let fixture: ComponentFixture<TranslationSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
