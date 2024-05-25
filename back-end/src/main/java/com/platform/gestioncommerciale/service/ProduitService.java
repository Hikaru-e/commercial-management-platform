package com.platform.gestioncommerciale.service;

import com.platform.gestioncommerciale.model.Produit;
import com.platform.gestioncommerciale.repo.ProduitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProduitService {

    @Autowired

    private ProduitRepo produitRepo;

    public List<Produit> getAllProduits() {
        return produitRepo.findAll();
    }

    public Optional<Produit> getProduitById (Long id) {
        return produitRepo.findById(id);
    }

    public Produit addOrUpdateProduit(Produit produit) { return  produitRepo.save(produit);}

    public Optional<Produit> findProduitByName (String namePdt) {
        return produitRepo.findProduitByName(namePdt);
    }

    public void deleteProduit(Long id) {
        produitRepo.deleteById(id);
    }

    public List<Produit> getProduitsEnStock() {
        return produitRepo.findAll().stream()
                .filter(produit -> produit.getNvStockPdt() > 0)
                .collect(Collectors.toList());
    }

    public List<Produit> getProduitsHorsStock() {
        return produitRepo.findAll().stream()
                .filter(produit -> produit.getNvStockPdt() <= 0)
                .collect(Collectors.toList());
    }

}
