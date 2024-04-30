import './Tooltip.Module.css'

const tooltip = ({
    children,
    position,
    label,
}) => {
    return (
        <div className="tooltip">
            {children}
            <label className={`tooltip-label ${position}`}>{label}</label>
        </div>
    )
}

export default tooltip
