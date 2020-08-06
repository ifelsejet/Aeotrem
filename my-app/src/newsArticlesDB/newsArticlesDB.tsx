/* Founding Editor/Author: Korre D. Henry

Purpose: This file contains an Object that will be refrenced as the newsArticleDB object when used
globally. 

Usage:
The newsArticleDB object exported below contains two main attributes, 
     .Topics -- Denoting the list of string values of different topics
     .Articles -- Denoting the list of (Article) objects to be used as data when 
                  displaying data in any UI component as needed

Further Usages examples can be found on this directory in the newsArticleTest.md file.

*/

import {latestNewsArticles} from "./LatestNews";
import {sportsArticles} from "./SportsArticles";
import {financeArticles} from "./FinanceArticles";
import {politicsArticles} from "./PoliticsArticles";
import {internArticles} from "./InternationalArticles";
import {techArticles} from "./TechArticles";
import latestNewsPhrases from "../TextAnalytics/data/KeyPhrasesLatestNews.json"
import latestNewsSentiment from "../TextAnalytics/data/SentimentLatestNews.json"
import sportsPhrases from "../TextAnalytics/data/KeyPhrasesSports.json"
import intlPhrases from "../TextAnalytics/data/KeyPhrasesInternational.json"
import politicsPhrases from "../TextAnalytics/data/KeyPhrasesPolitics.json"
import techKeyPhrases from "../TextAnalytics/data/KeyPhrasesTech.json"
import SentimentTechArticles from "../TextAnalytics/data/SentimentTechArticles.json"
import financeKeyPhrases from "../TextAnalytics/data/KeyPhrasesFinance.json"
import SentimentFinanceArticles from "../TextAnalytics/data/SentimentFinanceNews.json"
import sportsSentiment from "../TextAnalytics/data/SentimentSports.json"
import politicsSentiment from "../TextAnalytics/data/SentimentPolitics.json"
import intlSentiment from "../TextAnalytics/data/SentimentInternational.json"


export const newsArticleDB = {

    "Topics": ["Latest", "Sports", "Finance", "Politics", "International", "Technology"],

    "Articles": [
        {
            "ArticleID": 1,
            "ReadMe": "Latest",
            "TopicName": "Latest",
            "Headline": "At 118 degrees, Thursday heat in Phoenix Breaks Daily Record set in 1934",
            "DatePublished": "July 30th, 2020",
            "siteUrl": "https://www.msn.com/en-us/weather/topstories/at-118-degrees-thursday-heat-in-phoenix-breaks-daily-record-set-in-1934/ar-BB17nOfN",
            "Source": "Arizona Republic on MSN.com",
            "ProviderLogo": "https://media.glassdoor.com/sqll/274065/arizona-republic-squarelogo-1535123934814.png",
            "description": latestNewsArticles.article1.text1,
            "Content": [latestNewsArticles.article1.text1, latestNewsArticles.article1.text2, latestNewsArticles.article1.text3],
            "Related": [latestNewsArticles.article2, latestNewsArticles.article3, latestNewsArticles.article4],
            "ImageUrl": "https://www.bing.com/th?id=ON.07710BB10C361828619F3624F3A5F9FB&pid=News",
            "Votes": {
                "yesVotes": 112,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 129,
            "KeyPhrases": latestNewsPhrases.KeyPhrases[0].keyPhrases,
            "SentimentAnalysis": latestNewsSentiment.SentimentAnalysis[0],
            "Experts": {
                "ExpertOpinions": [
                    {
                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."
                    },
                    {
                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."
                    }
                ]
            }
        },
        {

            "ArticleID": 2,
            "ReadMe": "Latest",
            "TopicName": "Latest",
            "Headline": "Trump Rows back on Delaying Election but not on Mail-In Ballots",
            "DatePublished": "July, 31st, 2020",
            "siteUrl": "https://www.usatoday.com/story/news/politics/2020/07/30/trump-hosts-coronavirus-briefing-after-floating-idea-election-delay/5547391002/",
            "Source": "USA Today",
            "ProviderLogo": "https://www.bing.com/th?id=AR_e1f4ddfe292e1858eda89344172946a9&pid=news",
            "Content":  [latestNewsArticles.article2.text1, latestNewsArticles.article2.text2, latestNewsArticles.article2.text3],
            "description": latestNewsArticles.article2.text1,
            "Related": [latestNewsArticles.article1, latestNewsArticles.article3, latestNewsArticles.article4],
            "ImageUrl": "https://www.bing.com/th?id=ON.5B778B0695CF560132C02D7BD547749F&pid=News",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 145,
            "KeyPhrases": latestNewsPhrases.KeyPhrases[1].keyPhrases,
            "SentimentAnalysis": latestNewsSentiment.SentimentAnalysis[1],
            "Experts": {
                "ExpertOpinions": [
                    {
                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."
                    },
                    {
                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."
                    }
                ]
            }

        },
        {
            "ArticleID": 3,
            "ReadMe": "Latest",
            "TopicName": "Latest",
            "Headline": "Florida Prepares for a Challenging Hurricane Season Amid COVID-19 Spike",
            "DatePublished": "July 31st, 2020",
            "siteUrl": "https://www.usnews.com/news/best-states/articles/2020-07-30/florida-prepares-for-a-challenging-hurricane-season-as-covid-19-cases-rise",
            "Source": "U.S. News & World Report",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9f4e7717a371a0a5e2bbf48b4ca76ed5&pid=news",
            "Content":  [latestNewsArticles.article3.text1, latestNewsArticles.article3.text2, latestNewsArticles.article3.text3],
            "description": latestNewsArticles.article3.text1,
            "Related": [latestNewsArticles.article2, latestNewsArticles.article1, latestNewsArticles.article5],
            "ImageUrl": "https://www.bing.com/th?id=ON.CC3ADEB2A55652C29A55197CBEB0A1CF&pid=News",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 246,
            "KeyPhrases": latestNewsPhrases.KeyPhrases[2].keyPhrases,
            "SentimentAnalysis": latestNewsSentiment.SentimentAnalysis[2],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 4,
            "ReadMe": "Latest",
            "TopicName": "Latest",
            "Headline": "Texas Schools Need Some Certainty During Coronavirus Pandemic",
            "DatePublished": "July, 30th, 2020",
            "siteUrl": "https://www.dallasnews.com/news/education/2020/07/30/texas-schools-need-some-certainty-during-coronavirus-pandemic-not-more-confusion-superintendents-group-tells-state-leaders/",
            "Source": "Dallas Morning News",
            "ProviderLogo": "https://www.bing.com/th?id=AR_e96d7cabbd873cc6865544592265e6b3&pid=news",
            "Content": [latestNewsArticles.article4.text1, latestNewsArticles.article4.text2, latestNewsArticles.article4.text3],
            "description": latestNewsArticles.article4.text1,
            "Related": [latestNewsArticles.article2, latestNewsArticles.article3, latestNewsArticles.article5],
            "ImageUrl": "https://www.bing.com/th?id=ON.EACE762B54CD8E05D331D33F7256B008&pid=News",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 132,
            "KeyPhrases": latestNewsPhrases.KeyPhrases[3].keyPhrases,
            "SentimentAnalysis": latestNewsSentiment.SentimentAnalysis[3],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }
        },
        {
            "ArticleID": 5,
            "ReadMe": "Latest",
            "TopicName": "Latest",
            "Headline": "Trader Joe’s says product labels targeted by petition aren't racist",
            "DatePublished": "July, 30th, 2020",
            "siteUrl": "https://www.sfgate.com/food/article/Trader-Joe-product-label-response-racist-claims-15447189.php",
            "Source": "SFGate",
            "ProviderLogo": "https://www.bing.com/th?id=AR_54d6e8857a180186fb2098ccfbefbf4b&pid=news",
            "Content": [latestNewsArticles.article5.text1, latestNewsArticles.article5.text2, latestNewsArticles.article5.text3],
            "description": latestNewsArticles.article5.text1,
            "Related": [latestNewsArticles.article2, latestNewsArticles.article3, latestNewsArticles.article1],
            "ImageUrl": "https://www.bing.com/th?id=ON.9DD7BF2FE460833C7C3ADDA238C4E50D&pid=News",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 154,
            "KeyPhrases": latestNewsPhrases.KeyPhrases[4].keyPhrases,
            "SentimentAnalysis": latestNewsSentiment.SentimentAnalysis[4],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        //End of Latest News Articles

        //Start of Sports Articles
        {
            "ArticleID": 6,
            "ReadMe": "Sports",
            "TopicName": "Sports",
            "Headline": "LAKE BUENA VISTA, Fla. — LeBron James of the Los Angeles",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [sportsArticles.article1.text1],
            "description": sportsArticles.article1.text1,
            "Related": [sportsArticles.article1, sportsArticles.article3, sportsArticles.article4],
            "ImageUrl": "https://s3.amazonaws.com/charitycdn/cache/resizedcrop-6f73d75e2df8b1956f2b78b1ee5c3d17-800x800.jpg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 278,
            "KeyPhrases": sportsPhrases.KeyPhrases[0].keyPhrases,
            "SentimentAnalysis": sportsSentiment.SentimentAnalysis[0]
        },
        {
            "ArticleID": 7,
            "ReadMe": "Sports",
            "TopicName": "Sports",
            "Headline": "Along with the rest of the world, athletes have had their careers",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": sportsArticles.article2.text1,
            "Content": [sportsArticles.article2.text1],
            "Related": [sportsArticles.article1, sportsArticles.article5, sportsArticles.article4],
            "ImageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Seattle_Storm_logo.svg/1200px-Seattle_Storm_logo.svg.png",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 341,
            "KeyPhrases": sportsPhrases.KeyPhrases[1].keyPhrases,
            "SentimentAnalysis": sportsSentiment.SentimentAnalysis[1],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 8,
            "ReadMe": "Sports",
            "TopicName": "Sports",
            "Headline": "LeBron James has seen a great deal during his 17 seasons in the NBA.",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": sportsArticles.article3.text1,
            "Content": [sportsArticles.article3.text1],
            "Related": [sportsArticles.article1, sportsArticles.article2, sportsArticles.article4],
            "ImageUrl": "https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/team-logos/nba/alt/light/LAL.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 451,
            "KeyPhrases": sportsPhrases.KeyPhrases[2].keyPhrases,
            "SentimentAnalysis": sportsSentiment.SentimentAnalysis[2],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 9,
            "ReadMe": "Sports",
            "TopicName": "Sports",
            "Headline": "The team announced Sunday that Chayka was leaving his post as",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": sportsArticles.article4.text1,
            "Content": [sportsArticles.article4.text1],
            "Related": [sportsArticles.article1, politicsArticles.article3, sportsArticles.article5],
            "ImageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Arizona_Coyotes.svg/1200px-Arizona_Coyotes.svg.png",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 123,
            "KeyPhrases": sportsPhrases.KeyPhrases[3].keyPhrases,
            "SentimentAnalysis": sportsSentiment.SentimentAnalysis[3],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 10,
            "ReadMe": "Sports",
            "TopicName": "Sports",
            "Headline": "Ken Duilio is a sergeant with the Portland Police Bureau and a 20-year",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": sportsArticles.article5.text1,
            "Content": [sportsArticles.article5.text1],
            "Related": [sportsArticles.article1, sportsArticles.article2, politicsArticles.article4],
            "ImageUrl": "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/YEJTBS2OMBDYJMRRHCIRQNEJQY.JPG",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 231,
            "KeyPhrases": sportsPhrases.KeyPhrases[4].keyPhrases,
            "SentimentAnalysis": sportsSentiment.SentimentAnalysis[4],
            "Experts": {
                "ExpertOpinions": [
                    {
                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."
                    },

                    {
                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."
                    }

                ]
            }
        },

        //Start of Politics
        {
            "ArticleID": 11,
            "ReadMe": "Politics",
            "TopicName": "Politics",
            "Headline": "Washington (CNN)Senate Republicans on Monday formally unveiled",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [politicsArticles.article1.text1, politicsArticles.article1.text2, politicsArticles.article1.text3],
            "description": politicsArticles.article1.text1,
            "Related": [politicsArticles.article2, politicsArticles.article3, politicsArticles.article4],
            "ImageUrl": "https://wwmt.com/resources/media/f3bee71d-d8ac-4e52-9e36-892b87ecc855-large1x1_MichiganSenate.jpeg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 234,
            "KeyPhrases": politicsPhrases.KeyPhrases[0].keyPhrases,
            "SentimentAnalysis": politicsSentiment.SentimentAnalysis[0],
            "Experts": {
                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 12,
            "ReadMe": "Politics",
            "TopicName": "Politics",
            "Headline": "President Reagan was a proud Republican and supporter of a party",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [politicsArticles.article2.text1, politicsArticles.article2.text2, politicsArticles.article2.text3],
            "description": politicsArticles.article2.text1,
            "Related": [politicsArticles.article1, politicsArticles.article3, politicsArticles.article4],
            "ImageUrl": "https://s3-prod.modernhealthcare.com/s3fs-public/API34HBEJ86HQ_523009999_PH_16_DBSEZNSCMVNO.jpg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 523,
            "KeyPhrases": politicsPhrases.KeyPhrases[1].keyPhrases,
            "SentimentAnalysis": politicsSentiment.SentimentAnalysis[1],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 13,
            "ReadMe": "Politics",
            "TopicName": "Politics",
            "Headline": "Wrote House editor David Wasserman of Republicans:",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [politicsArticles.article3.text1, politicsArticles.article3.text2, politicsArticles.article3.text3],
            "description": politicsArticles.article3.text1,
            "Related": [politicsArticles.article2, politicsArticles.article5, politicsArticles.article4],
            "ImageUrl": "data:image/jpeg;base64,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",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 154,
            "KeyPhrases": politicsPhrases.KeyPhrases[2].keyPhrases,
            "SentimentAnalysis": politicsSentiment.SentimentAnalysis[2],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 14,
            "ReadMe": "Politics",
            "TopicName": "Politics",
            "Headline": "President Donald Trump's top aides are stepping up blame-game",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [politicsArticles.article4.text1, politicsArticles.article4.text2, politicsArticles.article4.text3],
            "description": politicsArticles.article4.text1,
            "Related": [politicsArticles.article2, politicsArticles.article3, internArticles.article5],
            "ImageUrl": "https://lh3.googleusercontent.com/proxy/wwAWk3p4iqXEeCrfKtFM3kZKJkFPXl3zVw5CFNBSpk0jnHgdmrNUMklo6ZwJJgdsG2Iu0g0Bv2KdB54-ALTtCsY7MlReHuv4Ivn8_Maa3Id87Ij4sZxXZ0l5T85p6J_PZqT2OrJVp4BfMYAbKZQ",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 643,
            "KeyPhrases": politicsPhrases.KeyPhrases[3].keyPhrases,
            "SentimentAnalysis": politicsSentiment.SentimentAnalysis[3],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 15,
            "ReadMe": "Politics",
            "TopicName": "Politics",
            "Headline": "Melania Trump announced Monday she will oversee a renovation of the",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [politicsArticles.article5.text1, politicsArticles.article5.text2, politicsArticles.article5.text3],
            "description": politicsArticles.article5.text1,
            "Related": [politicsArticles.article2, internArticles.article1, politicsArticles.article4],
            "ImageUrl": "https://s.yimg.com/ny/api/res/1.2/pDWlf552Auol4kBlq33uDg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/vogue_137/2690cfda262487b9b14e224bf25da135",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 451,
            "KeyPhrases": politicsPhrases.KeyPhrases[4].keyPhrases,
            "SentimentAnalysis": politicsSentiment.SentimentAnalysis[4],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },

        //Start Of International Articles
        {
            "ArticleID": 16,
            "ReadMe": "International",
            "TopicName": "International",
            "Headline": "CHENGDU, China (AP) — In the more than 40 years",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": internArticles.article1.text1,
            "Content": [internArticles.article1.text1],
            "Related": [internArticles.article2, internArticles.article3, internArticles.article4],
            "ImageUrl": "https://wjla.com/resources/media/2fe44d88-e129-4cc0-bbcc-536a1e1b755f-large1x1_AP20193732293340.jpg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 423,
            "KeyPhrases": intlPhrases.KeyPhrases[0].keyPhrases,
            "SentimentAnalysis": intlSentiment.SentimentAnalysis[0],
            "Experts": {
                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 17,
            "ReadMe": "International",
            "TopicName": "International",
            "Headline": "In Austria, the lakeside resort town of St. Wolfgang",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": internArticles.article2.text1,
            "Content": [internArticles.article2.text1, internArticles.article2.text2],
            "Related": [internArticles.article1, internArticles.article3, internArticles.article4],
            "ImageUrl": "data:image/jpeg;base64,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",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 572,
            "KeyPhrases": intlPhrases.KeyPhrases[1].keyPhrases,
            "SentimentAnalysis": intlSentiment.SentimentAnalysis[1],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 18,
            "ReadMe": "International",
            "TopicName": "International",
            "Headline": "Al-Diwani and Athir Assem, 26, are among millions",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": internArticles.article3.text1,
            "Content": [internArticles.article3.text1, internArticles.article3.text2],
            "Related": [internArticles.article2, internArticles.article5, internArticles.article4],
            "ImageUrl": "https://media.npr.org/assets/img/2013/06/07/oneman._sq-0cf08e1f7c52deff42fd60a220ad60def6b190b2-s800-c85.jpg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 654,
            "KeyPhrases": intlPhrases.KeyPhrases[2].keyPhrases,
            "SentimentAnalysis": intlSentiment.SentimentAnalysis[2],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 19,
            "ReadMe": "International",
            "TopicName": "International",
            "Headline": "The case is due to end Tuesday, but judge Andrew",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": internArticles.article4.text1,
            "Content": [internArticles.article4.text1, internArticles.article4.text2],
            "Related": [internArticles.article5, internArticles.article3, techArticles.article1],
            "ImageUrl": "https://wcti12.com/resources/media/f2ef059a-d2b4-4810-a0f7-5d190c7528fe-large1x1_AP19101846534055.jpg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 153,
            "KeyPhrases": intlPhrases.KeyPhrases[3].keyPhrases,
            "SentimentAnalysis": intlSentiment.SentimentAnalysis[3],
            "Experts": {

                "ExpertOpinions": [
                    {
                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."
                    },

                    {
                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."
                    }

                ]
            }


        },
        {
            "ArticleID": 20,
            "ReadMe": "International",
            "TopicName": "International",
            "Headline": "Duterte acknowledged that his government’s handling",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": internArticles.article5.text1,
            "Content": [internArticles.article5.text1,internArticles.article5.text2],
            "Related": [internArticles.article1, techArticles.article2, internArticles.article4],
            "ImageUrl": "https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1397/05/04/13970504104008834148586514.jpg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 194,
            "KeyPhrases": intlPhrases.KeyPhrases[4].keyPhrases,
            "SentimentAnalysis": intlSentiment.SentimentAnalysis[4],
            "Experts": {
                "ExpertOpinions": [
                    {
                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."
                    },
                    {
                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."
                    }
                ]
            }
        },
        
        //Start of Tech Articles 
        {
            "ArticleID": 21,
            "ReadMe": "Technology",
            "TopicName": "Technology",
            "Headline": "With the consequences of inaction towards climate change",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": techArticles.article1.text1, 
            "Content": [techArticles.article1.text1,techArticles.article1.text2],
            "Related": [techArticles.article2, techArticles.article3, techArticles.article4],
            "ImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/%C3%86toms_-_Earth.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 623,
            "KeyPhrases": techKeyPhrases.KeyPhrases[0].keyPhrases,
            "SentimentAnalysis": SentimentTechArticles.SentimentAnalysis[0],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 22,
            "ReadMe": "Technology",
            "TopicName": "Technology",
            "Headline": "Earlier this month, Google delayed the reopening",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": techArticles.article2.text1,
            "Content": [techArticles.article2.text1],
            "Related": [techArticles.article1, techArticles.article3, techArticles.article5],
            "ImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 512,
            "KeyPhrases": techKeyPhrases.KeyPhrases[1].keyPhrases,
            "SentimentAnalysis": SentimentTechArticles.SentimentAnalysis[1],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 23,
            "ReadMe": "Technology",
            "TopicName": "Technology",
            "Headline": "Upping the pace too, we drop in with the Hargreeves",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": techArticles.article3.text1,
            "Content": [techArticles.article3.text1, techArticles.article3.text2],
            "Related": [techArticles.article2, techArticles.article5, techArticles.article4],
            "ImageUrl": "https://www.bing.com/th?id=ON.E93E957051F050327AD758E68353C38D&pid=News",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 431,
            "KeyPhrases": techKeyPhrases.KeyPhrases[2].keyPhrases,
            "SentimentAnalysis": SentimentTechArticles.SentimentAnalysis[2],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 24,
            "ReadMe": "Technology",
            "TopicName": "Technology",
            "Headline": "A mature take on the Transformers franchise coupled",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": techArticles.article4.text1,
            "Content": [techArticles.article4.text1],
            "Related": [techArticles.article2, techArticles.article3, financeArticles.article5],
            "ImageUrl": "https://cdn.onlinewebfonts.com/svg/img_232596.png",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 535,
            "KeyPhrases": techKeyPhrases.KeyPhrases[3].keyPhrases,
            "SentimentAnalysis": SentimentTechArticles.SentimentAnalysis[3],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 25,
            "ReadMe": "Technology",
            "TopicName": "Technology",
            "Headline": "Researchers placed the fungi aboard the ISS for 30",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "description": techArticles.article5.text1,
            "Content": [techArticles.article5.text1,techArticles.article5.text2],
            "Related": [techArticles.article2, financeArticles.article3, techArticles.article5],
            "ImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Mushroom.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 731,
            "KeyPhrases": techKeyPhrases.KeyPhrases[4].keyPhrases,
            "SentimentAnalysis": SentimentTechArticles.SentimentAnalysis[4],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },

        //Start Of Finance Articles
        {
            "ArticleID": 26, 
            "ReadMe": "Finance",
            "TopicName": "Finance",
            "Headline": "It’s the question that’s been on everyone’s minds:",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [financeArticles.article1.text1, financeArticles.article1.text2, financeArticles.article1.text3],
            "description" : financeArticles.article1.text1,
            "Related": [financeArticles.article2, financeArticles.article3, financeArticles.article4],
            "ImageUrl": "https://svgsilh.com/svg_v2/1829459.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 532,
            "KeyPhrases": financeKeyPhrases.KeyPhrases[0].keyPhrases,
            "SentimentAnalysis": SentimentFinanceArticles.SentimentAnalysis[0],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 27,
            "ReadMe": "Finance",
            "TopicName": "Finance",
            "Headline": "The proposal would impact nearly 32 million Americans",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [financeArticles.article2.text1, financeArticles.article2.text2, financeArticles.article2.text3],
            "description" : financeArticles.article2.text1,
            "Related": [financeArticles.article1, financeArticles.article3, financeArticles.article4],
            "ImageUrl": "https://www.freetaxusa.com/assets/images/hand-money-hero.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 298,
            "KeyPhrases": financeKeyPhrases.KeyPhrases[1].keyPhrases,
            "SentimentAnalysis": SentimentFinanceArticles.SentimentAnalysis[1],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 28,
            "ReadMe": "Finance",
            "TopicName": "Finance",
            "Headline": "Months of economic uncertainty have driven people to turn",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [financeArticles.article3.text1, financeArticles.article3.text2, financeArticles.article3.text3],
            "description" : financeArticles.article3.text1,
            "Related": [financeArticles.article2, financeArticles.article5, financeArticles.article4],
            "ImageUrl": "https://www.freetaxusa.com/assets/images/calendar-extension-hero.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 376,
            "KeyPhrases": financeKeyPhrases.KeyPhrases[2].keyPhrases,
            "SentimentAnalysis": SentimentFinanceArticles.SentimentAnalysis[2],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 29,
            "ReadMe": "Finance",
            "TopicName": "Finance",
            "Headline": "COVID-19 has upended much of U.S. society. And it’s changing how",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [financeArticles.article4.text1, financeArticles.article4.text2, financeArticles.article4.text3],
            "description" : financeArticles.article4.text1,
            "Related": [financeArticles.article2, financeArticles.article3, techArticles.article5],
            "ImageUrl": "https://image.flaticon.com/icons/svg/2659/2659991.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 467,
            "KeyPhrases": financeKeyPhrases.KeyPhrases[3].keyPhrases,
            "SentimentAnalysis": SentimentFinanceArticles.SentimentAnalysis[3],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        },
        {
            "ArticleID": 30,
            "ReadMe": "Finance",
            "TopicName": "Finance",
            "Headline": "Congress won’t move on the next round of stimulus",
            "DatePublished": "August, 12, 2020",
            "siteUrl": "https://www.bostonglobe.com/2020/07/22/nation/trump-barr-expand-anti-crime-surge-several-us-cities/",
            "Source": "The Boston Globe",
            "ProviderLogo": "https://www.bing.com/th?id=AR_9771321dce841bf5c6ffae48d0f78b90&pid=news",
            "Content": [financeArticles.article5.text1, financeArticles.article5.text2, financeArticles.article5.text3],
            "description" : financeArticles.article5.text1,
            "Related": [financeArticles.article2, techArticles.article3, financeArticles.article4],
            "ImageUrl": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            "Votes": {
                "yesVotes": 12,
                "noVotes": 12,
                "maybeVotes": 6
            },
            "likes": 287,
            "KeyPhrases": financeKeyPhrases.KeyPhrases[4].keyPhrases,
            "SentimentAnalysis": SentimentFinanceArticles.SentimentAnalysis[4],
            "Experts": {

                "ExpertOpinions": [
                    {

                        "name": "Expert Bobby",
                        "comment": " This is a sentence with meaning."

                    },

                    {

                        "name": "Expert Jimmy",
                        "comment": " This is a sentence with meaning."

                    }

                ]
            }


        }

    ]//end of Articles

}
