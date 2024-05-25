package com.platform.gestioncommerciale.repo;

import com.platform.gestioncommerciale.model.BonAchat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface BonAchatRepo extends JpaRepository<BonAchat,Long> {

    List<BonAchat> findByFournisseur_IdFourn(Long idFourn);


}
