import React from 'react'

export default class Header extends React.Component {
  constructor(props, context) { 
    super(props, context);  
  }
  render() {
    return (
      <h3>{this.props.headerText}</h3>
    );
  }
}
