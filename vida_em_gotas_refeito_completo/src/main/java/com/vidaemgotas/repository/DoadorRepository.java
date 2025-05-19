package com.vidaemgotas.repository;

import com.vidaemgotas.model.Doador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoadorRepository extends JpaRepository<Doador, Long> {
    Doador findByEmail(String email);
}