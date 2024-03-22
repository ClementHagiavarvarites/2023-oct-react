import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function ParkingLotItem({ id, link, description, date, priority, deleteItem }) {

    function handleDelete(e) {
        e.preventDefault();
        deleteItem(id);
    }

    return (
        <Card
            className="my-2 parking-lot-item-container"
            color="dark"
            inverse>
            <CardHeader>
                { date } (Priority: { priority })
                <Button color="danger" className="delete-button" onClick={handleDelete}>
                    <strong>X</strong>
                </Button>
            </CardHeader>
            <CardBody>
            <CardTitle tag="h5">
                { description }
            </CardTitle>
            <CardText>
                Link:&nbsp;
                <a href={link} target="_blank" className="parking-lot-item-anchor">
                { link }
                </a>
            </CardText>
            </CardBody>
        </Card>
    );
}
