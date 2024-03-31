package com.platform.gestioncommerciale.model;

import jakarta.persistence.*;

@Entity
@Table
public class Fournisseur {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_fourn;

    @Column
    private String nom_societe;

    @Column
    private String adress_fourn;

    @Column
    private Integer tel_fourn;

    @Column
    private String email_fourn;

    public Fournisseur() {
    }

    public Fournisseur(Long id_fourn, String nom_societe, String adress_fourn, Integer tel_fourn, String email_fourn) {
        this.id_fourn = id_fourn;
        this.nom_societe = nom_societe;
        this.adress_fourn = adress_fourn;
        this.tel_fourn = tel_fourn;
        this.email_fourn = email_fourn;
    }

    public Fournisseur(String nom_societe, String adress_fourn, Integer tel_fourn, String email_fourn) {
        this.nom_societe = nom_societe;
        this.adress_fourn = adress_fourn;
        this.tel_fourn = tel_fourn;
        this.email_fourn = email_fourn;
    }

    public Long getId_fourn() {
        return id_fourn;
    }

    public void setId_fourn(Long id_fourn) {
        this.id_fourn = id_fourn;
    }

    public String getNom_societe() {
        return nom_societe;
    }

    public void setNom_societe(String nom_societe) {
        this.nom_societe = nom_societe;
    }

    public String getAdress_fourn() {
        return adress_fourn;
    }

    public void setAdress_fourn(String adress_fourn) {
        this.adress_fourn = adress_fourn;
    }

    public Integer getTel_fourn() {
        return tel_fourn;
    }

    public void setTel_fourn(Integer tel_fourn) {
        this.tel_fourn = tel_fourn;
    }

    public String getEmail_fourn() {
        return email_fourn;
    }

    public void setEmail_fourn(String email_fourn) {
        this.email_fourn = email_fourn;
    }

    @Override
    public String toString() {
        return "Fournisseur{" +
                "id_fourn=" + id_fourn +
                ", nom_societe='" + nom_societe + '\'' +
                ", adress_fourn='" + adress_fourn + '\'' +
                ", tel_fourn=" + tel_fourn +
                ", email_fourn='" + email_fourn + '\'' +
                '}';
    }
}
