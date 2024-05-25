package com.platform.gestioncommerciale.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table
public class BonAchat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBonAchat;

    @Column
    private Float montantBonAchat;
    @Column
    private Date dateBonAchat;
    @Column
    private String statueBonAchat;

    @ManyToOne
    @JoinColumn(name = "idFourn")
    @JsonBackReference("fournisseur-bonAchat")
    // @JsonBackReference breaks the circular reference by not serializing the back reference
    private Fournisseur fournisseur;

    @ManyToOne
    @JoinColumn(name = "idUser")
    @JsonBackReference("utilisateur-bonAchat")
    private Utilisateur utilisateurBonAchat;


    @ManyToMany
    @JoinTable(name="bonachat_produit",
            joinColumns = @JoinColumn(name="idBonAchat"),
            inverseJoinColumns = @JoinColumn(name="idPdt"))
    @JsonManagedReference("bonAchat-produit")
    private List<Produit> produitsBonAchats;

    public BonAchat() {
    }

    public BonAchat(Float montantBonAchat, Date dateBonAchat, String statueBonAchat, Fournisseur fournisseur, Utilisateur utilisateurBonAchat, List<Produit> produitsBonAchats) {
        this.montantBonAchat = montantBonAchat;
        this.dateBonAchat = dateBonAchat;
        this.statueBonAchat = statueBonAchat;
        this.fournisseur = fournisseur;
        this.utilisateurBonAchat = utilisateurBonAchat;
        this.produitsBonAchats = produitsBonAchats;
    }

    public BonAchat(Long idBonAchat, Float montantBonAchat, Date dateBonAchat, String statueBonAchat, Fournisseur fournisseur, Utilisateur utilisateurBonAchat, List<Produit> produitsBonAchats) {
        this.idBonAchat = idBonAchat;
        this.montantBonAchat = montantBonAchat;
        this.dateBonAchat = dateBonAchat;
        this.statueBonAchat = statueBonAchat;
        this.fournisseur = fournisseur;
        this.utilisateurBonAchat = utilisateurBonAchat;
        this.produitsBonAchats = produitsBonAchats;
    }

    public Long getIdBonAchat() {
        return idBonAchat;
    }

    public void setIdBonAchat(Long idBonAchat) {
        this.idBonAchat = idBonAchat;
    }

    public Float getMontantBonAchat() {
        return montantBonAchat;
    }

    public void setMontantBonAchat(Float montantBonAchat) {
        this.montantBonAchat = montantBonAchat;
    }

    public Date getDateBonAchat() {
        return dateBonAchat;
    }

    public void setDateBonAchat(Date dateBonAchat) {
        this.dateBonAchat = dateBonAchat;
    }

    public String getStatueBonAchat() {
        return statueBonAchat;
    }

    public void setStatueBonAchat(String statueBonAchat) {
        this.statueBonAchat = statueBonAchat;
    }

    public Fournisseur getFournisseur() {
        return fournisseur;
    }

    public void setFournisseur(Fournisseur fournisseur) {
        this.fournisseur = fournisseur;
    }

    public Utilisateur getUtilisateurBonAchat() {
        return utilisateurBonAchat;
    }

    public void setUtilisateurBonAchat(Utilisateur utilisateurBonAchat) {
        this.utilisateurBonAchat = utilisateurBonAchat;
    }

    public List<Produit> getProduitsBonAchats() {
        return produitsBonAchats;
    }

    public void setProduitsBonAchats(List<Produit> produitsBonAchats) {
        this.produitsBonAchats = produitsBonAchats;
    }

    @Override
    public String toString() {
        return "BonAchat{" +
                "idBonAchat=" + idBonAchat +
                ", montantBonAchat=" + montantBonAchat +
                ", dateBonAchat=" + dateBonAchat +
                ", statueBonAchat='" + statueBonAchat + '\'' +
                ", fournisseur=" + fournisseur +
                ", utilisateurBonAchat=" + utilisateurBonAchat +
                ", produitsBonAchats=" + produitsBonAchats +
                '}';
    }
}