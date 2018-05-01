import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Body from './body'

class Main extends React.Component { 
  render() { 
    return (
    	<div>
  	    <Header headerText='Item List' />
        <Body />
      </div>
    ); 
  } 
} 


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})
