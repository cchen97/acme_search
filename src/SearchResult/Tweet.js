import React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

export default class Tweet extends React.Component {
  renderCard (d) {
    return(
        <Card>
          <CardBody>
              <CardSubtitle>User: {d.user}</CardSubtitle>
              <CardTitle>Message: {d.message}</CardTitle>
              <CardText>Time: {d.timestamp}</CardText>
          </CardBody>
        </Card>
    )
  }
  render() {
    return (
      <CardDeck>
        <div className="bg-info clearfix" style={{ padding: '.5rem', color: "white", marginBottom: '5vh' }}>Tweet Results</div>
        {this.props.data.length > 0 ? this.props.data.map((d) => this.renderCard(d)) : null}
      </CardDeck>
    )
    }
}