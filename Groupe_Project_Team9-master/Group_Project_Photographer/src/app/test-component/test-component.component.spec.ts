import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSwiperComponent } from './test-component.component';

describe('TestSwiperComponent', () => {
  let component: TestSwiperComponent;
  let fixture: ComponentFixture<TestSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
