import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFournisseurDialogComponentComponent } from './edit-fournisseur-dialog-component.component';

describe('EditFournisseurDialogComponentComponent', () => {
  let component: EditFournisseurDialogComponentComponent;
  let fixture: ComponentFixture<EditFournisseurDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFournisseurDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFournisseurDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
