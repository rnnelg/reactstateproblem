import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { Consumer } from '../contexts';

const SortableItem = SortableElement(({value}) =>
  <li>{value.name}</li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  
  state = {
    items: this.props.questionAnswer,
  };

  interpretAnswer = () => {

    let result = "false";

    var i;
    for (i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].value === (i + 1)) {
        result = "true";
      } else {
        result = "false";
        break;
      }
    }
    
    return result;

  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };

  render() {
    return (
      <Consumer>
        { ({actions}) => {
          return(
            <div>
              <SortableList items={this.state.items} 
                onSortEnd={({oldIndex, newIndex}) => {
                  this.onSortEnd({oldIndex, newIndex});
                  actions.answerEntered(this.interpretAnswer());
                }} 
                lockAxis={"y"} />
            </div>  
          );
        }}
      </Consumer>
    
    );
  }
}

export default SortableComponent;