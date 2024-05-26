import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindproductbynameComponent } from './findproductbyname.component';

describe('FindproductbynameComponent', () => {
  let component: FindproductbynameComponent;
  let fixture: ComponentFixture<FindproductbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindproductbynameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindproductbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
