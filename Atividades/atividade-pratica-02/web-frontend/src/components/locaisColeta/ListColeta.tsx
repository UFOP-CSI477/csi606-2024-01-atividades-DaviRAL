import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { CidadeInterface } from "../cidades/ListCidades";

export interface ColetaInterface {
    id: number;
    nome : string;
    rua: string;
    complemento: string;
    cidade_id: number;
    created_at: string;
    updated_at: string;
    cidade: CidadeInterface;
}

const ListColeta = () => {
    const [coletas, setColetas] = useState<ColetaInterface[]>([]);
    const [cityMap, setCityMap] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        api.get("/locals").then((response) => {
            setColetas(response.data);
        });
    }, []);

    const fetchCityById = async (cidade_id: number) => {
        if (!cityMap[cidade_id]) {
            try {
                const response = await api.get(`/cities/${cidade_id}`);
                setCityMap((prevCityMap) => ({
                    ...prevCityMap,
                    [cidade_id]: response.data.nome,
                }));
            } catch (error) {
                console.error("Erro ao buscar cidade:", error);
            }
        }
    };

    useEffect(() => {
        coletas.forEach((coleta) => {
            fetchCityById(coleta.cidade_id);
        });
    }, [coletas]);

    const handleDeleteColeta = async (id: number) => {
        if (!window.confirm("Deseja realmente excluir esta coleta?")) {
            return;
        }
        try {
            await api.delete("/locals", {
                data: { id },
            });
            alert("Coleta excluída com sucesso!");

            setColetas(coletas.filter((coleta) => coleta.id !== id));
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir coleta!");
        }
    };

    return (
        <div>
            <h3>Lista de Coletas</h3>
            <div>
                <Link to="/locals/criar">Cadastrar Coleta</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Rua</th>
                        <th>Complemento</th>
                        <th>Cidade</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {coletas.map((coleta) => (
                        <tr key={coleta.id}>
                            <td>{coleta.id}</td>
                            <td>{coleta.nome}</td>
                            <td>{coleta.rua}</td>
                            <td>{coleta.complemento}</td>
                            <td>{cityMap[coleta.cidade_id] || "Carregando..."}</td>
                            <td>{coleta.created_at}</td>
                            <td>{coleta.updated_at}</td>
                            <td>
                                <Link to={`/locals/update/${coleta.id}`}>Editar</Link>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteColeta(coleta.id)}>
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

export default ListColeta;