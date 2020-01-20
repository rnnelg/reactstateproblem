import React, { useState, useContext } from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { QuestionContext } from '../contexts/QuestionContext';

const SortableItem = SortableElement(({ value }) =>
  <li>{value.name}</li>
);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const SortableComponent = (props) => {

  const { actions } = useContext(QuestionContext);
  const [ items, setItems ] = useState(props.questionAnswer);

  const interpretAnswer = () => {

    let result = "false";

    var i;
    for (i = 0; i < items.length; i++) {
      if (items[i].value === (i + 1)) {
        result = "true";
      } else {
        result = "false";
        break;
      }
    }

    console.log(result);
    

    return result;

  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(
      arrayMove(items, oldIndex, newIndex)
    );
    console.log(items);
    
  };

  return (
    <div>
      <SortableList items={items}
        onSortEnd={({ oldIndex, newIndex }) => {
          onSortEnd({ oldIndex, newIndex });
          actions.answerEntered(interpretAnswer());
        }}
        lockAxis={"y"} />
    </div>
  );
}

export default SortableComponent;