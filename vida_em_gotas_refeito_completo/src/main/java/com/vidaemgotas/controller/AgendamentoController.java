package com.vidaemgotas.controller;

import com.vidaemgotas.model.Agendamento;
import com.vidaemgotas.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agendamentos")
@CrossOrigin(origins = "*")
public class AgendamentoController {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @PostMapping
    public Agendamento agendar(@RequestBody Agendamento agendamento) {
        return agendamentoRepository.save(agendamento);
    }

    @GetMapping
    public List<Agendamento> listar() {
        return agendamentoRepository.findAll();
    }
}