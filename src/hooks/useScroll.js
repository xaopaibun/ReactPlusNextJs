import { useEffect, useState } from "react";

export const useScroll = () => {
  const [data, setdata] = useState(0);
  useEffect(() => {
    const handleScroll = () => setdata(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () =>{
        window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return { data };
};
