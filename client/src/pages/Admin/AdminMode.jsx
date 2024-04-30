import { useEffect } from 'react';
import { IconoFolders, IconoChart, IconoUserSR } from '../../assets/index.js';
import { NavbarRed, Tab, TabViewFlex } from '../../components';
import { useProyect } from '../../contexts/ProyectsContext.jsx';
import TabProyects from './TabProyects/TabProyects.jsx';
import Form from './Form/Form.jsx';
import './Admin.Module.css';

function AdminMode() {
    const {
        proyects,
        getProyects
    } = useProyect()

    useEffect(() => {
        getProyects();
    }, []);

    return (
        <div className="Main">
            <NavbarRed />
            <div className='Administrative-Board'>
                <TabViewFlex>
                    <Tab label="Tablero" icon={<IconoChart />}>Content of Tab 1</Tab>
                    <Tab label="Usuarios" icon={<IconoUserSR />}>Content of Tab 2</Tab>
                    <Tab label="Proyectos" icon={<IconoFolders />}>
                        <TabProyects proyects={proyects}/>
                    </Tab>
                </TabViewFlex>
            </div>
            <Form />

        </div>
    );
};
// screaming architecture

//<Form fetchData={fetchData} DB_URI={DB_URI} />

export default AdminMode;
