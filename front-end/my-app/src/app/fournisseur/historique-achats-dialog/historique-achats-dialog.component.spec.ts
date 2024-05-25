import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueAchatsDialogComponent } from './historique-achats-dialog.component';

describe('HistoriqueAchatsDialogComponent', () => {
  let component: HistoriqueAchatsDialogComponent;
  let fixture: ComponentFixture<HistoriqueAchatsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriqueAchatsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriqueAchatsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
