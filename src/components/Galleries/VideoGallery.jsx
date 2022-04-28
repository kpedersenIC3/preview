import data from "../../data.json"

const VideoGallery = () => {
    return(
        <div className={"video-gallery"}>
            <h2>Videos</h2>
            <div className={"video-gallery-grid mx-auto p-2"}>
            {data.videos.map(video => {
                console.log(video.link)
                const link = video.link.replace("www.dropbox.com","dl.dropboxusercontent.com").replace("dl=0", "raw=1")
                console.log(link)
                return(
                <div className={"bg-amber-50 w-full rounded text-grey-darkest no-underline shadow-md"}>
                    <h3 className={"text-xl pt-3 ml-10"}>{video.title}</h3>
                    <video className={"block rounded-b p-3"}  controls={true} width={720}>
                        <source src={link} type={"video/mp4"}/>
                    </video>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default VideoGallery