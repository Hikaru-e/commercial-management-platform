package com.platform.gestioncommerciale.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_pdt;
    @Column
    private String categorie_pdt;
    @Column
    private Float prix_pdt;
    @Column
    private Integer nv_stock_pdt;

    @ManyToMany(mappedBy="produits")
    private List<Facture> factures;

    @ManyToMany
    @JoinTable(name="Facture_BonAchat")
    private List<BonAchat> bonAchats;

    public Produit() {
    }

    public Produit(Long id_pdt, String categorie_pdt, Float prix_pdt, Integer nv_stock_pdt) {
        this.id_pdt = id_pdt;
        this.categorie_pdt = categorie_pdt;
        this.prix_pdt = prix_pdt;
        this.nv_stock_pdt = nv_stock_pdt;
    }

    public Produit(String categorie_pdt, Float prix_pdt, Integer nv_stock_pdt) {
        this.categorie_pdt = categorie_pdt;
        this.prix_pdt = prix_pdt;
        this.nv_stock_pdt = nv_stock_pdt;
    }

    public Long getId_pdt() {
        return id_pdt;
    }

    public void setId_pdt(Long id_pdt) {
        this.id_pdt = id_pdt;
    }

    public String getCategorie_pdt() {
        return categorie_pdt;
    }

    public void setCategorie_pdt(String categorie_pdt) {
        this.categorie_pdt = categorie_pdt;
    }

    public Float getPrix_pdt() {
        return prix_pdt;
    }

    public void setPrix_pdt(Float prix_pdt) {
        this.prix_pdt = prix_pdt;
    }

    public Integer getNv_stock_pdt() {
        return nv_stock_pdt;
    }

    public void setNv_stock_pdt(Integer nv_stock_pdt) {
        this.nv_stock_pdt = nv_stock_pdt;
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
                "id_pdt=" + id_pdt +
                ", categorie_pdt='" + categorie_pdt + '\'' +
                ", prix_pdt=" + prix_pdt +
                ", nv_stock_pdt=" + nv_stock_pdt +
                '}';
    }
}
