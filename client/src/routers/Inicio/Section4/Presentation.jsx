import { BarChart, LineChart, PieChart } from "../../../components"
import './chartsModule.css'

const Presentation = () => {
  const data = [15, 50, 35, 120, 55, 102 ];
  return (
    <div className="estadisticas">
      <BarChart data={data}/>
      <LineChart data={data}/>
      <PieChart data={data}/>
    </div>
  )
}

export default Presentation
