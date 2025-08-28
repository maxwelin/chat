import { useEffect, useState } from "react";
import { loadingMessagePlaceholders } from "../../constants/loadingMessagePlaceholders";

const Row = ({ text }: {text: string}) => {

  const [showMessage, setShowMessage] = useState(false)

  const loadingPlaceholder = loadingMessagePlaceholders[Math.floor(Math.random() * loadingMessagePlaceholders.length - 1)];

   const rnd = Math.floor(Math.random() * 2000);
    
      useEffect(() => {
         const timer = setTimeout(() => {
          setShowMessage(true)
        }, rnd);
        
        return () => clearTimeout(timer);
      }, [])
  
  return(
    <>
    {showMessage ? (<>
    <pre className="py-0.5">{text}</pre>
    </>) : (<>
      <p className={`py-0.5 max-h-[28px] min-h-[28px] text-green-500 animate-pulse`}>{loadingPlaceholder}</p>
    </>)}
    </>
  );
};

export default Row;