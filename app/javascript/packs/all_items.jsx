import React from 'react'
import Item from './item'

export default class AllItems extends React.Component {
  handleUpdate(item) {
    this.props.handleUpdate(item);
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }
 
	render() {
    var items = this.props.items.map((item) => {
      return(
        <div key={item.id}> 
          <Item item={item} 
            handleDelete={this.handleDelete.bind(this, item.id)} 
            handleUpdate={this.handleUpdate.bind(this)} />
        </div>
      );
    });

		return (
			<div>
        {items}
      </div>
		);
	}
}
