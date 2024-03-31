import { useState } from 'react';
import { CaretLeft, CaretRight } from '../../assets/index';
import './CalendarModule.css'

const Calendario = ({ setSelectedDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const goToMonth = (delta) => {
        setCurrentMonth(prevMonth => {
            const newMonth = new Date(prevMonth);
            newMonth.setMonth(prevMonth.getMonth() + delta);
            return newMonth;
        });
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    };

    const generateDatesArray = () => {
        const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
        const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDay();
        const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
        const daysInPreviousMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
        const paddingDaysStart = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
        const previousMonthDays = Array.from({ length: paddingDaysStart }, (_, index) => new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, daysInPreviousMonth - paddingDaysStart + index + 1));
        const paddingDaysEnd = lastDayOfMonth === 0 ? 7 : 14 - lastDayOfMonth;
        const nextMonthDays = Array.from({ length: paddingDaysEnd }, (_, index) => new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, index + 1));
        const datesArray = [...previousMonthDays, ...Array.from({ length: daysInMonth }, (_, index) => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index + 1)), ...nextMonthDays];
        const groupedDatesArray = [];
        while (datesArray.length > 0) {
            groupedDatesArray.push(datesArray.splice(0, 7));
        }
        return groupedDatesArray;
    };

    const handleDateClick = (date) => {
        const dayInfo = {
            day: date.getDate(),
            year: date.toLocaleString('default', { year: 'numeric' }),
            month: date.toLocaleString('default', { month: 'long' }),
            today: date.toLocaleString('default', { weekday: 'long' })
        };
        setSelectedDate(dayInfo);
    };

    return (
        <div className="B-Shadow container_calendar">
            <div className='date_calendar'>
                <button type="button" onClick={() => goToMonth(-1)}>
                    <CaretLeft/>
                </button>
                <p>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                <button type="button" onClick={() => goToMonth(1)} >
                    <CaretRight/>
                </button>
            </div>
            <div className='line-vertical'/>
            <div className='container_table_days'>
                <table className="calendar">
                    <thead>
                        <tr>
                            {[...Array(7).keys()].map((dayIndex) => (
                                <th key={dayIndex} className="calendar-header">
                                    {new Date(0, 0, dayIndex + 1).toLocaleString('default', { weekday: 'short' }).substring(0, 2)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {generateDatesArray().map((week, weekIndex) => (
                            <tr key={weekIndex}>
                                {week.map((date, dayIndex) => (
                                    <td key={dayIndex}>
                                        {isToday(date) ? 
                                        <button
                                            className={`calendar-day ${date && date.getMonth() === currentMonth.getMonth() ? 'active' : 'inactive'} ${isToday(date) ? 'today' : ''} `}
                                            onClick={() => date && handleDateClick(date)}>
                                            {date && date.getDate()}
                                        </button>
                                        :
                                        <p
                                            className={`calendar-day ${date && date.getMonth() === currentMonth.getMonth() ? 'active' : 'inactive'} ${isToday(date) ? 'today' : ''} `}
                                            onClick={() => date && handleDateClick(date)}>
                                            {date && date.getDate()}
                                        </p>
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calendario
