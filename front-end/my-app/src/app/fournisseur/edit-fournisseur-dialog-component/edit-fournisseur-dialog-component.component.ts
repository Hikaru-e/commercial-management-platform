import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-edit-fournisseur-dialog-component',
  templateUrl: './edit-fournisseur-dialog-component.component.html',
  styleUrls: ['./edit-fournisseur-dialog-component.component.css']
})
export class EditFournisseurDialogComponentComponent implements OnInit {
  editFournisseurForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    public dialogRef: MatDialogRef<EditFournisseurDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.editFournisseurForm = this.fb.group({
      nomSociete: ['', Validators.required],
      adresseSociete: ['', Validators.required],
      telephoneSociete: ['', Validators.required],
      emailSociete: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data && this.data.editingFournisseurId) {
      this.fournisseurService.getFournisseurById(this.data.editingFournisseurId).then(response => {
        this.editFournisseurForm.patchValue(response.data);
      });
    }
  }

  onSubmit() {
    if (this.editFournisseurForm.valid) {
      this.fournisseurService.updateFournisseur(this.data.editingFournisseurId, this.editFournisseurForm.value).then(() => {
        this.dialogRef.close();
      }).catch(error => {
        console.error('Error updating fournisseur:', error);
      });
    }
  }
}
