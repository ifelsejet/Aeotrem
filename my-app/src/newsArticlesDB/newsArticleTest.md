/* Author: Korre D. Henry

This md file serves as a guide for how one might interact with the array of 
article objects that are stored in the file named "newsArticleDB".


*/
##You can import this object by the writing the following
import { newsArticleDB } from "./newsArticlesDB/newsArticlesDB";
    

<div className="App">

    ##Below is a simple example of how one might interact with this newsArticleDB object
    ##Refer to the actual  file via the local file path for further verification of the 
    ## object's attributes.
    {
        newsArticleDB.Articles.map((data: any) =>{
        return (
                <p>Article Headline: {data.Headline} </p>
               )
        }) 
    }

</div>