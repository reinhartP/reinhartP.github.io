import React, { Component } from 'react';
export default class Porfolio extends Component {
    checkUrl = (e, url) => {
        if (url === false) {
            e.preventDefault();
        }
    };
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Projects.</h1>
                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            {resumeData.portfolio &&
                                resumeData.portfolio.map(item => {
                                    let progress = item.active
                                        ? ''
                                        : 'In Development';
                                    return (
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={item.url}
                                                    onClick={e =>
                                                        this.checkUrl(
                                                            e,
                                                            item.url
                                                        )
                                                    }
                                                >
                                                    <img
                                                        src={`${item.imgurl}`}
                                                        className="item-img"
                                                    />
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                            <h4
                                                                style={{
                                                                    position:
                                                                        'absolute',
                                                                    top: '85%',
                                                                    color:
                                                                        'red',
                                                                }}
                                                            >
                                                                {progress}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
