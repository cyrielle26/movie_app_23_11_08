
import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import { MainBanner } from "./MainBanner";
import { ShowMovie } from "./ShowMovie";
import { Loading } from "../../components/Loading";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";



export const Home = () => {

        /* nowPlaying(); 
    console.log ___output____error ==== you need a promise 
    => use useEffect*/

    //1. mount ___ api request
    //2. asynchronized connection // need to use in const form== ----'  wait ----async // await ---- awaiting element '
    //3. handle expection case

    const [nowPlayingData, setNowPlayingData] = useState();
    const [popData, setPopData] = useState();
    const [topData, setTopData] = useState();
    const [upData, setUpData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    
    useEffect(() => {
        (async () => {
            try {
                const { results : nowResults } = await nowPlaying();  
                setNowPlayingData(nowResults);    

                const { results: popResults } = await popular();
                setPopData(popResults);
                //results same name
                //pr distinguer rajouter results: other name

                const { results: topResults } = await topRated();
                setTopData(topResults);

                const { results: upResults } = await upComing();
                setUpData(upResults);



              /*   const { results: upResults } = await upComing();
                setTopData(upResults); */

                setIsLoading(false);

            } catch(error) {
                console.error("Error :" + error);
                /* console.log(isLoading); */
            }
            
}) ();
    }, []);

    //console.log(nowPlayingData);
    //console.log(popData);


    return (
    
        <>
            {isLoading ? (
                <Loading/>
                   
             
            ) : (
                <div>
                    {nowPlayingData && (
                            <>
                                <PageTitle titleName={"Home"}/>
                            <MainBanner data={nowPlayingData[0]} />
                                <Layout>

                                <ShowMovie titleName={"Now Playing"} movieData={nowPlayingData} />
                                <ShowMovie titleName={"Popular"} movieData={popData} />      
                                <ShowMovie titleName={"Top rated"} movieData={topData} />      
                                <ShowMovie titleName={"Up Coming"} movieData={upData} /> 
                                    
                                </Layout>
                        </>
                    )}
                </div>
            )}
        
        </>
    );
};