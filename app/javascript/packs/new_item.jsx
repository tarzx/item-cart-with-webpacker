import React from 'react'

export default class NewItem extends React.Component {
  handleSubmit(e) {
    var name = e.target.elements.name.value;
    var description = e.target.elements.description.value;
    axios.post('/api/v1/items.json', {
      name: name,
      description: description
    })
    .then((response) => {
      if (response != null) {
        this.props.handleSubmit(response.data);
        this.itemForm.reset();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    e.preventDefault();
  }
 
  render() {
    return (
        <div>
            <form ref={(el) => {this.itemForm = el}} onSubmit={this.handleSubmit.bind(this)}>
              <input name='name' placeholder='Enter the name of the item' />
              <input name='description' placeholder='Enter a description' />
              <input type="submit" value="Submit" />
            </form>
        </div>
    )
  }
}
