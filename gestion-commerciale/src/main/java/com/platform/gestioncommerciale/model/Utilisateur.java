package com.platform.gestioncommerciale.model;

import jakarta.persistence.*;

@Entity
@Table
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_user;
    @Column
    private String nom_user;
    @Column
    private String prenom_user;
    @Column
    private String email_user;
    @Column
    private String password_user;

    // maybe needs to be changed to an enum
    @Column
    private String role_user;

    public Utilisateur() {
    }

    public Utilisateur(Long id_user, String nom_user, String prenom_user, String email_user, String password_user, String role_user) {
        this.id_user = id_user;
        this.nom_user = nom_user;
        this.prenom_user = prenom_user;
        this.email_user = email_user;
        this.password_user = password_user;
        this.role_user = role_user;
    }

    public Utilisateur(String nom_user, String prenom_user, String email_user, String password_user, String role_user) {
        this.nom_user = nom_user;
        this.prenom_user = prenom_user;
        this.email_user = email_user;
        this.password_user = password_user;
        this.role_user = role_user;
    }



    public Long getId_user() {
        return id_user;
    }

    public void setId_user(Long id_user) {
        this.id_user = id_user;
    }

    public String getNom_user() {
        return nom_user;
    }

    public void setNom_user(String nom_user) {
        this.nom_user = nom_user;
    }

    public String getPrenom_user() {
        return prenom_user;
    }

    public void setPrenom_user(String prenom_user) {
        this.prenom_user = prenom_user;
    }

    public String getEmail_user() {
        return email_user;
    }

    public void setEmail_user(String email_user) {
        this.email_user = email_user;
    }

    public String getPassword_user() {
        return password_user;
    }

    public void setPassword_user(String password_user) {
        this.password_user = password_user;
    }

    public String getRole_user() {
        return role_user;
    }

    public void setRole_user(String role_user) {
        this.role_user = role_user;
    }

    @Override
    public String toString() {
        return "User{" +
                "id_user=" + id_user +
                ", nom_user='" + nom_user + '\'' +
                ", prenom_user='" + prenom_user + '\'' +
                ", email_user='" + email_user + '\'' +
                ", password_user='" + password_user + '\'' +
                ", role_user='" + role_user + '\'' +
                '}';
    }
}
