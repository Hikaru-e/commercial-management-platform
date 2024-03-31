package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepo extends JpaRepository<Utilisateur,Long> {
}
