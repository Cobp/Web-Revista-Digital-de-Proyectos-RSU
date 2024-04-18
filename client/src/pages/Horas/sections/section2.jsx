import { ClockPlus } from "../../../assets";
export const Section2 = ({ setSelectedDate, currentMonth }) => {

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    };

    const isFutureDate = (date) => {
        const today = new Date();
        return date > today;
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
        if (!isFutureDate(date)) {
            const dayInfo = {
                day: date.getDate(),
                year: date.toLocaleString('default', { year: 'numeric' }),
                month: date.toLocaleString('default', { month: 'long' }),
                today: date.toLocaleString('default', { weekday: 'long' })
            };
            setSelectedDate(dayInfo);
        }
    };
    
    return (
        <article className="D-center W-100 column container-calendar">
            <div className="D-center Container-DayOfTheWeek">
                {[...Array(7).keys()].map((dayIndex) => (
                    <p key={dayIndex}
                        className={`D-center DayOfTheWeek 
                        ${new Date().toLocaleString("default", { weekday: "long" })
                                ===
                                new Date(0, 0, dayIndex + 1).toLocaleString('default', { weekday: 'long' })
                                ?
                                'isDay'
                                :
                                ''
                            }`}>
                        {new Date(0, 0, dayIndex + 1).toLocaleString('default', { weekday: 'long' })}
                    </p>
                ))}
            </div>
            <div className="W-100 Container-Days">
                {generateDatesArray().map((week, weekIndex) => (
                    <div className="D-aling W-100 calendar-week" key={weekIndex}>
                        {week.map((date, dayIndex) => (
                            <button
                                key={dayIndex}
                                className={`D-center column W-100 calendar-day ${date && date.getMonth() === currentMonth.getMonth() ? 'active' : 'inactive'} ${isToday(date) ? 'today' : ''} ${isFutureDate(date) ? 'future' : ''}`}
                                onClick={() => date && handleDateClick(date)}
                                disabled={isFutureDate(date)}>
                                {isToday(date) ? 'Hoy' : date && date.getDate()}
                                <ClockPlus />
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </article>
    )
}
