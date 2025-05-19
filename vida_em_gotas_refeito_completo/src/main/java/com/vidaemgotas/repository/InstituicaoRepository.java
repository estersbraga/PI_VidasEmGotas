package com.vidaemgotas.repository;

import com.vidaemgotas.model.Instituicao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstituicaoRepository extends JpaRepository<Instituicao, Long> {
    Instituicao findByEmail(String email);
}