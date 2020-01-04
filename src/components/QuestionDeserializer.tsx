import questions from '../data/Questions';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import FillInTheBlanksQuestion from './FillInTheBlanksQuestion';
import OrderingQuestion from './OrderingQuestion';

const QuestionDeserializer = (props: any)  => {

  let serializedQuestion = questions[props.questionNumber];
  let deserializedQuestion: any;

  switch(serializedQuestion.type) {
    case "MultipleChoiceQuestion":
      deserializedQuestion = new MultipleChoiceQuestion({serializedQuestion: serializedQuestion}).render();
      break;
    case "TrueFalseQuestion":
      deserializedQuestion = TrueFalseQuestion(serializedQuestion);
      break;
    case  "FillInTheBlanksQuestion":
      deserializedQuestion = FillInTheBlanksQuestion(serializedQuestion);
      break;
    case  "OrderingQuestion":
      deserializedQuestion = OrderingQuestion(serializedQuestion);
      break;
    default:
      break;
  }

  return(deserializedQuestion);
}

export default QuestionDeserializer;