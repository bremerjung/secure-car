package de.neuefische.backend.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@With
@Builder
@Document("Cars")
@AllArgsConstructor
@NoArgsConstructor
public class Car {
        @Id
      private String id;
      private String brand;
      private String model;

}
