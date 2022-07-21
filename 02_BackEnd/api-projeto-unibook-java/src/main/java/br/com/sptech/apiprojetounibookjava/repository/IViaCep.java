package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.dtos.input.EnderecoDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(value = "viacep", url = "https://viacep.com.br/ws/")
public interface IViaCep {

    // https://viacep.com.br/ws/04301000/json/
    @GetMapping("{cep}/json")
    EnderecoDto getCep(@PathVariable String cep);

}
