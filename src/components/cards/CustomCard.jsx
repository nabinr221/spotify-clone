import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import './customCard.css'
const CustomCard = () => {
    return (
        <>
            <Card className='custom-card'>
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                    className='img-fluid p-3'
                />
                <CardBody>
                    <CardTitle tag="h4">
                        Card title this asdzx asdfav
                    </CardTitle>


                    <CardText tag="p">
                        Some quick example text to build on the card title...
                    </CardText>
                </CardBody>
            </Card>
        </>

    )
}

export default CustomCard