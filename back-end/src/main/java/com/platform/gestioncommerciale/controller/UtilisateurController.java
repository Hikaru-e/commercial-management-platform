package com.platform.gestioncommerciale.controller;

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

}