import { Component, OnInit } from '@angular/core';
import { FournisseurService } from './fournisseur.service';
import { MatDialog } from '@angular/material/dialog';
import { EditFournisseurDialogComponentComponent } from './edit-fournisseur-dialog-component/edit-fournisseur-dialog-component.component';
import { HistoriqueAchatsDialogComponent } from './historique-achats-dialog/historique-achats-dialog.component'; // Assurez-vous d'importer le composant HistoriqueAchatsDialogComponent
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fournisseurs: any[] = [];
  editingFournisseurId: number | null = null;

  constructor(
    private fournisseurService: FournisseurService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getFournisseurs();
  }

  startEditingFournisseur(fournisseurId: number) {
    this.editingFournisseurId = fournisseurId;
    this.openEditFournisseurDialog();
  }

  openEditFournisseurDialog(): void {
    const dialogRef = this.dialog.open(EditFournisseurDialogComponentComponent, {
      width: '400px',
      data: { editingFournisseurId: this.editingFournisseurId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.editingFournisseurId = null;
      this.getFournisseurs();
    });
  }

  getFournisseurs() {
    this.fournisseurService.getFournisseurs().then(response => {
      this.fournisseurs = response.data;
    }).catch(error => {
      console.error('Error fetching fournisseurs:', error);
    });
  }

  addFournisseur() {
    const newFournisseur = { id: 6, nomSociete: 'New Fournisseur' };
    this.fournisseurService.addFournisseur(newFournisseur).then(() => {
      this.getFournisseurs();
    }).catch(error => {
      console.error('Error adding fournisseur:', error);
    });
  }

  deleteFournisseur(id: number) {
    this.fournisseurService.deleteFournisseur(id).then(() => {
      this.getFournisseurs();
    }).catch(error => {
      console.error('Error deleting fournisseur:', error);
    });
  }

  // Méthode pour afficher le dialogue de l'historique des achats
  showHistoriqueAchats(idFournisseur: number) {
    this.fournisseurService.getHistoriqueAchats(idFournisseur)
      .then((response: any) => {
        const historiqueAchats = response.data;
        this.dialog.open(HistoriqueAchatsDialogComponent, {
          width: '600px',
          data: { historiqueAchats }
        });
      })
      .catch((error: any) => {
        console.error('Error fetching historique achats:', error);
      });
  }

}
