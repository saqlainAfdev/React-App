import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isload, setIsLoad] = useState(true);
    const [myErr,setIsErr] = useState(null);        
    useEffect(() =>{
      const abortConst = new AbortController();
        setTimeout(() => {
          fetch(url,{signal:abortConst.signal})
        .then( res =>{
          if(!res.ok){
            throw Error("Error Could not fetch data from that resource");
          }
         return res.json(); 
        })
        .then(data =>{
        setData(data);
          setIsLoad(false);
          setIsErr(null);
        })
        .catch(error =>{
          if(error.name === 'AbortError'){
            console.log('Fetch aborted');
          }
          else {
            setIsErr(error.message);
            setIsLoad(false);
          }          
        })
        }, 1000);
        return ()=> abortConst.abort();
      }, [url]);   

    return {data,isload,myErr};
}
 
export default useFetch;