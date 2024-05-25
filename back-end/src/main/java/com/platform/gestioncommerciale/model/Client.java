package com.platform.gestioncommerciale.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table
public class Client implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;

    @Column
    private String cneClient;

    @Column
    private String nomClient;

    @Column
    private String prenomClient;

    @Column
    private String adresseClient;

    @Column
    private Integer telClient;

    @Column
    private String emailClient;

    @OneToMany(mappedBy="client")
    @JsonManagedReference(value = "client-factures")
    private List<Facture> factures;
    public Client() {
    }

    public Client(String cneClient, String nomClient, String prenomClient, String adresseClient, Integer telClient, String emailClient, List<Facture> factures) {
        this.cneClient = cneClient;
        this.nomClient = nomClient;
        this.prenomClient = prenomClient;
        this.adresseClient = adresseClient;
        this.telClient = telClient;
        this.emailClient = emailClient;
        this.factures = factures;
    }

    public Client(Long idClient, String cneClient, String nomClient, String prenomClient, String adresseClient, Integer telClient, String emailClient, List<Facture> factures) {
        this.idClient = idClient;
        this.cneClient = cneClient;
        this.nomClient = nomClient;
        this.prenomClient = prenomClient;
        this.adresseClient = adresseClient;
        this.telClient = telClient;
        this.emailClient = emailClient;
        this.factures = factures;
    }

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
    }

    public String getCneClient() {
        return cneClient;
    }

    public void setCneClient(String cneClient) {
        this.cneClient = cneClient;
    }

    public String getNomClient() {
        return nomClient;
    }

    public void setNomClient(String nomClient) {
        this.nomClient = nomClient;
    }

    public String getPrenomClient() {
        return prenomClient;
    }

    public void setPrenomClient(String prenomClient) {
        this.prenomClient = prenomClient;
    }

    public String getAdresseClient() {
        return adresseClient;
    }

    public void setAdresseClient(String adresseClient) {
        this.adresseClient = adresseClient;
    }

    public Integer getTelClient() {
        return telClient;
    }

    public void setTelClient(Integer telClient) {
        this.telClient = telClient;
    }

    public String getEmailClient() {
        return emailClient;
    }

    public void setEmailClient(String emailClient) {
        this.emailClient = emailClient;
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
                "idClient=" + idClient +
                ", cneClient='" + cneClient + '\'' +
                ", nomClient='" + nomClient + '\'' +
                ", prenomClient='" + prenomClient + '\'' +
                ", adresseClient='" + adresseClient + '\'' +
                ", telClient=" + telClient +
                ", emailClient='" + emailClient + '\'' +
                ", factures=" + factures +
                '}';
    }
}
