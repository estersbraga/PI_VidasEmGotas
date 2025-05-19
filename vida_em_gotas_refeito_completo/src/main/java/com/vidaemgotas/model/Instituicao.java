package com.vidaemgotas.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Instituicao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String senha;
    private String endereco;
}