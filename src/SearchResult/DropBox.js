import React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

export default class Dropbox extends React.Component {
  renderCard (d) {
    return(
        <Card>
          <CardBody>
              <CardTitle>Title: {d.title}</CardTitle>
              <CardSubtitle>Path: {d.path}</CardSubtitle>
              <CardText>Shared with: {d.shared_with.map((d) => this.renderInfo(d))}</CardText>
              <CardText>Created: {d.created}</CardText>
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
        <div className="bg-info clearfix" style={{ padding: '.5rem', color: "white", marginBottom: '5vh' }}>Dropbox Results</div>
        {this.props.data.length > 0 ? this.props.data.map((d) => this.renderCard(d)) : null}
      </CardDeck>
    )
    }
}