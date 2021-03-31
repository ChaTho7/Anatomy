import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissueThumbnailComponent } from './tissue-thumbnail.component';

describe('TissueThumbnailComponent', () => {
  let component: TissueThumbnailComponent;
  let fixture: ComponentFixture<TissueThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissueThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TissueThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
