function Subscribe () {
    return (
        <>
        <div className="sunscribe-div">
            <header className="subscription-header">
                <h1>Subscribe</h1>
                <p>Join my newsletter and get any updates firsthand, and also get some of my thoughts I'd rather not share with just anyone.</p>
            </header>
            <div className="subscription-box">
                <input type="text" className="email-input" placeholder="Enter You Email. Eg. johndoe@gmail.com"></input>
                <button className="subscribe-btn">subscribe</button>
            </div>
        </div>
        </>
    )
}

export default Subscribe