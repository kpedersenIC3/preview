import data from "../../data.json"

const ImageGallery = () => {

    return (
        <div className={"gallery"}>
            <h2>Images</h2>
            <div className={"gallery-grid mx-auto p-2"}>
                {data.data.map(resource => {
                    console.log(resource)
                    return(
                        <a href={resource.link} className={"bg-amber-50 w-full rounded text-grey-darkest no-underline shadow-md"}>
                            <img className={"block rounded-b p-3"} src={resource.image} alt={"image"}/>
                        </a>
                    )
                })
                }
            </div>
        </div>
    );
}

export default ImageGallery