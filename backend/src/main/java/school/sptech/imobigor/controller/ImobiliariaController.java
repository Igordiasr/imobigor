package school.sptech.imobigor.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;
import school.sptech.imobigor.model.Imovel;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@RequestMapping("/imoveis")
@CrossOrigin(origins = "http://localhost:5173")
public class ImobiliariaController {
    private final JdbcTemplate template;

    public ImobiliariaController(JdbcTemplate template) {
        this.template = template;
    }

    @GetMapping
    public ResponseEntity<List<Imovel>> listarImoveis() {
        String sql = "SELECT * FROM imoveis";
        List<Imovel> imoveis = template.query(sql, new BeanPropertyRowMapper<>(Imovel.class));
        if (imoveis.isEmpty()) { return ResponseEntity.status(204).build(); }
        return ResponseEntity.status(200).body(imoveis);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Imovel> buscarImovelPorId(@PathVariable int id) {
        String sql = "SELECT * FROM imoveis WHERE id = ?";
        Imovel imovel = template.queryForObject(sql, new BeanPropertyRowMapper<>(Imovel.class), id);
        if (imovel == null) { return ResponseEntity.status(404).build(); }
        return ResponseEntity.status(200).body(imovel);
    }

    @PostMapping
    public ResponseEntity<Imovel> cadastrarImovel(@RequestBody Imovel imovel) {
        String sql = """
                INSERT into imoveis (
                titulo,
                tipo,
                cidade,
                preco,
                quartos,
                banheiros,
                area,
                descricao
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """;
        if (
                imovel.getTitulo() == null ||
                imovel.getTitulo().isEmpty() ||
                imovel.getTipo() == null ||
                imovel.getTipo().isEmpty() ||
                imovel.getCidade() == null ||
                imovel.getCidade().isEmpty() ||
                imovel.getPreco() <= 0 ||
                imovel.getQuartos() < 0  ||
                imovel.getBanheiros() < 0  ||
                imovel.getArea() <= 0   ||
                imovel.getDescricao() == null  ||
                imovel.getDescricao().isEmpty()
        ) {
            return ResponseEntity.status(422).build();
        }
        KeyHolder keyHolder = new GeneratedKeyHolder();
        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, imovel.getTitulo());
            statement.setString(2, imovel.getTipo());
            statement.setString(3, imovel.getCidade());
            statement.setDouble(4, imovel.getPreco());
            statement.setDouble(5, imovel.getQuartos());
            statement.setDouble(6, imovel.getBanheiros());
            statement.setDouble(7, imovel.getArea());
            statement.setString(8, imovel.getDescricao());
            return statement;
        }, keyHolder);
        int id = keyHolder.getKey().intValue();
        imovel.setId(id);
        return ResponseEntity.status(200).body(imovel);
    }
}
