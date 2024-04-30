package com.platform.gestioncommerciale.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table
public class Client implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_client;

    @Column
    private String cne_client;

    @Column
    private String nomClient;

    @Column
    private String prenomClient;

    @Column
    private String adresse_client;

    @Column
    private Integer tel_client;

    @Column
    private String email_client;

    @OneToMany(mappedBy="client")
    private List<Facture> factures;
    public Client() {
    }

    public Client(Long id_client, String cne_client, String nomClient, String prenomClient, String adresse_client, Integer tel_client, String email_client) {
        this.id_client = id_client;
        this.cne_client = cne_client;
        this.nomClient = nomClient;
        this.prenomClient = prenomClient;
        this.adresse_client = adresse_client;
        this.tel_client = tel_client;
        this.email_client = email_client;
    }

    public Client(String cne_client, String nomClient, String prenomClient, String adresse_client, Integer tel_client, String email_client) {
        this.cne_client = cne_client;
        this.nomClient = nomClient;
        this.prenomClient = prenomClient;
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

    public String getnomClient() {
        return nomClient;
    }

    public void setnomClient(String nomClient) {
        this.nomClient = nomClient;
    }

    public String getPrenomClient() {
        return prenomClient;
    }

    public void setPrenomClient(String prenomClient) {
        this.prenomClient = prenomClient;
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

    public List<Facture> getFactures() {
        return factures;
    }

    public void setFactures(List<Facture> factures) {
        this.factures = factures;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id_client=" + id_client +
                ", cne_client='" + cne_client + '\'' +
                ", nomClient='" + nomClient + '\'' +
                ", prenomClient='" + prenomClient + '\'' +
                ", adresse_client='" + adresse_client + '\'' +
                ", tel_client=" + tel_client +
                ", email_client='" + email_client + '\'' +
                '}';
    }
}
