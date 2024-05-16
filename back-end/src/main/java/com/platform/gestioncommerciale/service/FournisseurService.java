package com.platform.gestioncommerciale.service;

import com.platform.gestioncommerciale.model.BonAchat;
import com.platform.gestioncommerciale.model.Client;
import com.platform.gestioncommerciale.model.Fournisseur;
import com.platform.gestioncommerciale.repo.FournisseurRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class FournisseurService {


    @Autowired
    private FournisseurRepo fournisseurRepo ;

    public List<Fournisseur> getAllFournisseur(){
        return fournisseurRepo.findAll();
    }

    public Fournisseur addOrUpdateClientFournisseur(Fournisseur fournisseur ){
        return fournisseurRepo.save(fournisseur);
    }

    public Optional<Fournisseur> getFournisseurById(Long id) {
        return fournisseurRepo.findById(id);
    }

    public void deleteFournisseur(Long id) {
        fournisseurRepo.deleteById(id);
    }

    public List<Fournisseur> findByNomFournisseur(String nom_fournisseur) {
        return fournisseurRepo.findByNomSociete(nom_fournisseur);
    }

    public List<BonAchat> getHistoriqueAchats(Long fournisseurId) {
        Optional<Fournisseur> fournisseurOptional = fournisseurRepo.findById(fournisseurId);
        if (fournisseurOptional.isPresent()) {
            Fournisseur fournisseur = fournisseurOptional.get();
            return fournisseur.getBonAchats();
        } else {
            return Collections.emptyList();
        }
    }

}
