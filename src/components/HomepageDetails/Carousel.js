import React, { useEffect, useRef } from "react";

const Carousel = ({ items, inte     <div
        key={index}
        style={{
          flex: "0 0 33.33%",
          width: "23.33%",
          height:"0px"
          // Add styles specific to the middle item
        }}
      >
        {item}
      </div>
    );
  } else {
    // Render other items
    return (
      <div
        key={index}
        style={{
          flex: "0 0 33.33%",
          width: "23.33%",
        
        }}
      >
        {item}
      </div>
    );
  }
})}

      </div>
    </div>
  );
};

export default Carousel;
