import { IconoUser, IconoUserSearch } from "../../../assets"
import { Search } from "../../../components"
import './Aside.Module.css'
import data from './.json'

const Side = () => {
    // const icon = {
    //     svg: <IconoUserSearch/>,
    //     placeholder: "Buscar por Registro"
    // }

    return (
        <aside className="container-users-data">
            {/* <Search icon={icon}/> */}
            <div className="container-user">
                {data.map((item, index) => {
                    return (
                        <div className="card-user" key={index}>
                            <div className="D-aling">
                                <IconoUser/>
                                <div className="cube">
                                    <p className="text-name-user">{item.name}</p>
                                    <p className="text-name-carrer">{item.carrer}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-name-reg">{item.registro}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </aside>
    )
}

export default Side
