package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProduitRepo extends JpaRepository<Produit,Long> {

    @Query("SELECT p FROM Produit p WHERE p.namePdt = :name")
    Optional<Produit> findProduitByName(String name);
}
