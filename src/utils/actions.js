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