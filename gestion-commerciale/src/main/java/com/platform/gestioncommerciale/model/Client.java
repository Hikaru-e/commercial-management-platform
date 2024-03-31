package com.platform.gestioncommerciale.model;

import jakarta.persistence.*;

@Entity
@Table
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_client;

    @Column
    private String cne_client;

    @Column
    private String nom_client;

    @Column
    private String prenom_client;

    @Column
    private String adresse_client;

    @Column
    private Integer tel_client;

    @Column
    private String email_client;

    public Client() {
    }

    public Client(Long id_client, String cne_client, String nom_client, String prenom_client, String adresse_client, Integer tel_client, String email_client) {
        this.id_client = id_client;
        this.cne_client = cne_client;
        this.nom_client = nom_client;
        this.prenom_client = prenom_client;
        this.adresse_client = adresse_client;
        this.tel_client = tel_client;
        this.email_client = email_client;
    }

    public Client(String cne_client, String nom_client, String prenom_client, String adresse_client, Integer tel_client, String email_client) {
        this.cne_client = cne_client;
        this.nom_client = nom_client;
        this.prenom_client = prenom_client;
        this.adresse_client = adresse_client;
        this.tel_client = tel_client;
        this.email_client = email_client;
    }

    public Long getId_client() {
        return id_client;
    }

    public void setId_client(Long id_client) {
        this.id_client = id_client;
    }

    public String getCne_client() {
        return cne_client;
    }

    public void setCne_client(String cne_client) {
        this.cne_client = cne_client;
    }

    public String getNom_client() {
        return nom_client;
    }

    public void setNom_client(String nom_client) {
        this.nom_client = nom_client;
    }

    public String getPrenom_client() {
        return prenom_client;
    }

    public void setPrenom_client(String prenom_client) {
        this.prenom_client = prenom_client;
    }

    public String getAdresse_client() {
        return adresse_client;
    }

    public void setAdresse_client(String adresse_client) {
        this.adresse_client = adresse_client;
    }

    public Integer getTel_client() {
        return tel_client;
    }

    public void setTel_client(Integer tel_client) {
        this.tel_client = tel_client;
    }

    public String getEmail_client() {
        return email_client;
    }

    public void setEmail_client(String email_client) {
        this.email_client = email_client;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id_client=" + id_client +
                ", cne_client='" + cne_client + '\'' +
                ", nom_client='" + nom_client + '\'' +
                ", prenom_client='" + prenom_client + '\'' +
                ", adresse_client='" + adresse_client + '\'' +
                ", tel_client=" + tel_client +
                ", email_client='" + email_client + '\'' +
                '}';
    }
}
