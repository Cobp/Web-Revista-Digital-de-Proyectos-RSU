import { useState, useEffect } from 'react';
import { IconoFolders, IconoChart, IconoUserSR } from '../../assets/index.js';
import { NavbarRed, Tab, TabViewFlex } from '../../components';
import TabProyects from './TabProyects/TabProyects.jsx';
//import Form from './Form/Form.jsx';
import './Admin.Module.css';

const DB_URI = 'http://localhost:3001/api/ProyectRSU';

const AdminMode = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(DB_URI);
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Main">
            <NavbarRed />
            <div className='Administrative-Board'>
            <TabViewFlex>
                <Tab label="Tablero" icon={<IconoChart/>}>Content of Tab 1</Tab>
                <Tab label="Usuarios" icon={<IconoUserSR/>}>Content of Tab 2</Tab>
                <Tab label="Proyectos" icon={<IconoFolders/>}>
                    <TabProyects data={data} loading={loading} />
                </Tab>
            </TabViewFlex>
            </div>
        </div>
    );
};
// screaming architecture

//<Form fetchData={fetchData} DB_URI={DB_URI} />

export default AdminMode;
