import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissuesComponent } from './tissues.component';

describe('TissuesComponent', () => {
  let component: TissuesComponent;
  let fixture: ComponentFixture<TissuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
