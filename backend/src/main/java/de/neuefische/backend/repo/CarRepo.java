package de.neuefische.backend.repo;

import de.neuefische.backend.model.Car;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepo extends MongoRepository<Car, String> {
}
