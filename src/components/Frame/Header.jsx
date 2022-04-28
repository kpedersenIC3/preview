
const Header = () => {
    return(
        <div className={"header-element"}>
            <a href={"/"}><h1>UP AROUND THE BAND</h1></a>
            <p className={"subtitle"}>Creedence Clearwater Revival Cover Band</p>
            <video id={"background-video"} autoPlay={true} muted={true} loop={true}>
                <source src="https://dl.dropboxusercontent.com/s/pyq9vlxgis84vuu/2022_21_04_LYGTENS_KRO.MP4?raw=1" type={"video/mp4"}/>
            </video>
            <img id={"background-alt"} src={"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/278069722_403658048431613_4406518271595506024_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CszwtWj1QmYAX8PYYoh&_nc_ht=scontent-cph2-1.xx&oh=00_AT-5s-TJV4JAfUjBH7TCuWNEmU8jUMJy3JUR9jKn85IUsA&oe=626EEFF7"}></img>
        </div>
    )
}

export default Header