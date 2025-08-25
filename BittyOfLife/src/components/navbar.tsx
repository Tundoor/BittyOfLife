
function Navbar() {
   return (<>
   <div className="icon-div">
    <img src="assets/Logo.png" className="main-icon"></img>
    
    <div className="social-media-links">
     <img src="assets/logos_pinterest.svg" className="social-icon"></img>
     <img src="assets/logos_twitter.svg" className="social-icon"></img>
     <img src="assets/skill-icons_instagram.svg" className="social-icon"></img>
     
    </div>
    </div>
    <nav className="nav-div">
        <div className="nav-link-div">
        <a className="nav-link"id="home-link">Home</a>
        <a className="nav-link" id="blogs-link">Blogs</a>
        <a className="nav-link" id="post-link">Post</a>
        </div>
    </nav>
   </>)
}

export default Navbar