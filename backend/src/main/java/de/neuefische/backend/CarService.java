package de.neuefische.backend;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CarService {

    private final CarRepo carRepo;

    public CarService(CarRepo carRepo) {
        this.carRepo = carRepo;
    }

    public Car saveCar(CarDTO car) {
        Car newCar = new Car(UUID.randomUUID().toString(), car.getBrand(), car.getModel());
        return carRepo.save(newCar);
    }

    public List<Car> findAllCars() {
        return carRepo.findAll();
    }
}
