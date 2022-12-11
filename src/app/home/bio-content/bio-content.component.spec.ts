import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioContentComponent } from './bio-content.component';

describe('BioContentComponent', () => {
  let component: BioContentComponent;
  let fixture: ComponentFixture<BioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
