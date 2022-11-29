import htmllogo from "../assets/img/logo_html.png"
import reactjs from "../assets/img/reactjs.png"
import csslogo from "../assets/img/logo_css.png"
import { useNavigate } from "react-router-dom";
import Subscribe from "../components/Subscribe";


const Home = () => {
  const navigate = useNavigate();
  return(
    
    <div>
      
      <main>
      <section className="banner">
    <p id="name">Web Design</p>
    <p id="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus
      ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum
      condimentum.
    </p>
  </section>
  
  <Subscribe/>
  <section class="logo">
            <div class="box" onClick={()=>navigate("/html")} >
                <img src={htmllogo} alt="html_logo"/>
                <h3>HTML5 Markup</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
            <div class="box"onClick={()=>navigate("/css")}>
                <img src={csslogo} alt="css_logo"/>
                <h3>CSS3 Styling</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
            <div class="box"onClick={()=>navigate("/react")}>
                <img src= {reactjs} alt="react_logo"/>
                <h3>React Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
