import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDefaultComponent } from './navbar-default.component';

describe('NavbarDefaultComponent', () => {
  let component: NavbarDefaultComponent;
  let fixture: ComponentFixture<NavbarDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
