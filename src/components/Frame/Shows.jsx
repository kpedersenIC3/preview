import data from "../../data.json"

const Shows = () => {

    return (
        <div className={"show-gallery"}>
        <h2>Shows</h2>
        <div className={"show-grid mx-auto p-2"}>
            {data.data.map(resource => {
                console.log(resource)
                return(
                    <a to={resource.link} className={"bg-amber-50 w-full rounded text-grey-darkest no-underline shadow-md"}>
                        <h3 className={"text-xl pt-3"}>{resource.caption}</h3>
                        <img className={"block rounded-b p-3"} src={resource.image} alt={"image"}/>
                    </a>
                )
            })
            }
        </div>
        </div>
    );
}

export default Shows