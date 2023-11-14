
import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { MainBanner } from "./MainBanner";




export const Home = () => {

        /* nowPlaying(); 
    console.log ___output____error ==== you need a promise 
    => use useEffect*/

    //1. mount ___ api request
    //2. asynchronized connection // need to use in const form== ----'  wait ----async // await ---- awaiting element '
    //3. handle expection case

    const [nowPlayingData, setNowPlayingData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            try {
                const { results } = await nowPlaying();  
                setNowPlayingData(results);    
                
                setIsLoading(false);

            } catch(error) {
                console.error("Error :" + error);
                /* console.log(isLoading); */
            }
            
}) ();
    }, []);

    //console.log(nowPlayingData);


    return (
    
        <>
            {isLoading ? (
                "loading..."
            ) : (
                    <>{nowPlayingData && <MainBanner data ={nowPlayingData[0]}/>}</>
            )}
        
        </>
    );
};