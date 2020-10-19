import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/create-orphanage-done.css';

const CreateOrphanageDone: React.FC = () => {

  return  (
    <div id="page-create-orphanage-done">
      <div className="content-done">
        
        <div className="section-block">
          <strong>Ebaaa!</strong>
          <span>
            O cadastro deu certo e foi enviado
            ao administrador para ser aprovado.
            Agora é só esperar :)
          </span>
          <Link to="/app">
            Voltar para o mapa
          </Link>
        </div>
      </div>
    </div>
  )
}


export default CreateOrphanageDone;