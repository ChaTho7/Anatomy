import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissueUpdateComponent } from './tissue-update.component';

describe('TissueUpdateComponent', () => {
  let component: TissueUpdateComponent;
  let fixture: ComponentFixture<TissueUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissueUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TissueUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
