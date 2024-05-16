package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.Facture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FactureRepo extends JpaRepository<Facture,Long> {

    List<Facture>  findByClient_NomClient(String nomClient);

}
