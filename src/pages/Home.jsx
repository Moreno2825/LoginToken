import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectSession } from "../features/slices/session_slices";

const url = 'https://localhost:7261/api/compradores';

function Compradores() {
    
    const [ compradores , setListadoCompradores ] = useState([]);

    const [compradoresLista, setcompradoresLista] = useState({
        nombre: '',
        apellidos: '',
        direccion: '',
        numeroTelefono: ''
    })
    // se recupera el token del localStorage
    const session = useSelector(selectSession)
    const postCompradores = (e) => {
        e.preventDefault();
        axios.post(url, compradoresLista, {
            headers: {
                Authorization: 'Bearer ' + session.token
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const deleteCompradores = async (id) => {
        await axios.delete('https://localhost:7261/api/compradores/${id}')
    }

    const handleChangePost = (e) => {
        setcompradoresLista({ ...compradoresLista, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getCompradores = async () => {
            const result = await axios.get(url,{
                headers: {
                    Authorization: 'Bearer ' + session.token
                }
            });
            // console.log(result.data)
            setListadoCompradores(result.data)
        }
    getCompradores()
    },[]);

    return(
        <div>
            <h1>Compradores</h1>

            <ul>
              {compradores.length === 0 && <p>Cargando...</p>}
              {
                  compradores.map((compradores, i) => {
                      return(
                        <li key={i}>
                            Id: {compradores.id} Nombre: {compradores.nombre} - Apellidos: {compradores.apellidos} - Direccion: {compradores.direccion} - Telefono: {compradores.numeroTelefono}
                        </li>
                      )
                  })
              }
            </ul>
            <br></br>
            <h1>post</h1>
                <form onSubmit={postCompradores}>

                    <label htmlFor="nombre">Nombre</label><br/>
                    <input type="text" name="nombre" id="nombre" value={compradoresLista.nombre} onChange={handleChangePost}></input><br/><br/>

                    <label htmlFor="apellidos">Apellidos</label><br/>
                    <input type="text" name="apellidos" id="apellidos" value={compradoresLista.apellidos} onChange={handleChangePost}></input><br/><br/>

                    <label htmlFor="direccion">Direccion</label><br/>
                    <input type="text" name="direccion" id="direccion" value={compradoresLista.direccion} onChange={handleChangePost}></input><br/><br/>

                    <label htmlFor="numeroTelefono">Telefono</label><br/>
                    <input type="text" name="numeroTelefono" id="numeroTelefono" value={compradoresLista.numeroTelefono} onChange={handleChangePost}></input>
                    <br/>
                    <br/>
                    <button type="submit">Agregar</button>
                </form>
            <br></br>
            <h1>delete</h1>
                
        </div>
    )
}

export default Compradores;

