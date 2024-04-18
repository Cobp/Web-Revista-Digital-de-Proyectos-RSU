import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CardProyects, SelectedCardProyects, Checkbox, Search } from '../../../components';
import './contCardmodule.css';

const ContCards = ({
  projectsData, iconSearch, iconFilter,
  classe, setClasse,
  checkedIndex, setCheckedIndex,
  searchTerm, setSearchTerm,
  selectedId, setSelectedId }) => {

  const contentRef = useRef(null)
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
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        setSelectedId(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
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
            <CardProyects item={project} index={index} setSelectedId={setSelectedId}/>
          ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <SelectedCardProyects selectedId={selectedId} setSelectedId={setSelectedId} contentRef={contentRef}/>
        )}
      </AnimatePresence>
      <style>{`
        body{
          margin-right:${selectedId ? '15px' : '0'} !important;
          overflow: ${selectedId ? 'hidden' : 'auto'};
        }
      `}</style>
    </div>
  );
};

export default ContCards;
