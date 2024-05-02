import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientDialogComponentComponent } from './edit-client-dialog-component.component';

describe('EditClientDialogComponentComponent', () => {
  let component: EditClientDialogComponentComponent;
  let fixture: ComponentFixture<EditClientDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditClientDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditClientDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
