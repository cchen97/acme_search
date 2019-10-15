import React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

export default class Contacts extends React.Component {
  renderCard (d) {
    return(
        <Card>
          <CardBody>
              <CardTitle>Name: {d.name}</CardTitle>
              <CardSubtitle>Company: {d.compnay}</CardSubtitle>
              <CardText>Email: {d.emails.map((d) => this.renderInfo(d))}</CardText>
              <CardText>Phone: {d.phones.map((d) => this.renderInfo(d))}</CardText>
              <CardText>Last contact: {d.last_contact}</CardText>
          </CardBody>
        </Card>
    )
  }

  renderInfo(e) {
    return (
        <CardText>{e}</CardText>
    )
  }
  render() {
    return (
      <CardDeck>
        <div className="bg-info clearfix" style={{ padding: '.5rem', color: "white", marginBottom: '5vh' }}>Contacts Results</div>
        {this.props.data.length > 0 ? this.props.data.map((d) => this.renderCard(d)) : null}
      </CardDeck>
    )
    }
}