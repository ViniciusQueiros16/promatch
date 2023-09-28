import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function Tabs({ children }) {
  //select tabItems
  const tabItemsRef = useRef(null);

  const [currentTab, setCurrentTab] = useState(0);

  const handleNextTab = () => {
    setCurrentTab((prevTab) => Math.min(prevTab + 1, children.length - 1));
  };

  const handlePrevTab = () => {
    setCurrentTab((prevTab) => Math.max(prevTab - 1, 0));
  };

 
  //show first tab-item
  useEffect(() => {
    let allItems = [...tabItemsRef.current.children];
    allItems[0].classList.remove("hidden");
  }, []);

  return (
    <div className="relative">
      <ul className="mb-0 flex list-none border-b border-gray-200 dark:border-gray-700 items-center space-x-4 pl-0">
        {children.map((item, index) => (
          <li
            key={index}
            className={` m-0 cursor-pointer rounded px-8 py-3 font-bold border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-600  text-dark dark:text-darkmode-light dark:hover:text-gray-300 ${
              index === currentTab && "active-tab"
            }`}
            onClick={() => setCurrentTab(index)}
          >
            {item.props.name}
          </li>
        ))}
      </ul>
      <ul className="m-4 list-none rounded bg-transparent border p-6 " ref={tabItemsRef}>
        {children[currentTab]}
      </ul>

      <div className="flex justify-between m-4">
        <Button className="btn btn-primary" onClick={handlePrevTab} disabled={currentTab === 0}>Anterior</Button>
        {currentTab === children.length - 1 ? (
          <Button className="btn btn-primary" onClick={handleNextTab} >Send</Button>
        ):(
          <Button className="btn btn-primary" onClick={handleNextTab} >Próximo</Button>
        )}
        
      </div>
    </div>
  );
}

export default Tabs;
