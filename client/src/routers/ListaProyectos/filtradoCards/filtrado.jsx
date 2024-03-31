import { Search } from '../../../components/index'
import Academico from '../dataUEB.json'
import './filtradoModule.css'

const filtrado = ({
  iconSearch,
  searchTerm,
  setSearchTerm,
  activeOption,
  handleOptionClick,
}) => {
  
  const Data = Academico.Academico;

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='container_filter'>
      <Search
        icon={iconSearch}
        searchTerm={searchTerm}
        handleSearch={handleSearch}/>
      <ol>
        {Data.map((item, index)=>(
          <li key={index}
            onClick={() => handleOptionClick(index)}
            className={activeOption === index ? 'active' : ''}>
            {item.option}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default filtrado
