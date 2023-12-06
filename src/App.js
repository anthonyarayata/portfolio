import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)"); // determines if the min width is less or above than 1060px

  useEffect(() => { // checks y axis if scroll is top of page
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // empty array makes sure that the use effect runs when the component is loaded

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        { isAboveMediumScreen && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />

      </div>
    </div>
    );
}

export default App;
