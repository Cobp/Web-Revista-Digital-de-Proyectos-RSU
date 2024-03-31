import { useState, useEffect } from "react";
import { ClockPlus } from "../../assets/index.js";
import { Calendario, ProgressCircle } from "../../components/index.js";
import "./horasModule.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  var datos = 46;
  var valor = ((datos / 200) * 100).toFixed(0);

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
    <section className="timecard_container">
      <div className="D-center timecard-side-container">
        <div className="D-aling W-100 data-container-of-the-day">
          {selectedDate && (
            <>
              <p className="D-center W-100 day">{selectedDate.day}</p>
              <div className="W-100">
                <p className="today">{selectedDate.today}</p>
                <p className="register-ueb">123456789-UEB</p>
              </div>
            </>
          )}
          <ProgressCircle data={valor} />
        </div>
        <div>
          <button type="button" className="D-center button-add-hours">
            <ClockPlus/>
          </button>
        </div>
        {/* <div className="D-aling W-100 G-1 B-Shadow card-donut-chart">
          <ProgressCircle data={valor} />
          <div>
            <p className="title">{datos}/200 Horas</p>
            <p className="description">Promedio de Avance</p>
          </div>
        </div> */}
        <Calendario setSelectedDate={setSelectedDate} />
      </div>
      <div className="user-data-container">
        <div className="timecard_container">
          <h2>Registro RSU</h2>
          <span className="prueba"></span>
          <span className="prueba"></span>
          <span className="prueba"></span>
          <span className="prueba"></span>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
