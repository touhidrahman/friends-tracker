import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoadingComponent } from './layout-loading.component';

describe('LayoutLoadingComponent', () => {
  let component: LayoutLoadingComponent;
  let fixture: ComponentFixture<LayoutLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
