import React from 'react';
import { Badge } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Badge color="primary">Outdor</Badge>
      <Badge color="secondary">Home</Badge>
      <Badge color="success">Single</Badge>
      <Badge color="danger">company</Badge>
      <Badge color="warning">sport</Badge>
      <Badge color="info">board game</Badge>
      <Badge color="light">strategy</Badge>
      <Badge color="dark">education</Badge>
    </div>
  );

}

export default Example;
