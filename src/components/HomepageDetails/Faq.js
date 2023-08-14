import { useState,useEffect } from "react";

const FaqSection = () => {

eight:"bold",textAlign:"left",paddingLeft:'30px',paddingLeft:isSmallScreen?'10px':'30px',fontSize:isSmallScreen?"16px":"16px"}}className="question-text">Yes, yes you can buy multiple products with you zeed account at the jewellery</div>)
          }
          <div   style={{fontSize:"25px" }} className="plus-icon">{expandedAnswers[4] ? '-' : '+'}</div>
        </div>
      </div>


      {/* Repeat the above structure for other FAQ questions */}
    </div>
  );
};

export default FaqSection;