import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card m-2">
                <span className="badge rounded-pill bg-secondary"> {source} </span>
                    <img
                        src={!imageurl?"https://feeds.abplive.com/onecms/images/uploaded-images/2024/03/25/8bde661d36968c350ad963b2ba2605171711352703847402_original.jpg?impolicy=abp_cdn&imwidth=1200":imageurl}
                        className="card-img-top"
                        alt="Fissure in Sandstone"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noopener noreferrer" target='_blank' className="btn btn-sm btn-dark" data-mdb-ripple-init="">
                            Read More
                        </a>
                    </div>
                </div>

                {/* 4b5658ecb33a44a8ae9c9e534f972dd0 */}
            </div>
        )
    }
}

export default NewsItem