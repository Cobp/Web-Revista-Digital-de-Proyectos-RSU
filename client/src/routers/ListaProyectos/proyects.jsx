import { useState } from 'react';
import { NavbarRed  } from '../../components';
import { Gallery, Column, Search } from '../../assets';
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
      svg: <Gallery />,
      title: "Galleria"
    },
    {
      svg: <Column />,
      title: "Columna"
    },
  ];

  const iconSearch = { svg: <Search />, placeholder: "Buscar proyecto..." };

  return (
    <div className='Main'>
      <NavbarRed/>
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
    </div>
  );
};

export default Proyects;
