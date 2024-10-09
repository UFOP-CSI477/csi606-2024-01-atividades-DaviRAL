import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateEstados = () => {

    const [nome, setNome] = useState("");
    const [sigla, setSigla] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            nome,
            sigla
        };

        try {
            api.post("/states", data);
            alert("Estado cadastrado com sucesso!");
            navigate("/states");
    } catch (error) {
        console.log(error);
        alert("Erro ao cadastrar estado!");
    }
    }

    return (
        <div>

            <h3>Cadastro de estado : {nome} - {sigla}</h3>
            <form onSubmit={handleSubmit}>
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

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateEstados;