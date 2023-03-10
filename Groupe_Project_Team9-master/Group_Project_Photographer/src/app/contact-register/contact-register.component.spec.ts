import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRegisterComponent } from './contact-register.component';

describe('ContactRegisterComponent', () => {
  let component: ContactRegisterComponent;
  let fixture: ComponentFixture<ContactRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
