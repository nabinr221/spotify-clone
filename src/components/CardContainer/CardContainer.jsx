import CustomCard from '../cards/CustomCard'
import { Link } from 'react-router-dom'

const CardContainer = (props) => {
    return (
        <>
            <div className="cards-container mt-3 mb-4">
                <div className='d-flex justify-content-between align-items-center mx-4 p-2'>
                    <h4 className='text-white fw-bold'>{props.containerTitle}</h4>
                    <p><Link to={"/all"} className='text-white link '>Show all</Link></p>
                </div>
                <div className='d-flex gap-4 mx-4 mt-3'>
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                </div>
            </div>
        </>
    )
}

export default CardContainer