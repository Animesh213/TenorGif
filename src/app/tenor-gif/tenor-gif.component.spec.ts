import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenorGifComponent } from './tenor-gif.component';

describe('TenorGifComponent', () => {
  let component: TenorGifComponent;
  let fixture: ComponentFixture<TenorGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenorGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenorGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
