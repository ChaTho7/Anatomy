import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissueAddComponent } from './tissue-add.component';

describe('TissueAddComponent', () => {
  let component: TissueAddComponent;
  let fixture: ComponentFixture<TissueAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissueAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TissueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
