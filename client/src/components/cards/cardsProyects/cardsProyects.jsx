const card2 = ({item, index, setSelectedId}) => {
    return (
        <div key={index}
            className='cards'
            onClick={() => setSelectedId(item)}>
            <div className='image_container'>
                <img src={item.image} alt="" />
                <span></span>
            </div>
            <div className='main_content_cards'>
                <p className="title_card">{item.Nombre_Proyecto}</p>
                <p className="description_card">{item.Carrera_Responsable}</p>
            </div>
        </div>
    )
}

export default card2
