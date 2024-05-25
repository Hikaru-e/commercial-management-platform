package com.platform.gestioncommerciale.service;

import com.platform.gestioncommerciale.model.Facture;
import com.platform.gestioncommerciale.repo.FactureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FactureService {
    @Autowired
    private FactureRepo factureRepo;

    public List<Facture> getAllFactures(){return factureRepo.findAll();}
    public Facture addOrUpdateFacture(Facture facture) {
        return factureRepo.save(facture);
    }

    public void deleteFacture(Long id) {
        factureRepo.deleteById(id);
    }

    public List<Facture> findFacturesByClientNom(String NomClient) {
        return factureRepo.findByClient_NomClient(NomClient);
    }

    public Optional<Facture> getFactureById(Long id) {
        return factureRepo.findById(id);
    }

    // Nouvelle méthode pour obtenir la somme des montants des factures
    public Float getSumOfAllFactures() {
        List<Facture> factures = factureRepo.findAll();
        return factures.stream()
                .map(Facture::getMontantFacture)
                .reduce(0f, Float::sum);
    }


}
