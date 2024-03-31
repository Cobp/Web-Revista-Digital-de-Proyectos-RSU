import { useState } from 'react';
import { ReactComponent as IconoSvg1 } from '../../assets/svg/gallery.svg';
import { ReactComponent as IconoSvg2 } from '../../assets/svg/column.svg';
import { ReactComponent as IconoSvg3 } from '../../assets/svg/search_list.svg';
import Data from '../../components/sliderCards/data.json';
import Cards from './contCards/contCards';
import Filter from './filtradoCards/filtrado';
import './proyectsModule.css';

const Proyects = () => {
  const projectsData = Data.Proyects;
  const [classe, setClasse] = useState("gallery");
  const [checkedIndex, setCheckedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeOption, setActiveOption] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  const handleOptionClick = index => {
    setActiveOption(index);
  };

  const iconFilter = [
    {
      svg: <IconoSvg1 />,
      title: "Galleria"
    },
    {
      svg: <IconoSvg2 />,
      title: "Columna"
    },
  ];

  const iconSearch = { svg: <IconoSvg3 />, placeholder: "Buscar proyecto..." };

  return (
    <div className='container_for_all_proyects'>
      <Cards
        projectsData={projectsData}
        classe={classe}
        setClasse={setClasse}
        checkedIndex={checkedIndex}
        setCheckedIndex={setCheckedIndex}
        iconFilter={iconFilter}
        iconSearch={iconSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <Filter
        iconSearch={iconSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeOption={activeOption}
        handleOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default Proyects;
