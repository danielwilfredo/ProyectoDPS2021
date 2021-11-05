import firebase from "firebase"
import { fileToBlob } from "./helpers"

//Subir img a Firebase
export const uploadImage = async(image, path,name) => {
    const result = {statusResponse : false, error: null, url: null}
    const ref = firebase.storage().ref(path).child(name)
    const blob = await fileToBlob(image)
    try{
        await ref.put(blob)
        const url = await firebase.storage().ref(`${path}/${name}`).getDownloadURL()
        result.statusResponse = true
        result.url = url
    }catch(error){
        result.error = error
    }
    return result
}

//Actualizar la img del usario
export const updateProfile = async(data) => {
    const result = { statusResponse: true, error: null }
    try {
        await firebase.auth().currentUser.updateProfile(data)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result     
}

//Recuperar la contraseña

export const sendEmail = async(email) => {
    const result = { statusResponse:true, error: null}
    try{
        await firebase.auth().sendPasswordResetEmail(email)
    }
    catch(error){
        result.statusResponse = false 
        result.error = error
    }
    return result
}

// Cambiar la contraseña

export const updatePassword = async(password) => {
    const result = { statusResponse: true, error: null }
    try {
        await firebase.auth().currentUser.updatePassword(password)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result     
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}

export const reauthenticate = async(password) => {
    const result = { statusResponse: true, error: null }
    const user = getCurrentUser()
    const credentials = firebase.auth.EmailAuthProvider.credential(user.email, password)

    try {
        await user.reauthenticateWithCredential(credentials)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result     
}