import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-client-dialog-component',
  templateUrl: './edit-client-dialog-component.component.html',
  styleUrls: ['./edit-client-dialog-component.component.css']
})
export class EditClientDialogComponentComponent implements OnInit {
  editClientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<EditClientDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editClientForm = this.fb.group({
      cneClient: ['', Validators.required],
      nomClient: ['', Validators.required],
      prenomClient: ['', Validators.required],
      adresseClient: ['', Validators.required],
      telClient: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      emailClient: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    if (this.data && this.data.editingClientId) {
      this.clientService.getClientById(this.data.editingClientId).then(response => {
        this.editClientForm.patchValue(response.data);
      }).catch(error => {
        console.error('Error fetching client details', error);
      });
    }
  }

  onSubmit(): void {
    if (this.editClientForm.valid) {
      const updatedClient = this.editClientForm.value;
      this.clientService.updateClient(this.data.editingClientId, updatedClient).then(() => {
        this.dialogRef.close(true);
      }).catch(error => {
        console.error('Error updating client', error);
      });
    }
  }
}
