package com.kh.app18.product.repository;

import com.kh.app18.product.entity.ProductEntity;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ProductRepository {

    private final EntityManager em;

    public void save(ProductEntity entity) {
        em.persist(entity);
    }

    public List<ProductEntity> findAll() {
        String jpql = """
            select p from ProductEntity p where p.delYn = 'N' order by p.id desc
        """;
        return em.createQuery(jpql, ProductEntity.class).getResultList();
    }

    public ProductEntity findById(Long id) {
        String jpql = """
            select p from ProductEntity p where p.id = :id and p.delYn = 'N'
        """;
        return em.createQuery(jpql, ProductEntity.class)
                .setParameter("id", id)
                .getSingleResult();
    }

}//class
