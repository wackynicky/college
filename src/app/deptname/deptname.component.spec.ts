import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptnameComponent } from './deptname.component';

describe('DeptnameComponent', () => {
  let component: DeptnameComponent;
  let fixture: ComponentFixture<DeptnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
