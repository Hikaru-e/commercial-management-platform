// ClientController.java
package com.platform.gestioncommerciale.controller;

import com.platform.gestioncommerciale.model.Client;
import com.platform.gestioncommerciale.model.Facture;
import com.platform.gestioncommerciale.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/all")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/search_id/{id}")
    public Optional<Client> getClientById(@PathVariable Long id) {
        return clientService.getClientById(id);
    }

    @GetMapping("/search_name/{nomClient}")
    public  List<Client> findClientByNom(@PathVariable String nomClient) {
        return clientService.findByNomClient(nomClient);
    }

    @PostMapping("/add")
    public Client addClient(@RequestBody Client client) {
        return clientService.addOrUpdateClient(client);
    }

    @PutMapping("/modify/{id}")
    public Client updateClient(@PathVariable Long id,@RequestBody Client client) {
        client.setIdClient(id);
        return clientService.addOrUpdateClient(client);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
    }

    @GetMapping("/historique_facture/{id}")
    public List<Facture> getFacturesByClientId(@PathVariable Long id) {
        return clientService.getFacturesByClientId(id);
    }


}
