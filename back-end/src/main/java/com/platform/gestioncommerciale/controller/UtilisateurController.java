package com.platform.gestioncommerciale.controller;

import com.platform.gestioncommerciale.model.Produit;
import com.platform.gestioncommerciale.model.Utilisateur;
import com.platform.gestioncommerciale.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/utilisateurs")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/all")
    public List<Utilisateur> getAllUtilisateur()
    {
        return utilisateurService.getAllUtilisateur();
    }

    @GetMapping("/search_id/{id}")
    public Optional<Utilisateur> getUtilisateurById(@PathVariable Long id){
        return utilisateurService.getUtilisateurById(id);
    }

    @PostMapping("/add")
    public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur){
        return utilisateurService.addOrUpdateUtilisateur(utilisateur);
    }

    @PutMapping("/modify/{id}")
    public Utilisateur updateUtilisateur(@PathVariable Long id, @RequestBody Utilisateur utilisateur) {
        utilisateur.setIdUser(id);
        return utilisateurService.addOrUpdateUtilisateur(utilisateur);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUtilisateur(@PathVariable Long id) {
        utilisateurService.deleteUtilisateur(id);
    }

    @GetMapping("/search_name/{nameUser}")
    public Optional<Utilisateur> findUserByName(@PathVariable String nameUser) {
        return utilisateurService.findUserByName(nameUser);
    }
    @PostMapping("/login/{email}")
    public Utilisateur login(@PathVariable String email, @RequestBody String password) {
        try {
            // Find the user by email
            Optional<Utilisateur> utilisateurOpt = utilisateurService.findByEmailUser(email);

            // Check if the user exists
            if (utilisateurOpt.isPresent()) {
                // Get the user from Optional
                Utilisateur utilisateur = utilisateurOpt.get();
                System.out.println(utilisateur.getEmailUser());
                System.out.println(utilisateur.getPasswordUser());

                // Authenticate the user using the provided password
                return utilisateurService.login(Optional.of(utilisateur), password);
            } else {
                throw new Exception("User not found");
            }
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }



}