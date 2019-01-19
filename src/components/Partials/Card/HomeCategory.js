import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, 
    ListGroup, ListGroupItem
} from 'reactstrap';

const HomeCategory = ({ category }) => (
    <Fragment>
        <Card>
            <CardHeader><h5>Categories</h5></CardHeader>
            <CardBody>
                <ListGroup>
                    <ListGroupItem>{category}</ListGroupItem>
                    <ListGroupItem>{category}</ListGroupItem>
                    <ListGroupItem>{category}</ListGroupItem>
                    <ListGroupItem>{category}</ListGroupItem>
                    <ListGroupItem>{category}</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    </Fragment>
)

export default HomeCategory;