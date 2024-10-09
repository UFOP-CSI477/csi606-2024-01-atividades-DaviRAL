import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { CidadeInterface } from "../cidades/ListCidades";

export interface DoacaoInterface {
    id: number;
    pessoa_id: number;
    local_id: number;
    data: string;
    created_at: string;
    updated_at: string;
    cidade: CidadeInterface;

}

const ListDoacoes = () => {
    const [doacoes, setDoacoes] = useState<DoacaoInterface[]>([]);

    useEffect(() => {
        api.get("/donations").then((response) => {
            setDoacoes(response.data);
        });
    }, []);

    const handleDeleteDoacao = async (id: number) => {
        if (!window.confirm("Deseja realmente excluir esta doação?")) {
            return;
        }
        try {
            await api.delete("/donations", {
                data: { id },
            });
            alert("Doação excluída com sucesso!");

            setDoacoes(doacoes.filter((doacao) => doacao.id !== id));
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir doação!");
        }
    };

    return (
        <div>
            <h3>Lista de Doações</h3>
            <div>
                <Link to="/donations/criar">Cadastrar Doação</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Pessoa Id</th>
                        <th>Local Id</th>
                        <th>Data</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {doacoes.map((doacao) => (
                        <tr key={doacao.id}>
                            <td>{doacao.id}</td>
                            <td>{doacao.pessoa_id}</td>
                            <td>{doacao.local_id}</td>
                            <td>{doacao.data}</td>
                            <td>{doacao.created_at}</td>
                            <td>{doacao.updated_at}</td>
                            <td>
                                <Link to={`/donations/update/${doacao.id}`}>Editar</Link>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteDoacao(doacao.id)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListDoacoes;