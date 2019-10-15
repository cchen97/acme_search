import React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

export default class Calendar extends React.Component {
  renderCard (d) {
    return (
      <Card>
        <CardBody>
          <CardTitle>Title: {d.title}</CardTitle>
          <CardSubtitle>Invitees: {d.invitees}</CardSubtitle>
          <CardText>Date: {d.date}</CardText>
        </CardBody>
      </Card>
    )
  }
  render() {
    return (
      <CardDeck>
        <div className="bg-info clearfix" style={{ padding: '.5rem', color: "white", marginBottom: '5vh' }}>Calendar Results</div>
        {this.props.data.length > 0 ? (this.props.data.map((d) => this.renderCard(d))) : null}
      </CardDeck>
    )
    }
}
  