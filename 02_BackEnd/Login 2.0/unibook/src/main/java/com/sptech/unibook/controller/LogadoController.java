package com.sptech.unibook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LogadoController {

    @RequestMapping("/logado")
    public String logado(){
        return "logado";
    }

}
