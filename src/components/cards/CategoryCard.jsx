import { Card, CardTitle } from 'reactstrap'
import './categoryCard.css'

const CategoryCard = (props) => {

    const color = props.items.color;

    return (
        <>
            <Card className="mb-2 p-3 mt-3 category-card " style={{
                background: color 
            }} >

                <CardTitle tag="h3" className='card-title'>
                   {props.items.title}
                   {/* {props.items.color} */}
                </CardTitle>
                <img
                    alt="Card cap"
                    src={props.items.img}
                    width="180"
                />
            </Card></>
    )
}

export default CategoryCard