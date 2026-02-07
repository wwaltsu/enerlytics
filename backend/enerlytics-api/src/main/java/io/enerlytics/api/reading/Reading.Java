package io.enerlytics.api.reading;

import jakarta.persistence.*;
import lombok.*;
import java.time.Instant;

@Entity
@Table(name = "readings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reading {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long siteId; // myöhemmin voidaan tehdä @ManyToOne

    private Instant timestamp;

    private double powerKw;
}