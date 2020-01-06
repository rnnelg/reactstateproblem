import React from 'react';
import Question from './Question';
import AnswerInput from './AnswerInput';


interface IResult {
  key: Number,
  result: string
}

let result1: IResult  = {
  key: 1,
  result: "true"
}

let result2: IResult  = {
  key: 2,
  result: "true"
}

let results = {
  result1,
  result2
};

const interpretAnswer2 = (inputValue: any) => {

  let result = "false";

  //if (this.state.questionAnswer.value.toLowerCase() === inputValue.toLowerCase()) {
  if ("tom" === inputValue.toLowerCase()) {
    result = "true";
  } else {
    result = "false";
  }

  return result;
  
}

/*


var answerInputs = [ 
	{ key: "1", result: "true" }, 
	{ key: "2", result: "true" }, 
	{ key: "3", result: "true" }, 
	{ key: "4", result: "true" }, 
	{ key: "5", result: "true" }, 
	{ key: "6", result: "true" } 
];

console.log(answerInputs);


var answerInput = answerInputs.filter(function (answerInput) {
	return answerInput.result === "false";
});

console.log(answerInput);





let products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];
function listProducts(prods) {
  let product_names = [];
  for (let i=0; i<prods.length; i+=1) {
   product_names.push(prods[i].name);
  }
  return product_names;
}
console.log(listProducts(products));
function totalValue(prods) {
  let inventory_value = 0;
  for (let i=0; i<prods.length; i+=1) {
    inventory_value += prods[i].inventory * prods[i].unit_price;
  }
  return inventory_value;
}
console.log(totalValue(products));
*/

const FillInTheBlanksQuestion = (serializedQuestion: any) => {
  return(
    <div>
      <Question text={serializedQuestion.question} />
      {serializedQuestion.answers.map( (answer: any) =>
        <AnswerInput 
          questionAnswer={answer}
          key={answer.id.toString()}
          interpretAnswer2={interpretAnswer2}
        />  
      )}
    </div>
  );  
}

export default FillInTheBlanksQuestion;
