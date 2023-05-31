package de.neuefische.backend.controller;

import de.neuefische.backend.service.MongoUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final MongoUserDetailsService service;

    @GetMapping("/me")
    public String getMeControllerOnly(Principal principal) {
        if (principal != null) {
            return principal.getName();
        }
        return "Du bist nicht eingeloggt!";
    }

    @GetMapping("/me2")
    public String getMeFromEverywhere(){
        System.out.println(SecurityContextHolder.getContext());
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @PostMapping("/login")
    String login() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
