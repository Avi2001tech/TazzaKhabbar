import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,author,date } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem",display: 'flex',alignItems: 'center',justifyContent: 'center', }}>
          <Card.Img
            variant="top"
            src={!imageUrl?"https://c.biztoc.com/p/2c3162ae4b5234dc/og.webp":imageUrl}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <footer className="blockquote-footer">Author: <cite title="Source Title">{author}</cite></footer>
            <Button href={newsUrl} target="_blank" variant="success" md={{ span: 3, offset: 3 }}>Read More</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{new Date(date).toGMTString()}</Card.Footer>
        </Card>
      </div>
    );
  }
}
