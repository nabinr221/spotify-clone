import React, { useState } from 'react'
import { Container, Row, Col, Card, CardTitle, CardImgOverlay } from 'reactstrap'
import CategoryCard from '../cards/CategoryCard'
import category from '../../json/category.json'
// import "./categoryContainer.css"
const Category = () => {
    // const [category, setCategory] = useState()

    return (
        <>
            <Container fluid className='category-container'>
                <h4>Browse all</h4>
                <Row sm={2} md={6}>
                    {category?.map((item, index) => {
                        return (
                            <Col key={index} >
                                <CategoryCard items={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </>
    )
}

export default Category