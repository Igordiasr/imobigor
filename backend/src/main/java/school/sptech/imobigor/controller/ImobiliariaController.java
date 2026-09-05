package school.sptech.imobigor.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.imobigor.model.Imovel;
import school.sptech.imobigor.service.ImovelService;

import java.util.List;

@RestController
@RequestMapping("/imoveis")
@CrossOrigin(origins = "http://localhost:5173")
public class ImobiliariaController {
    private final ImovelService imovelService;

    public ImobiliariaController(ImovelService imovelService) {
        this.imovelService = imovelService;
    }

    @GetMapping
    public ResponseEntity<List<Imovel>> listarImoveis() {
        List<Imovel> imoveis = imovelService.listarImoveis();
        if (imoveis.isEmpty()) { return ResponseEntity.status(204).build(); }
        return ResponseEntity.status(200).body(imoveis);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Imovel> buscarImovel(@PathVariable int id) {
        try {
            Imovel imovel = imovelService.buscarImovelPorId(id);
            return ResponseEntity.status(200).body(imovel);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping
    public ResponseEntity<Imovel> cadastrarImovel(@RequestBody Imovel imovel) {
        try {
            Imovel novoImovel = imovelService.cadastrarImovel(imovel);
            return ResponseEntity.status(201).body(novoImovel);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirImovel(@PathVariable int id) {
        try {
            imovelService.excluirImovel(id);
            return ResponseEntity.status(204).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(404).build();
        }
    }
}
