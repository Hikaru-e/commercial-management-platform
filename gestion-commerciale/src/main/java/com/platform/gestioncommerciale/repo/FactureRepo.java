package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.Facture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FactureRepo extends JpaRepository<Facture,Long> {
}
