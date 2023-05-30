package de.neuefische.backend.service;

import de.neuefische.backend.model.MongoUser;
import de.neuefische.backend.repo.MongoUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MongoUserDetailsService implements UserDetailsService {

    private final MongoUserRepo repo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser mongoUser = repo.findMongoUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with username:" + username + " not found"));
        return new User(mongoUser.getUsername(), mongoUser.getPassword(), List.of());
    }
}
