package com.platform.gestioncommerciale.service;

import com.platform.gestioncommerciale.model.Utilisateur;
import com.platform.gestioncommerciale.repo.UtilisateurRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepo utilisateurRepo ;


    public List<Utilisateur> getAllUtilisateur(){
        return utilisateurRepo.findAll();
    }

    public Optional<Utilisateur> getUtilisateurById(Long id){

        return utilisateurRepo.findById(id);
    }

    public Utilisateur addOrUpdateUtilisateur( Utilisateur utilisateur){
        return utilisateurRepo.save(utilisateur);
    }

    public void deleteUtilisateur(Long id ){

        utilisateurRepo.deleteById(id);
    }

}