import React, { useState } from "react";
import classes from "./Accordion.module.css";

const Accordion = (props) => {
  const [questions, setQuestions] = useState(
    props.questions.map((el) => ({ ...el, show: false }))
  );

  const showAnswer = (e, selectedIndex) => {
    e.preventDefault();
    
    // Toggle the 'show' property only for the clicked element
    const newQuestions = questions.map((el, i) =>
      i === selectedIndex 
        ? { ...el, show: !el.show }  // Toggle for the clicked item
        : { ...el, show: false }      // Set others to false
    );
    console.log(selectedIndex)
    setQuestions(newQuestions);
  };

  

  return (
    <div className={classes.main}>
      {questions.map((el, index) => {
        return (
          <div className={classes.quest} index={index} key={el.key}>
            <h3 onClick={e=>showAnswer(e,index-=1)} index={index} className={classes.question}>
              <span>{(index += 1)}</span>
              {el.question} 🔽
              
            </h3>
            <h5 className={el.show?classes.answer:classes.hide}>{el.answer}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
