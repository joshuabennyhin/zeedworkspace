const styles = {
   
    item: {
      width: "250px",
      height: "250px",
      flexShrink: 0
    },
    itemSnapPoint: {
      scrollSnapAlign: "start"
    },
  
  };
  
const CarouselItem = ({ isSnapPoint, children }) => (
    <li
      style={{
        ...styles.item,
        ...(isSnapPoint ? styles.itemSnapPoint : {})
      }}
    >
      {children}
    </li>
  );


  export default CarouselItem;


