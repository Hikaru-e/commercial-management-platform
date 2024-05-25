import { Component, OnInit } from '@angular/core';
import { FactureService } from './facture.service';
import { Facture } from './facture.model';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  factures: Facture[] = [];
  selectedFacture: Facture | null = null;

  constructor(private factureService: FactureService) {}

  ngOnInit() {
    this.factureService.getAllFactures().subscribe((data) => {
      this.factures = data.map(facture => ({
        ...facture,
        dateFacture: new Date(facture.dateFacture)
      }));
    });
  }

  onPrint(facture: Facture) {
    this.factureService.downloadFacturePDF(facture);
  }

  onDelete(id: number) {
    this.factureService.deleteFacture(id).subscribe(() => {
      this.factures = this.factures.filter(facture => facture.idFacture !== id);
    });
  }

  onEdit(facture: Facture) {
    // Logique pour éditer la facture
  }
}
