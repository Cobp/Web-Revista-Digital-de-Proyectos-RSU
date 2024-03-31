import './inputModule.css'

const inputs = ({ checkedIndex, handleCheckboxChange, Icons }) => {
  return (
    <div className='container_inputs'>
      {Icons.map((item, index) => (
        <label class="container" key={index} title={item.title}>
          <input
            className="checkbox-input"
            type="checkbox"
            checked={checkedIndex === (index)}
            onChange={() => handleCheckboxChange(index)}
            disabled={checkedIndex === (index)}
          />
          {item.svg}
        </label>
      ))}
    </div>
  )
}

export default inputs
