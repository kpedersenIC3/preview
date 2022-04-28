const Contact = () => {
    return(
        <>
        <footer className={"contact-footer"}>
            <div className={"contact-link"}>
                <a href={"https://www.facebook.com/ccrcoverband"} target={"_blank"}><p className={"contact-text"}>Facebook</p><img src="f_logo_RGB-Blue_72.png" width={"40"}/></a>
            </div>
            <div className={"contact-link"}>
                <a href={"https://www.instagram.com"} target={"_blank"}><p className={"contact-text"}>Instagram</p><img src="Instagram_Glyph_Gradient_RGB.png" width={"40"}/></a>
            </div>
            <div className={"contact-link"}>
                <a href={"mailto:test@test.com"} target={"_blank"}><p className={"contact-text"}>Booking</p><img src="icons8-email-sign-96.png" width={"40"}/></a>
            </div>
        </footer>
        </>
    )
}

export default Contact