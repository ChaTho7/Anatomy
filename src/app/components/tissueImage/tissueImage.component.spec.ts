import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissueImageComponent } from './tissueImage.component';

describe('TissueImageComponent', () => {
  let component: TissueImageComponent;
  let fixture: ComponentFixture<TissueImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissueImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TissueImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
