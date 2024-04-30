package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepo extends JpaRepository<Client,Long> {

    List<Client> findByNomClient(String nom_client);


}
