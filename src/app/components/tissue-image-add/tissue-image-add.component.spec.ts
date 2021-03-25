import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissueImageAddComponent } from './tissue-image-add.component';

describe('TissueImageAddComponent', () => {
  let component: TissueImageAddComponent;
  let fixture: ComponentFixture<TissueImageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissueImageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TissueImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
