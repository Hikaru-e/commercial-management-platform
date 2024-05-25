import { Component, OnInit } from '@angular/core';
import { BonAchatService } from './bon-achat.service';
import { BonAchat } from './bon-achat.model';

@Component({
  selector: 'app-bondachat',
  templateUrl: './bondachat.component.html',
  styleUrls: ['./bondachat.component.css']
})
export class BondachatComponent implements OnInit {
  bonAchats: BonAchat[] = [];
  selectedBonAchat: BonAchat | null = null;

  constructor(private bonAchatService: BonAchatService) {}

  ngOnInit() {
    this.bonAchatService.getAllBonAchats().subscribe((data) => {
      this.bonAchats = data.map(ba => ({
        ...ba,
        dateBonAchat: new Date(ba.dateBonAchat)
      }));
    });
  }

  onPrint(bonAchat: BonAchat) {
    this.bonAchatService.downloadBonAchatPDF(bonAchat);
  }

  onDelete(id: number) {
    this.bonAchatService.deleteBonAchat(id).subscribe(() => {
      this.bonAchats = this.bonAchats.filter(ba => ba.idBonAchat !== id);
    });
  }

  onEdit(bonAchat: BonAchat) {
    // Logic to edit the BonAchat
  }
}
