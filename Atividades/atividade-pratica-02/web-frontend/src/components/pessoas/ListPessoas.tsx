import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { CidadeInterface } from "../cidades/ListCidades";


export interface PessoasInterface {
    id: number;
    nome: string;
    rua: string;
    complemento: string;
    rg: string;
    cidade_id: number;
    tipo_id: number;
    created_at: string;
    updated_at: string;
    cidade: CidadeInterface;
}

const ListPessoas = () => {
    const [persons, setPersons] = useState<PessoasInterface[]>([]);
    const [cityMap, setCityMap] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        api.get("/persons").then((response) => {
            setPersons(response.data);
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
        persons.forEach((person) => {
            fetchCityById(person.cidade_id);
        });
    }, [persons]);

    const handleDeletePerson = async (id: number) => {
        if (!window.confirm("Deseja realmente excluir esta pessoa?")) {
            return;
        }
        try {
            await api.delete("/person", {
                data: { id },
            });
            alert("Pessoa excluída com sucesso!");

            setPersons(persons.filter((person) => person.id !== id));
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir pessoa!");
        }
    };

    return (
        <div>
            <h3>Lista de Pessoas</h3>
            <div>
                <Link to="/persons/criar">Cadastrar Pessoa</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cidade Id</th>
                        <th>Cidade</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => {
                        return (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.nome}</td>
                                <td>{cityMap[person.cidade_id] || "Carregando..."}</td>
                                <td>{person.cidade_id}</td>
                                <td>{person.created_at}</td>
                                <td>{person.updated_at}</td>
                                <td>
                                    <Link to={`/persons/update/${person.id}`}>Editar</Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleDeletePerson(person.id);
                                        }}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListPessoas;