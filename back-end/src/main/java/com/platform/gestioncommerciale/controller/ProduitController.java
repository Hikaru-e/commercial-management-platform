package com.platform.gestioncommerciale.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.platform.gestioncommerciale.model.Produit;
import com.platform.gestioncommerciale.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static javax.print.attribute.standard.MediaSizeName.D;

@RestController
@RequestMapping("/produits")
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @GetMapping("/all")
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @GetMapping("/search/{id}")
    public Optional<Produit> getProduitById(@PathVariable Long id) {
        return produitService.getProduitById(id);
    }

    @GetMapping("/search_name/{namePdt}")
    public Optional<Produit> findProduitByName(@PathVariable String namePdt) {
        return produitService.findProduitByName(namePdt);
    }

    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Produit addProduit(@RequestParam("file") MultipartFile file, @ModelAttribute Produit product) {
        try {
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            Path targetLocation = Paths.get("C:/Users/MSI/uploads"+ fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            product.setImagePath(fileName);
            Produit savedProduct = produitService.addOrUpdateProduit(product);
            return savedProduct;
        } catch (IOException ex) {
            // Handle file upload error
            ex.printStackTrace(); // Log the exception for debugging
            // Return an appropriate response to the client
            // For example, you can return a ResponseEntity with an error message
            return null;
        }}


    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file, @RequestParam("product") String productJson) {
        try {
            // Ensure the directory exists
            Path directory = Paths.get("D:/projet_dev/projet_dev/commercial-management-platform/front-end/my-app/src/assets/images");
            if (!Files.exists(directory)) {
                Files.createDirectories(directory);
            }

            // Generate a unique file name
            String fileName = file.getOriginalFilename();

            // Copy the file to the target location
            Path targetLocation = directory.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation);

            // Parse product JSON
            ObjectMapper objectMapper = new ObjectMapper();
            Produit product = objectMapper.readValue(productJson, Produit.class);

            // Update product imagePath
            product.setImagePath("assets/images/" + fileName);

            // Save the product to database or perform other operations
            // productService.saveProduct(product);

            // Return success response
            return ResponseEntity.ok("File uploaded successfully: " + fileName);
        } catch (IOException ex) {
            // Handle file upload error
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading file: " + ex.getMessage());
        }
    }




    @PutMapping("/modify/{id}")
    public Produit updateProduit(@PathVariable Long id, @RequestBody Produit produit){
        produit.setIdPdt(id);
        return produitService.addOrUpdateProduit(produit);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduit(@PathVariable Long id){
        produitService.deleteProduit(id);
    }

    @GetMapping("/en_stock")
    public List<Produit> getProduitsEnStock() {
        return produitService.getProduitsEnStock();
    }

    @GetMapping("/hors_stock")
    public List<Produit> getProduitsHorsStock() {
        return produitService.getProduitsHorsStock();
    }


}
