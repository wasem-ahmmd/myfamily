import react from "react";

type Props = {
    className?: string
    children?: React.ReactNode
  }
  
  function Card(props: Props) {
    const { className, children } = props;
    return (
      <div className={`relative flex  border shadow-lg rounded-md ${className}`}>
        {children}
      </div>
    );
  }
  
  export default Card;