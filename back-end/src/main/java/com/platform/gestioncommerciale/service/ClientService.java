// ClientService.java
package com.platform.gestioncommerciale.service;

import com.platform.gestioncommerciale.model.Client;
import com.platform.gestioncommerciale.model.Facture;
import com.platform.gestioncommerciale.repo.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


@Service
public class ClientService {

    @Autowired
    private ClientRepo clientRepo;

    public List<Client> getAllClients() {
        return clientRepo.findAll();
    }


    public Optional<Client> getClientById(Long id) {
        return clientRepo.findById(id);
    }

    public Client addOrUpdateClient(Client client) {
        return clientRepo.save(client);
    }

    public void deleteClient(Long id) {
        clientRepo.deleteById(id);
    }


    public List<Client> findByNomClient(String nom_client) {
        return clientRepo.findByNomClient(nom_client);
    }

    public List<Facture> getFacturesByClientId(Long clientId) {
        Optional<Client> clientOptional = clientRepo.findById(clientId);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            return client.getFactures();
        } else {
            return Collections.emptyList();
        }
    }
}
