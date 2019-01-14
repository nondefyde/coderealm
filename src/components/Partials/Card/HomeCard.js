import React, { Fragment } from 'react';
import { Card, CardImg, CardBody, 
    CardTitle, CardText, Button 
} from 'reactstrap';

const HomeCard = ({ title, text, image }) => (
    <Fragment>
        <Card className="home-container__card">
            <CardImg 
                src={image}
                alt="Card image cap"
                className="home-container__image" 
            />
            <CardBody>
                <CardTitle><h5>{title}</h5></CardTitle>
                <CardText>{text}</CardText>
                <Button className="home-container__button">Read More <i className="fa fa-arrow-right"></i></Button>
            </CardBody>
        </Card>
    </Fragment>
)

export default HomeCard;