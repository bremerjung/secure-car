package de.neuefische.backend.repo;

import de.neuefische.backend.model.MongoUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MongoUserRepo extends MongoRepository<MongoUser, String> {

    public Optional<MongoUser> findMongoUserByUsername (String username);
}
