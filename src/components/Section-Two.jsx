import './Section-two.css'

export const SectionTwo = () => {
    return (
        <div className="section-two">
            <p>You’ve used <span className='used'>8<span className='number-one'>1</span><span className='number-five'>5</span> GB</span> of your storage</p>
            <div className='progress-bar'>
                <div className='progress-bar-used'>
                    <div className='progress-bar-point'></div>
                </div>
            </div>
            <div className='ranges'><span>0 GB</span>1000 GB</div>
        </div>
    )
}