import React from 'react'
import Tiles from '../Tiles/Tiles'
import tile1 from '../../assets/images/tile1.png'
import tile3 from '../../assets/images/tile3.png'
import next from '../../assets/images/next.svg'
import previous from '../../assets/images/previous.svg'

import { Carousel, Container } from 'react-bootstrap'
import './RecipeList.scss'
export default function RecipeList() {
    return (
        <div className="recipe-wrapper">
            <h1 className="latest-recipes">Latest Recipes</h1>
            <div className="w-100 next-previous">
                <img className="next " src={next}></img>
                <img className="previous " src={previous}></img>
            </div>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <Tiles image={tile1} content="Portobello Baked Eggs with avocado & bread" amount='€8'></Tiles>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Tiles image={tile3} content="Summery salmon, beetroot & spicy mix" amount='€15'></Tiles>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Tiles image={tile3} content="Portobello Baked Eggs with avocado & bread" amount='€8'></Tiles>
                    </Carousel.Item>
                </Carousel>
            </Container>

        </div>
    )
}
