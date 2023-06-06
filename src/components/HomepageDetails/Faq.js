import { useState,useEffect } from "react";

const FaqSection = () => {


  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [expandedAnswers, setExpandedAnswers] = useState([]);
  const[onn1,setonn1]=useState(true)
  const[onn2,setonn2]=useState(true)
  const[onn3,setonn3]=useState(true)
  const[onn4,setonn4]=useState(true)
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
  
      const handleMediaQueryChange = (event) => {
        setIsSmallScreen(event.matches);
      };
  
      mediaQuery.addListener(handleMediaQueryChange);
      setIsSmallScreen(mediaQuery.matches);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);


 
  const toggleAnswer = (index) => {
    
    const stateVariable = `onn${index}`;
    const newStateValue = !eval(stateVariable);
    eval(`set${stateVariable}(newStateValue)`);

    const newExpandedAnswers = [...expandedAnswers];
    newExpandedAnswers[index] = !newExpandedAnswers[index];
    setExpandedAnswers(newExpandedAnswers);
  };

  return (
    <div  style={{paddingBottom:"60px",backgroundColor:"#FAF9ED", fontFamily: 'g-light'}} className="faq-container">
      <h6 style={{fontWeight:"bold",fontSize:"29px",paddingTop:"50px",paddingBottom:"20px",fontFamily:"g-bold"}} className="faq-heading">FAQ's</h6>

      <div className="faq-question">
        <div  style={{borderRadius:"8px",backgroundColor:"white",padding:"10",left:"0"}} className="question-container" onClick={() => toggleAnswer(1)}>
          {onn1 ? (<div  style={{fontWeight:"bold",textAlign:"left",paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"16px":"16px",paddingTop:"10px"}}className="question-text">Why Should I use Zeed?</div>)
           :
           (<div  style={{fontWeight:"bold",textAlign:"left",paddingLeft:'30px',paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"21px":"16px",
           transition:"opacity 1s ease in out"
           
           }}className="question-text">Zeed simplifies online payment for saving schemes and offers a secure platform to buy gold through savings plans</div>)
          }
          <div   style={{fontSize:"25px"}} className="plus-icon">{expandedAnswers[1] ? '-' : '+'}</div>
        </div>
      </div>
          
          
      <div className="faq-question">
        <div  style={{borderRadius:"8px",backgroundColor:"white",padding:"10",left:"0"}} className="question-container" onClick={() => toggleAnswer(2)}>
          {onn2 ? (<div  style={{fontWeight:"bold",textAlign:"left",paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"16px":"16px"}}className="question-text">What is the minimum amount that i need to set aside every month?</div>)
           :
           (<div  style={{fontWeight:"bold",textAlign:"left",paddingLeft:'30px',paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"21px":"16px"}}className="question-text">you can start a plan of purchase with minimum amount of $1,000 every month</div>)
          }
          <div   style={{fontSize:"25px",paddingLeft:"30px"}} className="plus-icon">{expandedAnswers[2] ? '-' : '+'}</div>
        </div>
      </div>
       
      <div className="faq-question">
        <div  style={{borderRadius:"8px",backgroundColor:"white",padding:"10",left:"0"}} className="question-container" onClick={() => toggleAnswer(3)}>
          {onn3 ? (<div  style={{fontWeight:"bold",textAlign:"left",paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"16px":"16px"}}className="question-text">When can i redeem my purchase plan?</div>)
           :
           (<div  style={{fontWeight:"bold",textAlign:"left",paddingLeft:'30px',paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"16px":"16px"}}className="question-text">Get your jewels from your jewellery securely after scheme completion</div>)
          }
          <div   style={{fontSize:"25px"}} className="plus-icon">{expandedAnswers[3] ? '-' : '+'}</div>
        </div>
      </div>


     
     
      <div className="faq-question">
        <div  style={{borderRadius:"8px",backgroundColor:"white",padding:"10",left:"0"}} className="question-container" onClick={() => toggleAnswer(4)}>
          {onn4 ? (<div  style={{fontWeight:"bold",textAlign:"left",paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"16px":"16px"}}className="question-text">Can i buy multiple products while redeeming?</div>)
           :
           (<div  style={{fontWeight:"bold",textAlign:"left",paddingLeft:'30px',paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"16px":"16px"}}className="question-text">Yes, yes you can buy multiple products with you zeed account at the jewellery</div>)
          }
          <div   style={{fontSize:"25px" }} className="plus-icon">{expandedAnswers[4] ? '-' : '+'}</div>
        </div>
      </div>


      {/* Repeat the above structure for other FAQ questions */}
    </div>
  );
};

export default FaqSection;