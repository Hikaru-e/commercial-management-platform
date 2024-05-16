import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondachatComponent } from './bondachat.component';

describe('BondachatComponent', () => {
  let component: BondachatComponent;
  let fixture: ComponentFixture<BondachatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BondachatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BondachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
