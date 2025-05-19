package com.vidaemgotas.controller;

import com.vidaemgotas.model.Instituicao;
import com.vidaemgotas.repository.InstituicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/instituicoes")
@CrossOrigin(origins = "*")
public class InstituicaoController {

    @Autowired
    private InstituicaoRepository instituicaoRepository;

    @PostMapping("/cadastro")
    public Instituicao cadastrar(@RequestBody Instituicao instituicao) {
        return instituicaoRepository.save(instituicao);
    }

    @GetMapping
    public List<Instituicao> listarTodas() {
        return instituicaoRepository.findAll();
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Instituicao loginData) {
        Instituicao inst = instituicaoRepository.findByEmail(loginData.getEmail());
        return inst != null && inst.getSenha().equals(loginData.getSenha());
    }
}