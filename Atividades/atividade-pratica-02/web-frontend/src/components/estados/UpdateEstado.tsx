import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEstado = () => {

    const [nome, setNome] = useState("");
    const [sigla, setSigla] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/states/${id}`).then((response) => {
            setNome(response.data.nome);
            setSigla(response.data.sigla);
        });
    } , [id]);

    const handleUpdateEstado = async(event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            id : parseInt(String(id)),
            nome,
            sigla
        };

        try {
            await api.put("/states", data);
            alert("Estado atualizado com sucesso!");
            navigate("/states");
    } catch (error) {
        alert("Erro ao atualizar estado!");
        console.log(error);
        
    }
    }

    return (
        <div>

            <h3>Atualização do estado : {nome} - {sigla}</h3>
            <form onSubmit={handleUpdateEstado}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                    type="text" 
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input 
                    type="text" 
                    name="sigla"
                    id="sigla"
                    value={sigla}
                    onChange={(e) => setSigla(e.target.value)}
                    />
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default UpdateEstado;