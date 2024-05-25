package com.platform.gestioncommerciale.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Fournisseur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFourn;

    @Column
    private String nomSociete;

    @Column
    private String adressFourn;

    @Column
    private Integer telFourn;

    @Column
    private String emailFourn;


    @OneToMany(mappedBy = "fournisseur")
    @JsonManagedReference("fournisseur-bonAchats")
    private List<BonAchat> bonAchats;

    public Fournisseur() {
    }

    public Fournisseur(String nomSociete, String adressFourn, Integer telFourn, String emailFourn, List<BonAchat> bonAchats) {
        this.nomSociete = nomSociete;
        this.adressFourn = adressFourn;
        this.telFourn = telFourn;
        this.emailFourn = emailFourn;
        this.bonAchats = bonAchats;
    }

    public Fournisseur(Long idFourn, String nomSociete, String adressFourn, Integer telFourn, String emailFourn, List<BonAchat> bonAchats) {
        this.idFourn = idFourn;
        this.nomSociete = nomSociete;
        this.adressFourn = adressFourn;
        this.telFourn = telFourn;
        this.emailFourn = emailFourn;
        this.bonAchats = bonAchats;
    }

    public Long getIdFourn() {
        return idFourn;
    }

    public void setIdFourn(Long idFourn) {
        this.idFourn = idFourn;
    }

    public String getNomSociete() {
        return nomSociete;
    }

    public void setNomSociete(String nomSociete) {
        this.nomSociete = nomSociete;
    }

    public String getAdressFourn() {
        return adressFourn;
    }

    public void setAdressFourn(String adressFourn) {
        this.adressFourn = adressFourn;
    }

    public Integer getTelFourn() {
        return telFourn;
    }

    public void setTelFourn(Integer telFourn) {
        this.telFourn = telFourn;
    }

    public String getEmailFourn() {
        return emailFourn;
    }

    public void setEmailFourn(String emailFourn) {
        this.emailFourn = emailFourn;
    }

    public List<BonAchat> getBonAchats() {
        return bonAchats;
    }

    public void setBonAchats(List<BonAchat> bonAchats) {
        this.bonAchats = bonAchats;
    }

    @Override
    public String toString() {
        return "Fournisseur{" +
                "idFourn=" + idFourn +
                ", nomSociete='" + nomSociete + '\'' +
                ", adressFourn='" + adressFourn + '\'' +
                ", telFourn=" + telFourn +
                ", emailFourn='" + emailFourn + '\'' +
                ", bonAchats=" + bonAchats +
                '}';
    }
}
