package com.kh.app18.product.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "PRODUCT")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_seq_gen")
    @SequenceGenerator(name = "product_seq_gen", sequenceName = "SEQ_PRODUCT", allocationSize = 1)
    private Long id;

    @Column(length = 80, nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer price;

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime modifiedAt;

    @Column(length = 1, nullable = false)
    @Builder.Default
    private String delYn = "N";

    public void delete() {
        delYn = "Y";
        modifiedAt = LocalDateTime.now();
    }

    public void change(String name, Integer price) {
        this.name = name;
        this.price = price;
        modifiedAt = LocalDateTime.now();
    }

}//class
