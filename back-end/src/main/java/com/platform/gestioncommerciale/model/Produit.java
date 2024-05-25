package com.platform.gestioncommerciale.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table
public class Produit implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPdt;
    @Column
    private String categoriePdt;
    @Column
    private Float prixPdt;
    @Column
    private Integer nvStockPdt;

    @ManyToMany(mappedBy="produitsFactures")
    @JsonBackReference(value = "facture-produits")
    private List<Facture> factures;

    @ManyToMany(mappedBy = "produitsBonAchats")
    @JsonBackReference(value = "bonAchat-produits")
    private List<BonAchat> bonAchats;

    public Produit() {
    }

    public Produit(String categoriePdt, Float prixPdt, Integer nvStockPdt, List<Facture> factures, List<BonAchat> bonAchats) {
        this.categoriePdt = categoriePdt;
        this.prixPdt = prixPdt;
        this.nvStockPdt = nvStockPdt;
        this.factures = factures;
        this.bonAchats = bonAchats;
    }

    public Produit(Long idPdt, String categoriePdt, Float prixPdt, Integer nvStockPdt, List<Facture> factures, List<BonAchat> bonAchats) {
        this.idPdt = idPdt;
        this.categoriePdt = categoriePdt;
        this.prixPdt = prixPdt;
        this.nvStockPdt = nvStockPdt;
        this.factures = factures;
        this.bonAchats = bonAchats;
    }

    public Long getIdPdt() {
        return idPdt;
    }

    public void setIdPdt(Long idPdt) {
        this.idPdt = idPdt;
    }

    public String getCategoriePdt() {
        return categoriePdt;
    }

    public void setCategoriePdt(String categoriePdt) {
        this.categoriePdt = categoriePdt;
    }

    public Float getPrixPdt() {
        return prixPdt;
    }

    public void setPrixPdt(Float prixPdt) {
        this.prixPdt = prixPdt;
    }

    public Integer getNvStockPdt() {
        return nvStockPdt;
    }

    public void setNvStockPdt(Integer nvStockPdt) {
        this.nvStockPdt = nvStockPdt;
    }

    public List<Facture> getFactures() {
        return factures;
    }

    public void setFactures(List<Facture> factures) {
        this.factures = factures;
    }

    public List<BonAchat> getBonAchats() {
        return bonAchats;
    }

    public void setBonAchats(List<BonAchat> bonAchats) {
        this.bonAchats = bonAchats;
    }

    @Override
    public String toString() {
        return "Produit{" +
                "idPdt=" + idPdt +
                ", categoriePdt='" + categoriePdt + '\'' +
                ", prixPdt=" + prixPdt +
                ", nvStockPdt=" + nvStockPdt +
                ", factures=" + factures +
                ", bonAchats=" + bonAchats +
                '}';
    }
}
