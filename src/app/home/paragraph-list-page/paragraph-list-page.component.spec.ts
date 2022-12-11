import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphListPageComponent } from './paragraph-list-page.component';

describe('ParagraphListPageComponent', () => {
  let component: ParagraphListPageComponent;
  let fixture: ComponentFixture<ParagraphListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
