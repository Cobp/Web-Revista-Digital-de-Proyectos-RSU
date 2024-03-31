import { useEffect, useRef } from "react";

const CircleChart = ({ data }) => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        if (circle) {
            const length = circle.getTotalLength();
            const percentToFill = length * (data / 100);
            circle.style.strokeDasharray = length;
            circle.style.strokeDashoffset = length;
            circle.style.transition = "stroke-dashoffset 1s ease";
            circle.style.strokeDashoffset = length - percentToFill;
        }
    }, [data]);

    return (
        <div className="svg_container_circle_chart">
            <svg width="65" height="65" viewBox="0 0 60 60">
                <circle
                    r="25"
                    cx="30"
                    cy="30"
                    strokeWidth="6"
                    fill="transparent"
                    strokeLinecap="round"
                    stroke="var(--color-quinto)"
                ></circle>
                <circle
                    r="25"
                    cx="30"
                    cy="30"
                    strokeWidth="6"
                    ref={circleRef}
                    fill="transparent"
                    strokeLinecap="round"
                    stroke="var(--color-salmon4)"
                ></circle>
            </svg>
            <span>{data}%</span>
            <style>
                {` .svg_container_circle_chart {
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: fit-content;
                    }
                    .svg_container_circle_chart svg{
                        transform: rotate(-90deg);
                    }
                    .svg_container_circle_chart span{
                        font-size: var(--fz-text-subtitulo);
                        font-weight: 500;
                        line-height: var(--fz-text-subtitulo);
                        color: var(--color-gris4);
                        position: absolute;
                    }
                `}
            </style>
        </div>
    );
};

export default CircleChart;
