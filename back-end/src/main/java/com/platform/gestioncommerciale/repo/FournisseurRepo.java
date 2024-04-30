package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.Fournisseur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FournisseurRepo extends JpaRepository<Fournisseur,Long> {
    List<Fournisseur> findByNomSociete(String NomSociete);
}
