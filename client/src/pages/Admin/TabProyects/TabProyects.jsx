import {CardTabProyect} from './cardTabProyect/cardTabProyect.jsx'
import './TabProyects.Module.css'

const TabProyects = ({ proyects }) => {

    return (
        <div className='container-card-proyects'>
            {proyects.map((items) => (
                <CardTabProyect items={items} key={items._id}/>
            ))}
        </div>
    )
}

export default TabProyects
