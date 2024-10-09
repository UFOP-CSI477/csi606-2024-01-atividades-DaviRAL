import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { PessoasInterface } from "../pessoas/ListPessoas";

export interface TypeInterface {
    id: number;
    tipo: string;
    fator: string;
    created_at: string;
    updated_at: string;
    pessoas: PessoasInterface;
}

const ListTypes = () => {
    const [types, setTypes] = useState<TypeInterface[]>([]);

    useEffect(() => {
        api.get("/bloodtype").then((response) => {
            setTypes(response.data);
        }).catch((error) => {
            console.error("Erro ao buscar tipos:", error);
        });
    }, []);

    const handleDeleteType = async (id: number) => {
        if (!window.confirm("Deseja realmente excluir este tipo?")) {
            return;
        }
        try {
            await api.delete("/bloodtype", {
                data: { id },
            });
            alert("Tipo excluído com sucesso!");

            setTypes(types.filter((type) => type.id !== id));
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir tipo!");
        }
    };

    return (
        <div>
            <h3>Lista de Tipos</h3>
            <div>
                <Link to="/bloodtype/criar">Cadastrar Tipo</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Fator</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {types.map((type) => (
                        <tr key={type.id}>
                            <td>{type.id}</td>
                            <td>{type.tipo}</td>
                            <td>{type.fator}</td>
                            <td>{type.created_at}</td>
                            <td>{type.updated_at}</td>
                            <td>
                                <Link to={`/bloodtype/update/${type.id}`}>Editar</Link>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteType(type.id)}>
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

export default ListTypes;