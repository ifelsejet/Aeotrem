import React from 'react';
import ReactApexChart from "react-apexcharts";

// npm install apexcharts --save
// npm install --save react-apexcharts apexcharts

class SentimentAnalysis extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        var overall = props.sentiment.SentimentAnalysis.sentiment
        var positive = (props.sentiment.SentimentAnalysis.confidenceScores.positive) * 100
        var neutral = (props.sentiment.SentimentAnalysis.confidenceScores.neutral) * 100
        var negative = (props.sentiment.SentimentAnalysis.confidenceScores.negative) * 100

        this.state = {
            series: [{
                name: 'Confidence Scores',
                data: [neutral, positive, negative],
            }],
            options: {
                chart: {
                    height: 400,
                    width: 1000,
                    type: 'radar',
                },
                title: {
                    text: 'Sentiment Analysis',
                    align: 'center',
                    offsetY: 25,
                    style: {
                        fontSize: '22px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#263238'
                    },
                },
                subtitle: {
                    text: 'Overall Article Sentiment: ' + overall,
                    align: 'center',
                    margin: 0,
                    offsetY: 325,
                    floating: false,
                    style: {
                        fontSize: '22px',
                        fontWeight: 'normal',
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
                        shadeIntensity: 0.80
                    }
                },
                xaxis: {
                    categories: ['Neutral', 'Positive', 'Negative'],
                    labels: {
                        show: true,
                        style: {
                            colors: ["#000000", "#000000", "#000000"],
                            fontSize: "18px",
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
                            colors: ['#000000', '#000000', '#000000', '#000000','#000000'],
                            fontSize: '16px',
                            fontWeight: 400,
                        }
                    }
                },
                fill: {
                    opacity: 0.3,
                },
                stroke: {
                    show: true,
                    width: 2,
                    dashArray: 0
                },
                markers: {
                    size: 3.8,
                    fillOpacity: 1,
                    strokeColor: '#2B908F',
                    hover: {
                        size: 10
                    }
                },
                plotOptions: {
                    size: 300,
                    radar: {
                        polygons: {
                            strokeColor: '#000000',
                            fill: {
                                colors: ['#A5978B', '#fff']
                            }
                        }
                    }
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={400}/>
            </div>
        );
    }
}

export default SentimentAnalysis

