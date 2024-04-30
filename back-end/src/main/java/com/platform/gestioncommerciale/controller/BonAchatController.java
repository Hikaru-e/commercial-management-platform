package com.platform.gestioncommerciale.controller;

import com.platform.gestioncommerciale.service.BonAchatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bonAchats")
public class BonAchatController {
    @Autowired
    private BonAchatService bonAchatService;


}
