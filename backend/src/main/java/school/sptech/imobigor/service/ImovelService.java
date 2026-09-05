package school.sptech.imobigor.service;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.imobigor.model.Imovel;
import school.sptech.imobigor.repository.ImovelRepository;

import java.util.List;

@Service
public class ImovelService {
    private final ImovelRepository imovelRepository;

    public ImovelService(ImovelRepository imovelRepository) {
        this.imovelRepository = imovelRepository;
    }

    public List<Imovel> listarImoveis() {
        return imovelRepository.listarTodosImoveis();
    }

    public Imovel buscarImovelPorId(int id) {
        try {
            return imovelRepository.buscarImovel(id);
        } catch (EmptyResultDataAccessException e) {
            throw new IllegalArgumentException("Não foi encontrado um Imovel com o id " + id);
        }
    }

    public Imovel cadastrarImovel(Imovel imovel) {
        if (imovel.getTitulo() == null || imovel.getTitulo().isEmpty()) {
            throw new IllegalArgumentException("O título do imóvel é obrigatório");
        }

        if (imovel.getTipo() == null || imovel.getTipo().isEmpty()) {
            throw new IllegalArgumentException("O tipo do imóvel é obrigatório");
        }

        if (imovel.getCidade() == null || imovel.getCidade().isEmpty()) {
            throw new IllegalArgumentException("A cidade da localização do imóvel é obrigatória");
        }

        if (imovel.getPreco() <= 0) {
            throw new IllegalArgumentException("O preço do imóvel é obrigatório");
        }

        if (imovel.getQuartos() < 0) {
            throw new IllegalArgumentException("A quantidade de quartos não pode ser negativa");
        }

        if (imovel.getBanheiros() < 0) {
            throw new IllegalArgumentException("A quantidade de banheiros não pode ser negativa");
        }

        if (imovel.getArea() <= 0) {
            throw new IllegalArgumentException("A área do imóvel não pode ser 0 ou negativa");
        }

        if (imovel.getDescricao() == null  || imovel.getDescricao().isEmpty()) {
            throw new IllegalArgumentException("A descrição do imóvel é obrigatória");
        }

        return imovelRepository.cadastrarImovel(imovel);
    }

    public void excluirImovel(int id) {
        boolean idValido = imovelRepository.validarId(id);
        if (!idValido) {
            throw new IllegalArgumentException("Imóvel não encontrado");
        }
        imovelRepository.excluirImovel(id);
    }
}
