package com.platform.gestioncommerciale.controller;

import com.platform.gestioncommerciale.model.Produit;
import com.platform.gestioncommerciale.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produits")
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @GetMapping("/all")
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @GetMapping("/search/{id}")
    public Optional<Produit> getProduitById(@PathVariable Long id) {
        return produitService.getProduitById(id);
    }

    @PostMapping("/add")
    public Produit addProduit(@RequestBody Produit produit) {
        return produitService.addOrUpdateProduit(produit);
    }

    @PutMapping("/modify/{id}")
    public Produit updateProduit(@PathVariable Long id, @RequestBody Produit produit){
        produit.setId_pdt(id);
        return produitService.addOrUpdateProduit(produit);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduit(@PathVariable Long id){
        produitService.deleteProduit(id);
    }



}
