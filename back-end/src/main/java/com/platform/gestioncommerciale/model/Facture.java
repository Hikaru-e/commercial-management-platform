package com.platform.gestioncommerciale.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table
public class Facture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFacture;

    @Column
    private Date dateFacture;

    @Column
    private String modePaiment;

    @Column
    private Float montantFacture;

    @ManyToOne
    @JoinColumn(name = "idUser")
    @JsonBackReference("utilisateur-factures")
    private Utilisateur utilisateurFacture;
    @ManyToOne
    @JoinColumn(name="idClient")
    @JsonBackReference("client-factures")
    private Client client;

    @ManyToMany
    @JoinTable(name="facture_produit",
            joinColumns = @JoinColumn(name="idFacture"),
            inverseJoinColumns = @JoinColumn(name="idPdt"))
    @JsonManagedReference("produit-facture")
    private List<Produit> produitsFactures;

    public Facture() {
    }

    public Facture(Date dateFacture, String modePaiment, Float montantFacture, Utilisateur utilisateurFacture, Client client, List<Produit> produitsFactures) {
        this.dateFacture = dateFacture;
        this.modePaiment = modePaiment;
        this.montantFacture = montantFacture;
        this.utilisateurFacture = utilisateurFacture;
        this.client = client;
        this.produitsFactures = produitsFactures;
    }

    public Facture(Long idFacture, Date dateFacture, String modePaiment, Float montantFacture, Utilisateur utilisateurFacture, Client client, List<Produit> produitsFactures) {
        this.idFacture = idFacture;
        this.dateFacture = dateFacture;
        this.modePaiment = modePaiment;
        this.montantFacture = montantFacture;
        this.utilisateurFacture = utilisateurFacture;
        this.client = client;
        this.produitsFactures = produitsFactures;
    }

    public Long getIdFacture() {
        return idFacture;
    }

    public void setIdFacture(Long idFacture) {
        this.idFacture = idFacture;
    }

    public Date getDateFacture() {
        return dateFacture;
    }

    public void setDateFacture(Date dateFacture) {
        this.dateFacture = dateFacture;
    }

    public String getModePaiment() {
        return modePaiment;
    }

    public void setModePaiment(String modePaiment) {
        this.modePaiment = modePaiment;
    }

    public Float getMontantFacture() {
        return montantFacture;
    }

    public void setMontantFacture(Float montantFacture) {
        this.montantFacture = montantFacture;
    }

    public Utilisateur getUtilisateurFacture() {
        return utilisateurFacture;
    }

    public void setUtilisateurFacture(Utilisateur utilisateurFacture) {
        this.utilisateurFacture = utilisateurFacture;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public List<Produit> getProduitsFactures() {
        return produitsFactures;
    }

    public void setProduitsFactures(List<Produit> produitsFactures) {
        this.produitsFactures = produitsFactures;
    }

    @Override
    public String toString() {
        return "Facture{" +
                "idFacture=" + idFacture +
                ", dateFacture=" + dateFacture +
                ", modePaiment='" + modePaiment + '\'' +
                ", montantFacture=" + montantFacture +
                ", utilisateurFacture=" + utilisateurFacture +
                ", client=" + client +
                ", produitsFactures=" + produitsFactures +
                '}';
    }
}