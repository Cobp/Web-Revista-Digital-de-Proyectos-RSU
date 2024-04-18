import { SelectedCardProyects } from "../../components";
import data from '../../components/sliderCards/data.json'
const items = data.Proyects;

const AdminMode = () => {
    return (
        <div className="Main">
            <div className="container_cards">
                {items.map((item, index) => (
                    <SelectedCardProyects key={index} selectedId={item} />
                ))}
        </div>
    </div>
    )
}

export default AdminMode
