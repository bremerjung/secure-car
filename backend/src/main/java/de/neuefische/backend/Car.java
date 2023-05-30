package de.neuefische.backend;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.With;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@With
@Document("Cars")
@AllArgsConstructor
@NoArgsConstructor
public class Car {
        @Id
      private String id;
      private String brand;
      private String model;

}
