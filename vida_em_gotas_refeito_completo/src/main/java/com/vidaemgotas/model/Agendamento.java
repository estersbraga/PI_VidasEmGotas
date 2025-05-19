package com.vidaemgotas.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Doador doador;

    @ManyToOne
    private Instituicao instituicao;

    private LocalDateTime dataHora;
}