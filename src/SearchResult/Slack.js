import React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

export default class Slack extends React.Component {
  renderCard (d) {
    return(
        <Card>
        <CardBody>
            <CardTitle>Channel: {d.channel}</CardTitle>
            <CardSubtitle>Author: {d.author}</CardSubtitle>
            <CardText>Message: {d.message}</CardText>
            <CardText>Time: {d.timestamp}</CardText>
        </CardBody>
        </Card>
    )
  }
  render() {
    return (
      <CardDeck>
        <div className="bg-info clearfix" style={{ padding: '.5rem', color: "white", marginBottom: '5vh' }}>Slack Results</div>
        {this.props.data.length > 0 ? this.props.data.map((d) => this.renderCard(d)) : null}
      </CardDeck>
    )
    }
}