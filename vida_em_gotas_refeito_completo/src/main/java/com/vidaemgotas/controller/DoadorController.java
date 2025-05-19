package com.vidaemgotas.controller;

import com.vidaemgotas.model.Doador;
import com.vidaemgotas.repository.DoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doadores/cadastro")
@CrossOrigin(origins = "*")
public class DoadorController {

    @Autowired
    private DoadorRepository doadorRepository;

    @PostMapping("/cadastro")
    public Doador cadastrar(@RequestBody Doador doador) {
        return doadorRepository.save(doador);
    }

    @GetMapping
    public List<Doador> listarTodos() {
        return doadorRepository.findAll();
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Doador loginData) {
        Doador doador = doadorRepository.findByEmail(loginData.getEmail());
        return doador != null && doador.getSenha().equals(loginData.getSenha());
    }
}
