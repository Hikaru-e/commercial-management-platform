package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.Produit;
import com.platform.gestioncommerciale.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UtilisateurRepo extends JpaRepository<Utilisateur,Long> {
    @Query("SELECT p FROM Utilisateur p WHERE p.nomUser = :name")
    Optional<Utilisateur> findUserByName(String name);

    @Query("SELECT p FROM Utilisateur p WHERE p.emailUser = :emailUser")
    Optional<Utilisateur> findByEmailUser(String emailUser);
}
