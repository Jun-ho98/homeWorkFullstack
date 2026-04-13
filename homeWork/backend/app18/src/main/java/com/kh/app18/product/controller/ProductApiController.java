package com.kh.app18.product.controller;

import com.kh.app18.product.dto.request.ProductRequestDto;
import com.kh.app18.product.dto.response.ProductResponseDto;
import com.kh.app18.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
public class ProductApiController {

    private final ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponseDto> save(@RequestBody ProductRequestDto requestDto) {
        ProductResponseDto responseDto = productService.save(requestDto);
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    @GetMapping
    public ResponseEntity<List<ProductResponseDto>> findAll() {
        List<ProductResponseDto> voList = productService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(voList);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductResponseDto> findById(@PathVariable Long id) {
        ProductResponseDto responseDto = productService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id) {
        productService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("{id}")
    public ResponseEntity<ProductResponseDto> updateNameAndPriceById(
            @PathVariable Long id,
            @RequestBody ProductRequestDto requestDto) {
        ProductResponseDto responseDto = productService.updateNameAndPriceById(id, requestDto);
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

}//class
