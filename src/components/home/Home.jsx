import "./home.css";
import HomeImg from "../../assests/images/head.png";




function Home() {
  return (
    <>
        <div id="home" className="container-fluid home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 head-bar">
                        <h6>WELCOME TO MY WORLD</h6>
                        <h3>Hello, I'm</h3>
                        <h2>MD. MUSFIQUR RAHMAN SHOVON</h2>
                        <h4>- Junior Programmer</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="btn-box">
                            <a href="#" className="btn">Get in Touch</a>
                            <a href="#" className="btn">Hire me Now!</a>
                        </div>
                        <h6>FIND WITH ME</h6>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-instagram' ></i></a>
                            <a href="#"><i class='bx bxl-linkedin' ></i></a>
                            <a href="#"><i class='bx bxl-github' ></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 justify-content-center align-items-center">
                        <div className="home-img">
                            <img src={HomeImg} alt="Musfiqur Shovon"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
    
    </>
  );
}

export default Home;


