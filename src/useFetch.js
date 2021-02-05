import {useEffect,useState} from 'react';

const useFetch=(url)=>{

     const [data,setdata]=useState(null);
    const [isPending,setIsPending]=useState(true);

    useEffect(()=>{
     
         setTimeout(() => {
                  fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setdata(data);
            setIsPending(false);
        })
        .catch((err)=>{console.log(err)})
         }, 2000);

    },[url])

    return {data,isPending}
}
export default useFetch;