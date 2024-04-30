// ClientController.java
package com.platform.gestioncommerciale.controller;

import com.platform.gestioncommerciale.model.Client;
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

    @PostMapping("/add")
    public Client addClient(@RequestBody Client client) {
        return clientService.addOrUpdateClient(client);
    }

    @PutMapping("/modify/{id}")
    public Client updateClient(@PathVariable Long id,@RequestBody Client client) {
        client.setId_client(id);
        return clientService.addOrUpdateClient(client);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
    }


    @GetMapping("/search_name/{nomClient}")
    public  List<Client> findClientByNom(@PathVariable String nomClient) {
        return clientService.findByNomClient(nomClient);
    }

}
