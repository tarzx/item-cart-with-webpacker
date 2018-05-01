  import React from 'react'

  export default class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {
        editable: false
    };
  }
 
  handleEdit(e) {
    if(this.state.editable) {
      var id = this.props.item.id;
      var name = e.target.elements.name.value;
      var description = e.target.elements.description.value;
      var item = {id: id, name: name, description: description};
      this.props.handleUpdate(item);
    }
    this.setState({editable: !this.state.editable})
    e.preventDefault();
  }
 
  render() {
    var name = this.state.editable ? 
      <input type='text' name='name' defaultValue={this.props.item.name} /> : 
      <span>{this.props.item.name}</span>;
    var description = this.state.editable ? 
      <input type='text' name='description' defaultValue={this.props.item.description} /> : 
      <span>{this.props.item.description}</span>;
    return (
      <div>
        <form onSubmit={this.handleEdit.bind(this)}>
          <h3>{name}</h3>
          <p>{description}</p>
          <button type='submit'>{this.state.editable ? "Submit" : "Edit"}</button>&nbsp;
          <button type='button' onClick={this.props.handleDelete}>Delete</button>
        </form>
      </div>
    );
  }
}
