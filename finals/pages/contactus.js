import Head from "next/head"
import Image from "next/image";
import conus from '../public/assets/conus.png'
export default function ContactUS(){
    return(
        <>
        <Head>
            <title>The Recipe Room</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/logo1.png" />
        </Head>

            <div className ="contact-title">
                <h1>
                    CONTACT US
                </h1>
            </div>
            <div className = "body">
                <div className = "contact">
                    <p>Have a question, suggestion, or just want to share your culinary triumphs with us? We'd love to hear from you! 
                        Contact The Recipe Room through the following channels:
                    </p>
                    <div className = "list">
                        <ul className = "contact-list">
                            <li>Email: support@reciperoom.com</li>
                            <li>Phone: 0912-345-6789</li>
                        </ul>
                    </div>
                </div>
                <div className = "inquiry">
                    <p>
                        General Inquiries:<br/> 
                        For general inquiries or feedback, drop us a line!
                    </p>
                    <div className = "list">
                        <ul className = "info-email">
                            <li>Email: info@reciperoom.com</li>
                        </ul>
                    </div>
                    <div className = "container">
                        <div className = "consimg">
                            <Image
                                src = {conus} 
                                alt = "Contact Us"
                                width = '200'
                                height = '200'
                            />
                        </div> 
                    </div>    
                </div>
            </div>
        </>
    )
}

