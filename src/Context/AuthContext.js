import React, {createContext, useReducer, useEffect, useState} from 'react'
import AuthReducer from './AuthReducer'
import {INICIO_SESION,CERRAR_SESION, ACTUALIZAR_USUARIO} from './Types'
import { auth } from '../../Database/Firebase'
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const initialState = {
        nombre: '',
        correo: '',
        foto: '',
        id: '',
        logueado: false,
        cargando: true
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(()=>{
        obtenerSesion()

    },[])

    const [timer, setTimer] = useState(null)

    const iniciarSesion = (nombre,correo,foto,id) => {
        dispatch({
            type: INICIO_SESION,
            payload:{ 
                nombre,correo,foto,id
            }
        })
    }

    const actualizarUsuario = (nombre,correo,foto,id) => {
        dispatch({
            type: ACTUALIZAR_USUARIO,
            payload:{ 
                nombre,correo,foto,id
            }
        })
    }


    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    const obtenerSesion = () =>{
        const unsubscribe = auth.onAuthStateChanged(async(user) => {
            const timer = await setTimeout(() => {
                if (user) {
                    dispatch({
                        type: INICIO_SESION,
                        payload: {
                            nombre: user.displayName,
                            correo: user.email,
                            foto: user.photoURL,
                            id: user.uid
                        }
                    })
                  }else{
                      dispatch({
                          type: CERRAR_SESION
                      })
                  }
            }, 3500);
            setTimer(timer)
          });
          return unsubscribe;
    }

    return(
        <AuthContext.Provider
            value={{
                nombre: state.nombre,
                foto: state.foto,
                correo: state.correo,
                id: state.id,
                logueado: state.logueado,
                cargando: state.cargando,
                iniciarSesion,
                cerrarSesion,
                actualizarUsuario,
                timer
                
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}