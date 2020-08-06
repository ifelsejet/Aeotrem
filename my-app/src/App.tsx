/* Founding Editor: Korre D. Henry

Purpose: This file uses React Routing to route a user to a specified url path
and render the content respectively.



Url Schema: 
     
    Static Rendering:
      
      Rendering Dependencies: The comoponent created for the home page and the Visualize Page.
      /home  -- will render a home page component.
      /Visualize -- will render a Page dedicated to Data Visualization of content.
      
    Dynamic Rendering: 

      Rendering Dependencies: data retrieved from the newsArticleDB file.
      /topic/TopicName -- will render a Page related to the Topic query with a list
                          of associated articles.
      
      /article/ArticleNum -- will render a Page related to the specified article number.

      /any Params  -- if no valid url paths are given, will route user back to the 
                      /topic/Latest page as default.

Routing Dependencies: { BrowserRouter as Router, Route} must be imported in order to 
                      use Router. Need to install React Router 
                      by saying: $ npm install --save react-router-dom

*/
// Things
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {newsArticleDB} from "./newsArticlesDB/newsArticlesDB";
import TopicPage from "./TopicComponent/TopicPage";
import NavBars from "../src/NavBars/Nav-SideBar";

import TestArticlePage from "./TestArticle/TestArticle";
import {ArticlePages} from "./ArticlePages/ArticlePages"
import ArticleNav from "./TopicComponent/ArticleNav";
import Box from '@material-ui/core/Box';
import VisualizePage from "../src/TextAnalytics/SentimentAnalysisCategetory/SentimentAnalysisPage";
import PullOutBar from "./NavBars/Nav-TopSideBar";

function App() {
    window.scrollTo(0,0);
    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <div>
                <Router>
                    <Switch>
                        <Route exact path={"/Visualize"} render={() => 
                        <div>
                          <ArticleNav />
                            <PullOutBar position={'-210px'}/>
                          <VisualizePage />
                        </div>
                        }/>
                        <Route exact path={`/topic/:TopicName`} render={
                            props => {
                                const topicName = props.match.params.TopicName;
                                const topicString = newsArticleDB.Topics.find(
                                    topics => topics.toLowerCase() === topicName.toLowerCase());
                                if (topicString) {
                                    return (
                                        <div>
                                            <TopicPage topic={topicString + " News"}/>
                                            <div style={{display: "flex", boxShadow: "none"}}>
                                                <div style={{padding: "0px", marginTop: "1px", boxShadow: "none"}}>
                                                    <NavBars/>
                                                </div>
                                                <TestArticlePage name={topicString} articles={newsArticleDB.Articles}/>
                                            </div>
                                        </div>
                                    )
                                }
                                return <h1> Topic Not Found: {topicName}</h1>
                            }}/>
                        <Route exact path={`/article/:ArticleNum`} render={
                            props => {
                                const articleID = parseInt(props.match.params.ArticleNum);
                                const article = newsArticleDB.Articles.find(
                                    articles => articles.ArticleID === articleID);
                                if (article) {
                                    return (
                                        <div>
                                            <ArticleNav header={article.TopicName} topic={""}
                                                        logo={article.ProviderLogo}/>
                                            <div style={{display: "flex", boxShadow: "none"}}>
                                                <ArticlePages data={article}/>
                                            </div>
                                        </div>
                                    );
                                }
                                return <h1> Article Not Found: {articleID}</h1>
                            }}/>
                        <Redirect to="/topic/Latest"/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
