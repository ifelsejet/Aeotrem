import React from "react";
import ReactApexChart from "react-apexcharts";
import {newsArticleDB} from "../../newsArticlesDB/newsArticlesDB";


class SentimentAnalysisLatestNews extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        var positive1 = (newsArticleDB.Articles[0].SentimentAnalysis.confidenceScores.positive) * 100
        var neutral1 = (newsArticleDB.Articles[0].SentimentAnalysis.confidenceScores.neutral) * 100
        var negative1 = (newsArticleDB.Articles[0].SentimentAnalysis.confidenceScores.negative) * 100

        var positive2 = (newsArticleDB.Articles[1].SentimentAnalysis.confidenceScores.positive) * 100
        var neutral2 = (newsArticleDB.Articles[1].SentimentAnalysis.confidenceScores.neutral) * 100
        var negative2 = (newsArticleDB.Articles[1].SentimentAnalysis.confidenceScores.negative) * 100

        var positive3 = (newsArticleDB.Articles[2].SentimentAnalysis.confidenceScores.positive) * 100
        var neutral3 = (newsArticleDB.Articles[2].SentimentAnalysis.confidenceScores.neutral) * 100
        var negative3 = (newsArticleDB.Articles[2].SentimentAnalysis.confidenceScores.negative) * 100

        var positive4 = Math.floor((newsArticleDB.Articles[3].SentimentAnalysis.confidenceScores.positive) * 100)
        var neutral4 = (newsArticleDB.Articles[3].SentimentAnalysis.confidenceScores.neutral) * 100
        var negative4 = Math.floor((newsArticleDB.Articles[3].SentimentAnalysis.confidenceScores.negative) * 100)

        var positive5 = (newsArticleDB.Articles[4].SentimentAnalysis.confidenceScores.positive) * 100
        var neutral5 = Math.floor(newsArticleDB.Articles[4].SentimentAnalysis.confidenceScores.neutral) * 100
        var negative5 = (newsArticleDB.Articles[4].SentimentAnalysis.confidenceScores.negative) * 100

        this.state = {
            series: [
                {
                    name: 'Article 1',
                    data: [neutral1, positive1, negative1],
                },
                {
                    name: 'Article 2',
                    data: [neutral2, positive2, negative2],
                },
                {
                    name: 'Article 3',
                    data: [neutral3, positive3, negative3],
                },
                {
                    name: 'Article 4',
                    data: [neutral4, positive4, negative4],
                },
                {
                    name: 'Article 5',
                    data: [neutral5, positive5, negative5],
                }
            ],
            options: {
                chart: {
                    height: 300,
                    width: 500,
                    type: 'radar',
                },
                title: {
                    text: 'Sentiment Analysis: Latest News',
                    align: 'left',
                    style: {
                        fontSize: '28px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#263238'
                    },
                },
                theme: {
                    mode: 'light',
                    palette: 'palette5',
                    monochrome: {
                        enabled: false,
                        color: '#2B908F',
                        shadeTo: 'dark',
                        shadeIntensity: 1
                    }
                },
                xaxis: {
                    categories: ['Neutral', 'Positive', 'Negative'],
                    labels: {
                        show: true,
                        style: {
                            colors: ["#000000", "#000000", "#000000"],
                            fontSize: "20px",
                            fontFamily: 'Arial'
                        }
                    }
                },
                yaxis: {
                    tickAmount: 5,
                    min: 0,
                    max: 100,
                    labels: {
                        style: {
                            colors: ['#000000', '#000000', '#000000', '#000000', '#000000'],
                            fontSize: '18px',
                            fontWeight: 400,
                        }
                    }
                },
                fill: {
                    opacity: 0.1,
                },
                stroke: {
                    show: true,
                    width: 2,
                    dashArray: 0
                },
                markers: {
                    size: 4,
                    fillOpacity: 2,
                    hover: {
                        size: 10
                    }
                },
                plotOptions: {
                    radar: {
                        size: 300,
                        polygons: {
                            strokeColor: '#000000',
                            fill: {
                                colors: ['#A5978B', '#fff']
                            }
                        }
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    floating: false,
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial',
                    fontWeight: 400,
                    formatter: undefined,
                    inverseOrder: false,
                    width: undefined,
                    height: undefined,
                    tooltipHoverFormatter: undefined,
                    offsetX: -75,
                    offsetY: -100,
                }
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={670}/>
            </div>
        );
    }
}

export default SentimentAnalysisLatestNews

