package com.platform.gestioncommerciale.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    @Column
    private String nomUser;
    @Column
    private String prenomUser;
    @Column
    private String emailUser;
    @Column
    private String passwordUser;

    // maybe needs to be changed to an enum
    @Column
    private String roleUser;

    @OneToMany(mappedBy = "utilisateurBonAchat")
    @JsonManagedReference("utilisateur-bonAchat")
    private List<BonAchat> bonAchats;

    @OneToMany(mappedBy = "utilisateurFacture")
    @JsonManagedReference("utilisateur-facture")
    private List<Facture> factures;

    public Utilisateur() {
    }

    public Utilisateur(String nomUser, String prenomUser, String emailUser, String passwordUser, String roleUser, List<BonAchat> bonAchats, List<Facture> factures) {
        this.nomUser = nomUser;
        this.prenomUser = prenomUser;
        this.emailUser = emailUser;
        this.passwordUser = passwordUser;
        this.roleUser = roleUser;
        this.bonAchats = bonAchats;
        this.factures = factures;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getNomUser() {
        return nomUser;
    }

    public void setNomUser(String nomUser) {
        this.nomUser = nomUser;
    }

    public String getPrenomUser() {
        return prenomUser;
    }

    public void setPrenomUser(String prenomUser) {
        this.prenomUser = prenomUser;
    }

    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    public String getPasswordUser() {
        return passwordUser;
    }

    public void setPasswordUser(String passwordUser) {
        this.passwordUser = passwordUser;
    }

    public String getRoleUser() {
        return roleUser;
    }

    public void setRoleUser(String roleUser) {
        this.roleUser = roleUser;
    }

    public List<BonAchat> getBonAchats() {
        return bonAchats;
    }

    public void setBonAchats(List<BonAchat> bonAchats) {
        this.bonAchats = bonAchats;
    }

    public List<Facture> getFactures() {
        return factures;
    }

    public void setFactures(List<Facture> factures) {
        this.factures = factures;
    }

    @Override
    public String toString() {
        return "Utilisateur{" +
                "idUser=" + idUser +
                ", nomUser='" + nomUser + '\'' +
                ", prenomUser='" + prenomUser + '\'' +
                ", emailUser='" + emailUser + '\'' +
                ", passwordUser='" + passwordUser + '\'' +
                ", roleUser='" + roleUser + '\'' +
                ", bonAchats=" + bonAchats +
                ", factures=" + factures +
                '}';
    }
}