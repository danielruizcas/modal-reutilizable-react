import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Modal from './componentes/Modal';
import { useState } from 'react';

function App() {

  const [estadoModal1, setEstadoModal1]=useState(false)

  const notify = () => toast.success('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <div>
      <div>
        <ContenedorBotones>
          <Boton onClick={()=>{setEstadoModal1(!estadoModal1)}}>Modal 1</Boton>
        </ContenedorBotones>
      </div>
      <Boton onClick={notify}>Notify!</Boton>
      <div className='section'>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <Modal
      estado={estadoModal1}
      cambiarEstado={setEstadoModal1}
      titulo="Parcero"
      mostrarHeader={false}
      mostrarOverlay={true}
      posicionModal={'center'}
      padding={'0px'}
      >
        <Contenido>
          <h1>
            Papaaaaaaaaa, donde estan los jugueteeesssss?
          </h1>
          <p>Reutilizable</p>
          <Boton>Aceptar</Boton>
        </Contenido> 
      </Modal>
    </div>
  );

}

export default App;

const ContenedorBotones = styled.div`
padding: 40px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 28px;
`;

const Boton = styled.button`
display: block;
padding: 10px 30px;
border-radius: 100px;
color: #fff;
border: none;
background: #3498db;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-weight: 500;
transition: .3s ease all;
&:hover {
  background: #0066FF;
}
`;

const Contenido = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 10px;
}
p{
  font-size: 18px;
  margin-bottom: 20px;
}
img{
  width: 100%;
  vertical-align: top;
  border-radius: 3px;
}

`;