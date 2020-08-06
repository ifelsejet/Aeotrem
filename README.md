
# Aetrom

## Problem statement

People want quick access to reliable information online, but fact-checking and identifying bias is time-consuming. Most people believe that incorrect information and bias are the key contributors to misinformation.  

## Summary

Misinformation is a significant issue today. People want quick access to reliable information online, but do not have time to check and remove bias from the information that they are receiving. This platform will give users quick access to online news articles. Our site will help decrease misinformation amongst online news articles and help alleviate this by having tools that will analyze each article with different features such as data visualization, confidence score, key phrase analysis, and an expertise opinion.  

## Customer Profile

* Who: Conscious Consumers who want access to credible information online? In a survey conducted by Team 42, 24% of users identified as Conscious Consumers, 19% of the users identified as Organized Curious Learners, and 14% of the user identified as Immersed learners. We determined that these groups have many characteristics in common, so we decided to encapsulate them all as Conscious Consumer summing up to 57% of our sample. Team 42 believes that a conscious consumer is a user who is mindful of what type of information they access. 

* What: Users believe the information they access online has some bias. Users believe that their information is not credible.    

* Where: locally, as well as globally.   

* Why: People think that misinformation is a serious issue today.   
  * 98.1% of users believe that misinformation is a serious issue today.   
  * 81% of users reported that they sometimes trust the source that provides their information.   
  * 77% of users think that they can check if the information is legitimate.   
  * 55% of users trust some type of online source to get their information.  

* How: By providing users with supplemental expert opinion as well as another way to identify bias in news (via Sentiment Analysis etc.) 

## Customer Stories 

Aaron is a financial advisor. It is important for him to stay up-to-date with recent finance news during the COVID-19 pandemic. He finds it hard to find the time to do research and validate the news articles that he reads on a day to day basis. He hopes to find a way to quickly access articles with experts’ opinions that help him better advice his clients.   

Yevette is a college student who wants to inform herself about the upcoming national and local elections. She struggles to identify bias in politics articles that she reads. She wants to be able to know what people and experts think about certain articles.  

Megan is a busy mother who barely has time to know what is happening in the world. She hopes to find a way to quickly catch up with the latest news and have a full picture of the facts. 

## Goals

* Distinguish bias in news articles   
* Access the latest news information and sorted by topics   
* Show users a different perspective 

## In-Scope

* P0: Users should be able to see a list of the latest news articles and access multiple articles from various news platforms about a specific topic.    
* P0: Users should be able to click and read a news article from the list of latest news.  
* P0: Users should have access to sentiment analysis relating to a specific article.    
* P0: Users should be able to browse and interact with our platform by liking articles or voting on the trustworthiness of an article without creating an account. 
* P1: Users should be able to see a list of news topics of several categories that they can click on  
* P1: Users should have access to expert feedback & opinion regarding a specific article and view the supporting evidence (proper citations)     
* P2: Users should have access to data visualization from sentiment analysis relating to a specific topic.    
* P2: Users should be able to see a list of related articles at the end of an article.    
* P2: Users should be able to vote on whether they agree with sentiment analysis or not. 

## Out-of-Scope

* Users should be able to create an account.   
* Users should be able to personalize their experience with topics they deem relevant.   
* Users should be able to search for a topic or article.  
* Users should be able to see the popular and unpopular opinion. 

## Global Methodology References 
News Article Database Schema: 

URL Schema: 
Home Page: /home 
Article Page: /article/{article_Id} 
Topic News: /topic/{topicName} 
Data Visualization: /dataexplorer 

## UX

*This spec just includes UX for the P0 items as part of the team practice project. Final specs should include UX for all listed user stories*

YourShare is first being built as a large screen application. The success of YourShare depends on community adding items. From user feedback we found this is best done from a larger screen device with a keyboard. There is also a high density of information that's best displayed on a larger screen.

The image assets are in the [YourShare-screens](YourShare-screens) folder - icon, upload, blender.

When a user navigates to your share, they land on the landing page to sign-up or sign-in. If the user is already signed in they will automatically land on the browse item page. The authentication is handled through the phone number and text confirmation.
![App landing page](YourShare-screens/YS_account.png)

This is the main screen of the app. It shows the items that can be borrowed. If is user is signed up through a friend invite, the screen displays items available within that circle of friends. From here, the user can access adding items, borrowing items, and managing friends and settings.
![Browse items](YourShare-screens/YS_browse.png)

This is the add item screen. It has the basic fields for a user to submit a new item. Uploading an image is a stretch goal, it starts a just a placeholder.
![Add item](YourShare-screens/YS_additem.png)

This is the borrow item screen. Selecting an item from the available list lands here. Items are only shown if available. The user requests to borrow and the lender gets a text to approve or deny. Again the image is a placeholder, stretch goal to add.
![Borrow item](YourShare-screens/YS_BorrowItem.png)

This is the screen to manage community. It allows the user to connect with new friends or invite new friends to the platform. It also has the key settings for using the app.
![Manage community](YourShare-screens/YS_managecommunity.png)

This screen describes the app navigation, how the screens of the app are connected. The central screen is the app landing page. Other screens lead back here.
![Navigation](YourShare-screens/YS_navigation.png)

## Breakdown of Work
 
User Story 1: Users should be able to see a list of latest news articles and access multiple articles from various news platforms about a specific topic.    
Assigned To: Korre, Jet 

When a user opens the Ae|trom home page, they will see a list of the latest news headlines & Articles. These headlines will include the article title, the article description, the article thumbnail, the article source, and the article publish date. 

When a user clicks on the title of an article, they are taken to that article’s page in Ae|trom. See User Story #2 for more details. 

Korre will be responsible for creating the UI component page for each Topic page to be rendered. Specifically, each list of news articles per Topic will live on this versatile UI component page. 

Korre will be responsible for creating a newsArticleDb.json file representing all the articles that are to be used for every list of articles per Topic. This file serves as a database for the app’s usage of lists of articles. The newsArticleDb.json file will have an interface enforced as such:  

Whenever the list of Articles is rendered, the app will gather the information from this newsArticleDb.json file before mounting.  Jet will be responsible for creating the news article container for all of the news article in newsArtlceDb.json file. The container will be populated from this file and it will be the main component that the user will click/scroll through. 

When the User is on the Home Page they will see Articles from different News Platforms and not just one specific source. Korre will be responsible for maintaining & partially creating the newsArticleDb.json file containing all news Article objects.  

Korre will also be responsible for ensuring that each Article object contains different sources about the same or relatively different topic. For example, one Article might be from CNN and another might be sourced from KGUN 9 News. Thereby, they are two different sources of information that will be rendered in the article UI component. 

Jet will also be working on the newsArticleDb.json file and finding different articles from different various new platforms to create more article objects that the team can use. 

User Story 2: User should be able to click and read a news article from the list of latest news. 
Assigned To: Korre, Eyobel 

Url Callout: 
/home 
/article/{articleid} 
/home 
/topic{topicid} 
/article page{articleid} 

When a User is on the Home Page, they will have multiple Articles to choose from. Each article will redirect them to a page displaying that Article info in more detail. 

Eyobel will be responsible for importing UI components made by Korre and Jet from the home page to the article page. This includes the top navigation and side navigation components.  

Eyobel will also be responsible for making new components to house the article name and the headlines that are like the one on the homepage. Eyobel will be scaffolding the topic container on the left side similar to how it’s displayed on the home page. 

Korre will be responsible for creating the Top Navigation component for this page. The Top Navigation component will have the ability to redirect the user back to the Home page. The Top Navigation will also include the App Logo & Name as well as header styling. 


User Story 3: Users should have access to sentiment analysis of contexts relating to a specific article.  
Assigned To: Cat

When a user is on Ae|trom’s article page, they will see the news article they clicked on from User Story 1 and 2. Next to the article, the user will see sentiment analysis for the article. This includes the confidence scores and key phrases extracted from the news article. 

Sofia will be responsible for the making the UI components that houses the Confidence Scores and Key Phrases.  

Cat will be responsible for part of the getting the newsArticleDb.json file from Korre. Cat will make 2 API POST calls from Microsoft Azure Cognitive Services: Sentiment Analysis API and Key Phrases API, while passing in newsArticleDb.json as the text to analyze. The text passed in will be raw a JSON object. Based on the articleId and topicId from the Article  

Cat will do these API calls on Postman to get a JSON response, and then save the response as newsSentiment.json and newsKeyPhrases.json. These 2 responses will then be added and saved under Korre’s Article object in newsArticleDb.json file, as a property of an Article object. Cat will be responsible for rendering the results in a list format and displaying them into the UI containers she made. 

User Story 4: Users should be able to browse and interact with our platform by liking articles or voting on the trustworthiness of such articles without creating an account.  
Assigned To: Sofia 

When the user is looking at an article, they can interact with our platform by voting. The way these features will be implemented is similar to each other. The liking feature would allow the user to express if they liked a certain article or not. The voting feature will allow the user to vote on whether they think an article is trustworthy.  

Sofia will make voting and liking buttons that will need to be set. The state of this React component needs to have a default count of zero to keep track of all the people liking or voting on certain article. We need to also add an event listener to update the state of the component every time the like or voting buttons are clicked on. 


User Story 5: Users should be able to see a list of news topics by category that they can click on.  
Assigned To: Korre, Jet 

When a User navigates to the Home Page, they will see a list of New Topics to choose from on the left-hand side. They will be able to click on a Topic to see a list of articles relating to that topic. 

Korre will be responsible for populating the newsArticleDb.json file (consisting of all the articles) with Article objects related to the Latest News, Sports, & Finance Topics. 

Korre is responsible for ensuring that each category on the side navigation component when clicked, will render a different list of articles depending on what Topic the User chooses. 

Once a user selects a topic, the news article container will refresh and display a new list of articles for the user to pick from. Jet will be responsible for this functionality.  

Jet will also be responsible for collecting articles related to: Politics, International and adding them as objects to our JSON file. 

User Story 6: Users should have access to expert feedback & opinion regarding a specific article and view the supporting evidence (proper citations) . 
Assigned To: Eyobel 

A user can scroll down to the bottom of every article and view an expert’s opinion from someone who’s verified in that news category. In the Expert Opinion section users will be able to see opinions from experts. The format that every comment or opinion will have is name of the expert, Title or credentials, comment, and supporting evidence that back up their comment. 

Eyobel will be responsible for creating a container that displays an expert's feedback opinion that will be displayed by Azure Cognitive after the person with expertise comments on the article. The comment will be stored in the Redux store. Create a mapStateToProps function that pulls out the data. Create a configuration file that defines all services that you want to run. Use a Compose file for the application’s services. Create a docker that defines each service.  

User Story 7: Users should have access to data visualization from sentiment analysis relating to a specific topic.   
Assigned To: Cat, Sofia 

When users are browsing Ae|trom, users should have a well-rounded understanding of how online misinformation is biased. This includes not just being able to read articles and see their sentiment analysis, but also seeing that analysis spread across news platforms and topics over a range of time. 

As in User Story 3, Cat will be using Microsoft Azure Cognitive Services: Sentiment Analysis API and KeyPhrases API, while passing in all articles in newsArticleDb.json as the text to analyze. Cat will do these API calls on Postman to get a JSON response, and then save the response as 2 new JSON files, allNewsSentiment.json and allNewsKeyPhrases.json.  

With the results over a range of time per news platform and topic, Cat will ask questions based on the data and display them in plots, graphs, charts using various charting and graphing tools. 

Data Visualization/Charting/Plotting Tool for React: D3 

Questions to Ask:  
What key phrases are most used for this topic? 
 * Visualization style: TBD 
 * Show frequency count for each key phrase 
 * Show time range 

Where do these key phrases come from? 
 * Visualization style: Scatter plot, Bar graph, TBD  
 * Show news sources that use these key phrases the most and frequency of them 
 * Show time range 

Top 5 news sources: 
* What is the trending sentiment score on an aggregate of their articles over time? 
  * Visualization style: Scatter plot or Stem plot 
  * Show time range 
* What are the most popular latest news topics in the last 24 hrs? Week? Month? Year? 
* What are the least popular latest news topics in the last 24 hrs? Week? Month? Year? 

User Story 8: Users should be able to see a list of related articles at the end of an article.  
Assigned To: Korre, Eyobel 

When reading an article, users will have related news articles in a list like format placed below based on the category and the topic the news article is about.  

Eyobel will be implementing a KeyPhrases API will be implemented that detects keywords from each news article and detects any other article that is similar in the same news category. Users will have the ability to click on the article and be directed at the article. 

Korre will be responsible for populating another (related Topics) jsonDb file (Database file) with various article objects related to a specific article object. 


User Story 9: Users should be able to vote on whether they agree with the sentiment analysis or not.  
Assigned To: Cat, Sofia 

Similar to User Story 4, a button react component will be reused to implement an additional voting feature. The users will have the option to vote on whether they agree with the results from the sentiment analysis feature. Like the voting feature in User Story 4, the results of the voting will be displayed in a user-friendly manner.  

Sofia will be reusing the react component formerly used in the article voting feature, and Cat will be displaying the voting results in a format that suits the data visualization side bar. 

## Compete Analysis

Competitors of Ae|trom today include:  

Claim Buster is a web-based automated, live fact-checking tool developed by University of Texas at Arlington. The tool relies on natural language processing and supervised learning (based on a human-coded dataset) to identify factual and false information. There is also an app available for Slack. 

The Global Disinformation Index is a web-based tool that rates news outlets based on the "probability of disinformation on a specific media outlet." This rating system will cover all types of media and will be a real time score. 

The Duke Live Fact Checking Tool is a browser extension that will provide live fact checking of information on television. It was assessed by the developers using user-based experiments. Users generally liked having the pop-ups generated by this tool, although they differed on whether they preferred getting a "rating" or just the raw information. 

PolitiFact is the winner of the Pulitzer Prize. PolitiFact is a website managed by editors and reporters from the Tampa Bay Times. This website rates the accuracy of claims by elected officials or any other personality speaking up about Politics.  

FactCheck.org is a project from the Annenberg Public Policy Center of the University of Pennsylvania that monitors the accuracy of what major US political parties say, so voters can have facts available and make an informed vote.  

FlackCheck is also a project from the Annenberg Public Policy Center of the University of Pennsylvania and is also a sister project of FactCheck.org. This website aims to help people identify flaws in ads.  

OpenSecrets.org “...the most comprehensive resource for federal campaign contributions, lobbying data and analysis available anywhere.” 

Snopes is a fact-checking website whose focus is to debunk popular rumors and myths. 

Captain Fact is a website dedicated to helping their users to develop a critical mind and improve their decision making. 

 
What makes us different from the competition is that we present data gathered from different articles and present them in a visual way to the user. Our platform also allows our users to voice their opinions with our voting feature which other sites do not have. Also, our users have access to the different views that experts have on different topics which means that the user is getting multiple expert perspectives instead of only one.   


## Strengths 

* Users can give input on their perspective and view what others think anonymously.   
* Users are presented with data to help them draw their own conclusions and help them exercise critical thinking.   
* Users can see experts’ opinions with supporting evidence on a specific topic or article.   
* Data visualization is presented to the user.   
* Users are given an opportunity to potentially improve Microsoft Sentiment Analysis.    

## Weaknesses 

* Lack of engagement from the user can cause insufficient results.   
* The content shown is dependent on the type of users that are using the platform.   
* Users are not able to interact with each other.   
* The current version of the site does not have ability to show any content with video or audio. 

## Opportunities  

* Create a network of experts that provides objective information for the general public. 
* Create a community of people that objectively seek the truth and who fight confirmation bias.  

## Threats 

* Anonymous users' bots to screw the data shown. 
* There is no way to safely ensure users will not vote more than once, in the current version. 
* There is no way to eliminate bots on the site, in the current version. 
* If user comments are added, there will be no moderator. 

## Future Opportunities   

* Expand target communities:  The release of Ae|trom focuses on conscious consumers that seek objective information. This group include people of all ages, ethnicity and background. 
* Partner with social media platforms to expand our platforms overall reach.  
* Finding people with expertise in an untapped/unpopular news category.   
* Resources will be available to experts to defend their opinions.   
* Show news articles by topic and categorized by their sentiment analysis: confidence scores and key phrases, so all views can be shown, not just popular opinion pieces. 

# Revenue Model     

* This platform will be a non-profit organization. 
* Subscription-based model 
* Ad revenues 
