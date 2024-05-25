package com.platform.gestioncommerciale.controller;

import com.platform.gestioncommerciale.model.BonAchat;
import com.platform.gestioncommerciale.service.BonAchatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bonAchats")
public class BonAchatController {
    @Autowired
    private BonAchatService bonAchatService;

    @GetMapping("/all")
    public List<BonAchat> getAllBonAchat(){
        return bonAchatService.getAllBonAchats();
    }

    @GetMapping("/search_by_id/{id}")
    public Optional<BonAchat> getBonAchatById(@PathVariable Long id){
        return bonAchatService.getBonAchatById(id);
    }


    @GetMapping("/search_by_fournisseur/{id_fourn}")
    public List<BonAchat> getBonAchatsByFournisseur(@PathVariable Long id_fourn) {
        return bonAchatService.getBonAchatsByFournisseur(id_fourn);
    }



    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public BonAchat addBonAchat(@RequestBody BonAchat bonAchat){
        return bonAchatService.addOrUpdateBonAchat(bonAchat);
    }

    @PutMapping("/modify/{id}")
    public BonAchat updateBonAchat(@PathVariable Long id,@RequestBody BonAchat bonAchat) {
        bonAchat.setIdBonAchat(id);
        return bonAchatService.addOrUpdateBonAchat(bonAchat);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBonAchat(@PathVariable Long id){
        bonAchatService.deleteBonAchat(id);
    }


    @GetMapping("/detail_bon_achat/{id}")
    public String getBonAchatDetail(@PathVariable Long id) {
        Optional<BonAchat> bonAchatOptional = bonAchatService.getBonAchatById(id);
        if (bonAchatOptional.isPresent()) {
            BonAchat bonAchat = bonAchatOptional.get();
            String statut = bonAchat.getStatueBonAchat();
            return "Détail du bon d'achat avec ID " + id + " : Statut - " + statut;
        } else {
            return "Aucun bon d'achat trouvé avec l'ID " + id;
        }
    }
}
