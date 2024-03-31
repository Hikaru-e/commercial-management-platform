package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepo extends JpaRepository<Client,Long> {
}
