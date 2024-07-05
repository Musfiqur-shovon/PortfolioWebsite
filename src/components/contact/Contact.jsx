import HeadingLine from "../headingLine/HeadingLine";
import "./contact.css";

function Contact() {
  return (
    <>
      <div id="contact" className="container-fluid">
        <div className="session-title">
          <h2>Contact With Me</h2>
          <HeadingLine />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-5 pb-5">
              <div class="coninfo">
                <div className="image-contact"></div>
                <h3>MD. MUSFIQUR RAHMAN SHOVON</h3>
                <h5>Junior Programmer</h5>
                <h5>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </h5>
                <p>
                  Phone: <span class="communication">+01234567890</span>
                </p>
                <p>
                  Email: <span class="communication">admin@example.com</span>
                </p>
              </div>
            </div>
            <div class="col-md-7 pb-5">
              <div class="contact-info">
                <form>
                  <label for="username">Username</label>
                  <input type="text" />
                  <label for="email">Email</label>
                  <input type="email" name="" id="" />
                  <label for="subject">Subject</label>
                  <input type="text" />
                  <label for="message">Message</label>
                  <textarea id="message" name="message"></textarea>
                  <div class="btn-box">
                    <a href="#" class="btn">
                      Download CV
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
