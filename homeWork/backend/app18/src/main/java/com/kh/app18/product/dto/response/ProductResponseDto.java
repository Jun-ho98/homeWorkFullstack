package com.kh.app18.product.dto.response;

import com.kh.app18.product.entity.ProductEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@ToString
@Getter
@Builder
public class ProductResponseDto {

    private Long id;
    private String name;
    private Integer price;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public static ProductResponseDto from(ProductEntity entity) {
        return ProductResponseDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .price(entity.getPrice())
                .createdAt(entity.getCreatedAt())
                .modifiedAt(entity.getModifiedAt())
                .build();
    }
}
