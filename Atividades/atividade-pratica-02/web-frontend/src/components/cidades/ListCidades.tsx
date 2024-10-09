import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

 export interface CidadeInterface {
    id: number;
    nome: string;
    estado_id: number;
    created_at: string;
    updated_at: string;
    estado: EstadoInterface
 }

const ListCidades = () => {

    const [cities, setCidades] = useState<CidadeInterface []>([]);
    const [estados, setEstados] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        api.get("/cities").then((response) => {
            setCidades(response.data);
        });
    }, []);

    const fetchEstadoNome = async (estado_id: number) => {
        if (!estados[estado_id]) {
          try {
            const response = await api.get(`/states/${estado_id}`);
            setEstados(prevEstados => ({
              ...prevEstados,
              [estado_id]: response.data.nome
            }));
          } catch (error) {
            console.error('Erro ao buscar estado:', error);
          }
        }
      };
    
      useEffect(() => {
        cities.forEach(cidade => {
          fetchEstadoNome(cidade.estado_id);
        });
      }, [cities]);

    const handleDeleteCidade = async(id: number) => {
        if (!window.confirm("Deseja realmente excluir esta cidade?")) {
            return;
        }
        try {
            await api.delete('/cities',{
                data: {id}
            });
            alert("Cidade excluída com sucesso!");  

            setCidades(cities.filter(cidade => cidade.id != id));
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir cidade!");
        }
    }

    return (
        <div>
            <h3>Lista de Cidades</h3>
            <div>
            <Link to="/cities/criar">Cadastrar Cidade</Link>
            </div>
            <div>
            <Link to="/">Home</Link>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                        <th>Nome</th>
                        <th>Estado Id</th>
                        <th>Estado</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>

                    <tbody>

                    
                {cities.map((cidade) => {
                    return (
                        <tr>
                        <td>{cidade.id}</td>
                        <td>{cidade.nome}</td>
                        <td>{cidade.estado_id}</td>
                        <td>{estados[cidade.estado_id] || 'Carregando...'}</td>
                        <td>{cidade.created_at}</td>
                        <td>{cidade.updated_at}</td>
                        <td><Link to={`/cities/update/${cidade.id}`}>Editar</Link></td>
                        <td><button onClick={()=>{
                        handleDeleteCidade(cidade.id)}}>Excluir</button></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            
        </div>
    );

}

export default ListCidades;