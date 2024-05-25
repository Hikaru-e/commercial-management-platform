package com.platform.gestioncommerciale.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPdt;
    @Column
    private String categoriePdt;

    @Column
    private String namePdt;

    @Column
    private String description;

    @Column
    private Float prixPdt;

    @Column
    private Integer nvStockPdt;

    @Column
    private String imagePath;

    @Column
    private Long bareCode;

    @ManyToMany(mappedBy="produitsFactures")
    @JsonBackReference("produit-facture")
    private List<Facture> factures;

    @ManyToMany(mappedBy = "produitsBonAchats")
    @JsonBackReference("bonAchat-produits")
    private List<BonAchat> bonAchats;

    public Produit() {
    }

    public Produit(Long idPdt, String categoriePdt, String namePdt, String description, Float prixPdt, Integer nvStockPdt,
                   String imagePath, Long bareCode,
                   List<Facture> factures, List<BonAchat> bonAchats) {
        this.idPdt = idPdt;
        this.categoriePdt = categoriePdt;
        this.namePdt = namePdt;
        this.description = description;
        this.prixPdt = prixPdt;
        this.nvStockPdt = nvStockPdt;
        this.imagePath = imagePath;
        this.bareCode = bareCode;
        this.factures = factures;
        this.bonAchats = bonAchats;
    }
    public Produit(String categoriePdt, String namePdt, String description, Float prixPdt, Integer nvStockPdt,
                   String imagePath, Long bareCode,
                   List<Facture> factures, List<BonAchat> bonAchats) {
        this.categoriePdt = categoriePdt;
        this.namePdt = namePdt;
        this.description = description;
        this.prixPdt = prixPdt;
        this.nvStockPdt = nvStockPdt;
        this.imagePath = imagePath;
        this.bareCode = bareCode;
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

    public String getNamePdt() {
        return namePdt;
    }

    public void setNamePdt(String namePdt) {
        this.namePdt = namePdt;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public Long getBareCode() {
        return bareCode;
    }

    public void setBareCode(Long bareCode) {
        this.bareCode = bareCode;
    }

    @Override
    public String toString() {
        return "Produit{" +
                "idPdt=" + idPdt +
                ", categoriePdt='" + categoriePdt + '\'' +
                ", namePdt='" + namePdt + '\'' +
                ", description='" + description + '\'' +
                ", prixPdt=" + prixPdt +
                ", nvStockPdt=" + nvStockPdt +
                ", imagePath='" + imagePath + '\'' +
                ", bareCode=" + bareCode +
                ", factures=" + factures +
                ", bonAchats=" + bonAchats +
                '}';
    }
}