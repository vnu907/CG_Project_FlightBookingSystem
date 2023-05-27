import "../components/FooterStyles.css";


const Footer = () => {
  return (
    <div className="footer">
 
 <div className="top">
    <div>

        <h1>
          FeelFly
        </h1>
        <p>Choose Your Flight.</p>
    </div>
    <div>
        <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
        </a>
        <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
        </a>
        <a href="/">
            <i className="fa-brands fa-linkedin-square"></i>
        </a>
        <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
        </a>
    </div>
 </div>
 <div className="bottom">
    <div>
        <h4>Project</h4>
        <a href="/"> Changelog</a>
        <a href="/"> Status</a>
        <a href="/"> License</a>
        <a href="/"> All Versions</a>
      
    </div>
    <div>
        <h4>Community</h4>
        <a href="/"> Github</a>
        <a href="/"> Issuse</a>
        <a href="/"> Project</a>
        <a href="/"> Twitter</a>
      
    </div>

    <div>
        <h4>Help</h4>
        <a href="/"> Sipport</a>
        <a href="/"> Troubleshooting</a>
        <a href="/"> ContactUs</a>
   
      
    </div>
</div>
 

© Copyright: VAZ Team
    </div>
  );
};

export default Footer;
