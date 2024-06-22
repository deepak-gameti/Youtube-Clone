import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_convertor } from '../../Data';
import moment from 'moment';


const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)

    const fetchVideoData = async () => {
        // Fetching video data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(response => response.json()).then(data => setApiData(data.items[0])).catch(error => console.error("Error fetching video data:", error));
    }


    const fetchOtherData = async () => {
        // Fetching channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then()
    }

    useEffect(() => {
        fetchVideoData();
    }, [])

 

    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


            <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_convertor(apiData.statistics.viewCount) : "16k"} Views &bull; {moment(apiData?apiData.snippet.publishedAt:"time here").fromNow()}</p>
                <div>
                    <span><img src={like} alt="" />{apiData?value_convertor(apiData.statistics.likeCount):155}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:"title here"}</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData?apiData.snippet.description.slice(0,250):"description here"}</p>
                <hr />
                <h4>{apiData?value_convertor(apiData.statistics.commentCount):102} Commentes</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolson <span>1 day ago</span></h3>
                        <p>A globel computer network providing a variety of information and communication of interconnected networks using standardized communication protocol.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolson <span>1 day ago</span></h3>
                        <p>A globel computer network providing a variety of information and communication of interconnected networks using standardized communication protocol.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolson <span>1 day ago</span></h3>
                        <p>A globel computer network providing a variety of information and communication of interconnected networks using standardized communication protocol.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolson <span>1 day ago</span></h3>
                        <p>A globel computer network providing a variety of information and communication of interconnected networks using standardized communication protocol.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolson <span>1 day ago</span></h3>
                        <p>A globel computer network providing a variety of information and communication of interconnected networks using standardized communication protocol.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo
