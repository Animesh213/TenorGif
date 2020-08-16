import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenorCombineComponent } from './tenor-combine.component';

describe('TenorCombineComponent', () => {
  let component: TenorCombineComponent;
  let fixture: ComponentFixture<TenorCombineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenorCombineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenorCombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
