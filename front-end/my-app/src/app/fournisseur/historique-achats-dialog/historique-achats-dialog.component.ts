import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-historique-achats-dialog',
  templateUrl: './historique-achats-dialog.component.html',
  styleUrls: ['./historique-achats-dialog.component.css']
})
export class HistoriqueAchatsDialogComponent {
  historiqueAchats: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.historiqueAchats = data.historiqueAchats;
  }
}
