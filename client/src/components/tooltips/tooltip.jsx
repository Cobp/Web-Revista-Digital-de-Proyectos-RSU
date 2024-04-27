import './Tooltip.Module.css'

const tooltip = ({
    children,
    position,
    label,
    url,
}) => {
    return (
        <div className="tooltip">
            <a className={`link ${label}`} href={url} target="_blank" rel="noreferrer">
                {children}
            </a>
            <label className={`tooltip-label ${position}`}>{label}</label>
        </div>
    )
}

export default tooltip
