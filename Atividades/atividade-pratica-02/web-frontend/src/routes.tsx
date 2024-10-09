
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import ListEstados from './components/estados/ListEstados';
import CreateEstados from './components/estados/CreateEstados';
import UpdateEstado from './components/estados/UpdateEstado';
import CriarCidade from './components/cidades/CriarCidade';
import ListCidades from './components/cidades/ListCidades';
import UpdateCidade from './components/cidades/UpdateCidade';
import ListPessoas from './components/pessoas/ListPessoas';
import ListDoacoes from './components/doacoes/ListDoacoes';
import ListColeta from './components/locaisColeta/ListColeta';
import ListTypes from './components/tipoSanguineo/ListTypes';



const AppRoutes = () => {

    return (
       
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<App /> } />
                <Route path="/states" element={<ListEstados /> } />
                <Route path="/states/create" element={<CreateEstados /> } />
                <Route path="/states/update/:id" element={<UpdateEstado /> } />

                <Route path="/cities" element={<ListCidades /> } />
                <Route path="/cities/criar" element={<CriarCidade /> } />
                <Route path="/cities/update/:id" element={<UpdateCidade /> } />

                <Route path="/persons" element={<ListPessoas /> } />

                <Route path="/donations" element={<ListDoacoes /> } />

                <Route path="/locals" element={<ListColeta /> } />

                <Route path="/types" element={<ListTypes /> } />

                
                
            </Routes>

        </BrowserRouter>
    )

}

export default AppRoutes;