import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Card1, Card2, Checkbox, Search } from '../../../components/index';
import './contCardmodule.css';

const ContCards = ({
  projectsData, iconSearch, iconFilter,
  classe, setClasse,
  checkedIndex, setCheckedIndex,
  searchTerm, setSearchTerm,
  selectedId, setSelectedId }) => {

  const handleCheckboxChange = (index) => {
    if (checkedIndex !== index) {
      setCheckedIndex(index);
      setClasse(index === 0 ? 'gallery' : 'column');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 27) {
        setSelectedId(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setSelectedId]);

  return (
    <div className={`Container ${classe}`}>
      <div className='header_cards'>
        <p className='title_cards'>Proyectos Disponibles</p>
        <div className='filter_cards'>
          <Search icon={iconSearch} searchTerm={searchTerm} handleSearch={handleSearch} />
          <Checkbox checkedIndex={checkedIndex} handleCheckboxChange={handleCheckboxChange} Icons={iconFilter} />
        </div>
      </div>
      <div className='container_cards'>
        {projectsData
          .filter((project) => project.Nombre_Proyecto.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((project, index) => (
            <Card2 item={project} index={index} setSelectedId={setSelectedId}/>
          ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <Card1 selectedId={selectedId} setSelectedId={setSelectedId}/>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContCards;
