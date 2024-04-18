export const Section1 = ({ selectedDate }) => {
    return (
        <article className="D-center container-header-calendar">
            {selectedDate &&
            <>
            <p>{selectedDate.today}</p>
            <p>{selectedDate.day}</p>
            <p>{selectedDate.month}</p>
            <p>{selectedDate.year}</p>
            </>
          }
        </article>
    )
}