import "./NewsLetter.css";
const NewsLetter = () =>{
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our newsletter and stay Updated</p>
            <div>
                <input type="email" placeholder="example@gmail.com"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter