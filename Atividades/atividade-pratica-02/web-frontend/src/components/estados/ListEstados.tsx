import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

 export interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}

const ListEstados = () => {

    const [states, setEstados] = useState<EstadoInterface[]>([]);

    useEffect(() => {
        api.get("/states").then((response) => {
            setEstados(response.data);
        });
    }, []);

    const handleDeleteEstado = async(id: number) => {
        if (!window.confirm("Deseja realmente excluir este estado?")) {
            return;
        }
        try {
            await api.delete('/states',{
                data: {id}
            });
            alert("Estado excluído com sucesso!");  

            setEstados(states.filter(estado => estado.id != id));
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir estado!");
        }
    }

    return (
        <div>
            <h3>Lista de Estados</h3>
            <div>
            <Link to="/states/create">Cadastrar Estado</Link>
            </div>
            <div>
            <Link to="/">Home</Link>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>

                    <tbody>

                    
                {states.map((estado) => {
                    return (
                        <tr>
                        <td>{estado.id}</td>
                        <td>{estado.nome}</td>
                        <td>{estado.sigla}</td>
                        <td>{estado.created_at}</td>
                        <td>{estado.updated_at}</td>
                        <td><Link to={`/states/update/${estado.id}`}>Editar</Link></td>
                        <td><button onClick={()=>{
                        handleDeleteEstado(estado.id)}}>Excluir</button></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            
        </div>
    );

}

export default ListEstados;