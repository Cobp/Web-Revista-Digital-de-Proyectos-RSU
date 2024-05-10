import { createContext, useContext, useState } from "react";
import { 
    createProyectRequest,
    getProyectsRequest,
    getProyectRequest,
    deleteProyectRequest,
    updateProyectRequest
} from "../Api/Proyects";

const ProyectContext = createContext();

export const useProyect = () => {
    const context = useContext(ProyectContext);

    if(!context){
        throw new Error("useProyect must be used within a ProyectProvider");
    }
    return context;
}

export function ProyectProvider({ children }) {
    const [proyects, setProyects] = useState([]);

    const getProyects = async () =>{
        try {
            const res = await getProyectsRequest();
            setProyects(res.data);
        } catch (error) { 
            console.error(error);
        }
    }

    const createProyect = async(proyect) => {
        try {
            const res = await createProyectRequest(proyect);
            setProyects([...proyects, res.data]);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteProyect = async (id) => {
        try {
            await deleteProyectRequest(id);
            setProyects(proyects.filter(proyect => proyect._id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    const getProyect = async (id) => {
        try {
            const res = await getProyectRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateProyect = async (id, proyect) => {
        try {
            const res = await updateProyectRequest(id, proyect);
            setProyects(proyects.map(proyect => proyect._id === id ? res.data : proyect));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ProyectContext.Provider value={{
            proyects,
            createProyect,
            getProyects,
            getProyect,
            deleteProyect,
            updateProyect
        }}>
            {children}
        </ProyectContext.Provider>
    )
}