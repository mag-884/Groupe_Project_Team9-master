import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioDetailComponent } from './portofolio-detail.component';

describe('PortofolioDetailComponent', () => {
  let component: PortofolioDetailComponent;
  let fixture: ComponentFixture<PortofolioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortofolioDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
