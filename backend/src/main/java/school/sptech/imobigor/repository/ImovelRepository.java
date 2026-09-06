package school.sptech.imobigor.repository;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import school.sptech.imobigor.model.Imovel;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class ImovelRepository {
    private final JdbcTemplate template;

    public ImovelRepository(JdbcTemplate template) {
        this.template = template;
    }

    public List<Imovel> listarTodosImoveis() {
        String sql = "SELECT * FROM imoveis;";
        List<Imovel> imoveis = template.query(sql, new BeanPropertyRowMapper<>(Imovel.class));
        return imoveis;
    }

    public Imovel buscarImovel(int id) {
        String sql = "SELECT * FROM imoveis WHERE id = ?";
        Imovel imovel = template.queryForObject(sql, new BeanPropertyRowMapper<>(Imovel.class), id);
        return imovel;
    }

    public boolean validarId(int id) {
        String sql = "SELECT COUNT(*) FROM imoveis WHERE id = ?";
        Integer quantidade = template.queryForObject(sql, Integer.class, id);
        return quantidade != null && quantidade > 0;
    }

    public Imovel cadastrarImovel(Imovel imovel) {
        String sql = """
                INSERT into imoveis (
                titulo,
                tipo,
                endereco,
                cidade,
                uf,
                preco,
                quartos,
                banheiros,
                area,
                descricao,
                imagem
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, imovel.getTitulo());
            statement.setString(2, imovel.getTipo());
            statement.setString(3, imovel.getEndereco());
            statement.setString(4, imovel.getCidade());
            statement.setString(5, imovel.getUf());
            statement.setDouble(6, imovel.getPreco());
            statement.setDouble(7, imovel.getQuartos());
            statement.setDouble(8, imovel.getBanheiros());
            statement.setDouble(9, imovel.getArea());
            statement.setString(10, imovel.getDescricao());
            statement.setString(11, imovel.getImagem().toLowerCase());
            return statement;
        }, keyHolder);

        int id = keyHolder.getKey().intValue();

        imovel.setId(id);

        return imovel;
    }

    public void excluirImovel(int id) {
        String sql = """
                DELETE FROM imoveis WHERE id = ?;
        """;
        template.update(sql, id);
    }

}
