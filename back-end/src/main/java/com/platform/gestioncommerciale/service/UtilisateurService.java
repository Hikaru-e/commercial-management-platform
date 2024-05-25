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

    public Optional<Utilisateur> findUserByName (String namePdt) {
        return utilisateurRepo.findUserByName(namePdt);
    }
    public Optional<Utilisateur> findByEmailUser (String email) {
        return utilisateurRepo.findByEmailUser(email);
    }


    public Utilisateur login(Optional<Utilisateur> loginRequest,String password) throws Exception {

        System.out.println("oki");
        if (!loginRequest.isPresent()) {
            throw new Exception("User not found");
        }
        Utilisateur utilisateur = loginRequest.get();
        System.out.println("iror");
        System.out.println(utilisateur.getPasswordUser());
        System.out.println(utilisateur.getEmailUser());

        if (utilisateur.getPasswordUser().equals(password)) {
            System.out.println((utilisateur.getPasswordUser()));

        }
        return utilisateur;
        // Here you can generate a session token or handle session management

    }

}