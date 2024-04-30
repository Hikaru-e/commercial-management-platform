package com.platform.gestioncommerciale.controller;
import com.platform.gestioncommerciale.model.Fournisseur;
import com.platform.gestioncommerciale.service.FournisseurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fournisseurs")
public class FournisseurController {

    @Autowired
    private FournisseurService fournisseurService;
    @GetMapping("/all")
    public List<Fournisseur> getAllFournisseurs() {

        return fournisseurService.getAllFournisseur();
    }

    @GetMapping("/search_id/{id}")
    public Optional<Fournisseur> getFournisseurById(@PathVariable Long id) {
        return fournisseurService.getFournisseurById(id);
    }

    @PostMapping("/add")
    public Fournisseur addFournisseur(@RequestBody Fournisseur fournisseur) {
        return fournisseurService.addOrUpdateClientFournisseur(fournisseur);
    }

    @PutMapping("/modify/{id}")
    public Fournisseur updateFournisseur(@PathVariable Long id,@RequestBody Fournisseur fournisseur) {
        fournisseur.setId_fourn(id);
        return fournisseurService.addOrUpdateClientFournisseur(fournisseur);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteClient(@PathVariable Long id) {
        fournisseurService.deleteFournisseur(id);
    }


    @GetMapping("/search_name/{nomSociete}")
    public  List<Fournisseur> findFournisseurByNom(@PathVariable String nomSociete) {
        return fournisseurService.findByNomFournisseur(nomSociete);
    }


}
