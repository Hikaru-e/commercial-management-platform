package com.platform.gestioncommerciale.service;

import com.platform.gestioncommerciale.model.BonAchat;
import com.platform.gestioncommerciale.repo.BonAchatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BonAchatService {
    @Autowired
    private BonAchatRepo bonAchatRepo;

    public List<BonAchat> getAllBonAchats() {
        return bonAchatRepo.findAll();
    }

    public Optional<BonAchat> getBonAchatById(Long id) {
        return bonAchatRepo.findById(id);
    }
    public BonAchat addOrUpdateBonAchat(BonAchat bonAchat) {
        return bonAchatRepo.save((bonAchat));
    }

    public void deleteBonAchat(Long id) {
        bonAchatRepo.deleteById(id);
    }

}
