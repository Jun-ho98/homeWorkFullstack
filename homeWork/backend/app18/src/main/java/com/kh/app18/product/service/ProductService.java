package com.kh.app18.product.service;

import com.kh.app18.product.dto.request.ProductRequestDto;
import com.kh.app18.product.dto.response.ProductResponseDto;
import com.kh.app18.product.entity.ProductEntity;
import com.kh.app18.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;

    @Transactional
    public ProductResponseDto save(ProductRequestDto requestDto) {
        ProductEntity entity = requestDto.toEntity();
        productRepository.save(entity);
        return ProductResponseDto.from(entity);
    }

    public List<ProductResponseDto> findAll() {
        return productRepository.findAll()
                .stream().map(ProductResponseDto::from)
                .toList();
    }

    public ProductResponseDto findById(Long id) {
        return ProductResponseDto.from(productRepository.findById(id));
    }

    @Transactional
    public void deleteById(Long id) {
        ProductEntity entity = productRepository.findById(id);
        entity.delete();
    }

    @Transactional
    public ProductResponseDto updateNameAndPriceById(Long id, ProductRequestDto requestDto) {
        ProductEntity entity = productRepository.findById(id);
        entity.change(requestDto.getName(), requestDto.getPrice());
        return ProductResponseDto.from(entity);
    }

}//class
