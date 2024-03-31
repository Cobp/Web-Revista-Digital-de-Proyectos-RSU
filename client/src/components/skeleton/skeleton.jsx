import './skeletonModule.css'

const Skeleton = () => {
    return(
        <div className="skeleton">
            <div className="skeleton-container one">
                <span className="skeleton-item day"></span>
                <div className='skeleton-items-flex column'>
                    <span className='skeleton-item title'></span>
                    <div className="skeleton-items-flex">
                        <span className="skeleton-item"></span>
                        <span className="skeleton-item"></span>
                    </div>
                </div>
                <span className="skeleton-item circle"></span>
            </div>
            <div className="skeleton-container two">
                <div className="skeleton-items-flex column">
                    <span className="skeleton-item"></span>
                    <span className="skeleton-item"></span>
                    <span className="skeleton-item"></span>
                    <span className="skeleton-item"></span>
                </div>
                <span className="skeleton-item content"></span>
            </div>
        </div>
    )
}
export default Skeleton