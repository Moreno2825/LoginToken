import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/slices/session_slices";
import '../styles/Login.css';


const Login = () => {
    // variables de tu api
    const [values, setValues] = useState({
        Email:"",
        Password:""
    });

    const dispatch = useDispatch();

    //devuelve una funcion
    const navigate = useNavigate()
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            // dinamico
            [name]: value
        })
    }
    const SubmitForm = async (e) =>{
        //para que no se renderice
        e.preventDefault()
        try {
            // axios.metodo = (get, post, put, delete)
            // primero la ruta, segundo el body, 0 es un objeto contiene headers cada que quiere mandarse el token
            const response = await axios.post("https://localhost:7261/api/cuentas/login", values)
            if (response.status === 200) {
                // console.log(response.data.token);
                dispatch(login(response.data.token));
                navigate('/', {replace:true})
            }

        } catch (error) {
            console.log(error);
        }
        
    }
  return (
    <div className="contenedor-formulario contenedor">
    <div className="image-formulario"></div>
    <form onSubmit={SubmitForm} className="formulario">
      <div className="texto-formulario">
        <h2>Bienvenido de nuevo</h2>
        <p>Inicia sesión con tu cuenta</p>
      </div>
      <div className="input">
        <label for="userInp">Email</label>
        <input
        value={values.Email}
        name="Email"
         placeholder="Ingresa tu nombre"
          type="text" 
          id="Email"
          onChange={handleChange}/>
      </div>
      <div className="input">
        <label for="password">Contraseña</label>
        <input
        value={values.Password}
        name="Password"
          placeholder="Ingresa tu contraseña"
          type="password"
          id="passInp"
          onChange={handleChange}
        />
      </div>
      <div className="custom-control custom-switch mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
        />
        <label for="customSwitch1" className="custom-cntrol-label">
          Keep me Logged In
        </label>
      </div>
      <div className="input">
        <input type="submit" value="Entrar" id="sub_btn" />
      </div>
      <div className="crear-cuenta">
        <a href="register.html">¿No tienes cuenta? Crear una</a>
      </div>
    </form>
  </div>
  );
};

export default Login;

   