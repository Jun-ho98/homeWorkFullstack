package com.kh.app18.product.dto.request;

import com.kh.app18.product.entity.ProductEntity;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class ProductRequestDto {

    private String name;
    private Integer price;

    public ProductEntity toEntity() {
        return ProductEntity.builder()
                .name(name)
                .price(price)
                .build();
    }

}
