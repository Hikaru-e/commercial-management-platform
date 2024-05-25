package com.platform.gestioncommerciale.controller;

import com.platform.gestioncommerciale.model.Client;
import com.platform.gestioncommerciale.model.Facture;
import com.platform.gestioncommerciale.service.ClientService;
import com.platform.gestioncommerciale.service.FactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/factures")
public class FactureController {


    @Autowired
    private FactureService factureService;
    @Autowired
    private ClientService clientService;


    @GetMapping("/all")
    public List<Facture> getAllFactures() {
        return factureService.getAllFactures();
    }

    @PostMapping("/add")
    public Facture ajouterModifierFacture( Facture facture) {

        return factureService.addOrUpdateFacture(facture);
    }

    @PutMapping("/modify/{id}")
    public Facture updateClient(@PathVariable Long id ,@RequestBody Facture facture) {
        facture.setIdFacture(id);
        return factureService.addOrUpdateFacture(facture);
    }
    @DeleteMapping("/delete/{id}")
    public void supprimerFacture(@PathVariable Long id) {
        factureService.deleteFacture(id);
    }

/*    @GetMapping("/rechercher/{nomClient}")
    public List<Facture> rechercherFacturesParNomClient(@PathVariable String nomClient) {
        List<Client> clients = clientService.findByNomClient(nomClient);
        if(!clients.isEmpty() && clients.get(0) != null) {
            return factureService.findFacturesByClientId(clients.get(0).getId_client());
        } else {
            return new ArrayList<>();
        }
    }*/

    @GetMapping("/rechercher/{nomClient}")
    public List<Facture> rechercherFacturesParNomClient(@PathVariable String nomClient) {
        return factureService.findFacturesByClientNom(nomClient);
    }

    @GetMapping("/show_info_facture/{id}")
    public Optional<Facture> obtenirFactureParId(@PathVariable Long id) {
        return factureService.getFactureById(id);
    }

    @GetMapping("/sum")
    public Float getSumOfAllFactures() {
        return factureService.getSumOfAllFactures();
    }

}
