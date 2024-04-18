import { useEffect, useState } from "react";
import { Calendario, Drawer, NavbarRed } from "../../components";
import "./horasModule.css";
import { Section1 } from './sections/section1';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedButton, setSelectedButton] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // var datos = 46;
  // var valor = ((datos / 200) * 100).toFixed(0);
  // const goToMonth = (delta) => {
  //   setCurrentMonth((prevMonth) => {
  //     const newMonth = new Date(prevMonth);
  //     newMonth.setMonth(prevMonth.getMonth() + delta);
  //     return newMonth;
  //   });
  // };

  useEffect(() => {
    const dayInfo = {
      day: new Date().getDate(),
      year: new Date().toLocaleString("default", { year: "numeric" }),
      month: new Date().toLocaleString("default", { month: "long" }),
      today: new Date().toLocaleString("default", { weekday: "long" }),
    };
    setSelectedDate(dayInfo);
  }, [setSelectedDate]);

  return (
    <section className="Main">
      <NavbarRed />
      <div className="D-justify W-100 column timecard_container">
        <button type="button" onClick={toggleDrawer}>
          ClickMe
        </button>
        <Section1 selectedDate={selectedDate}/>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} toggleDrawer={toggleDrawer}>
        <h1>Nombre del proyecto seleccionado</h1>
        <div className="D-aling">
          <Calendario
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </Drawer>
    </section>
  );
};

export default Calendar;
