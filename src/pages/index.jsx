import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCode,
  FaServer,
  FaBolt,
  FaGithub,
  FaCloudUploadAlt,
  FaBriefcase,
} from "react-icons/fa";
import {
  FaBookOpen,
  FaLaptopCode,
  FaProjectDiagram,
  FaGlobe,
  FaUserFriends,
  FaRocket,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Section Hero */}
      <section className="hero">
        <div className="hero-detail text-center pt-[280px] bg-[#0d1117] text-[#f5f5f5] min-h-screen">
          <h2 className="text-[30px]">
            <TypeAnimation
              sequence={[
                "Learn Web Development with CodeMentor",
                2000,
                "Master HTML, CSS, Bootstrap, JavaScript, PHP, Laravel, React.js & Next.js",
                2000,
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-3 text-[15px]">
            From basics to advanced – step-by-step learning path
          </p>

          <div className="mt-3">
            <a
              href="https://wa.me/923066390289?text=Hello%20I%20want%20to%20join%20your%20web%20development%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md border text-white px-3 py-2"
            >
              Start Learning Today
            </a>
          </div>
        </div>
      </section>
      {/* Section about */}
      <section className="about py-5" id="about">
        <Container>
          <Row className="pt-[50px]">
            <Col lg={12}>
              <div className="about-detail">
                <h2 className="fw-bold">✨ About Us</h2>
                <div className="pt-[20px]">
                  <p>
                    👋 We are a team of passionate Web Developers & Teachers,
                    dedicated to helping students master the art of modern web
                    development.
                  </p>
                  <p>
                    💻 With hands-on experience in building real-world,
                    scalable, and user-friendly applications, we specialize in
                    technologies like HTML, CSS, Bootstrap, JavaScript, PHP,
                    Laravel, React.js, and Next.js. Alongside development, we’ve
                    also worked in freelancing, delivering high-quality
                    solutions to global clients.
                  </p>
                  <p>
                    🎓 Our mission is to make learning web development simple,
                    practical, and career-driven. We guide students step by step
                    — from coding basics to building professional projects —
                    ensuring they’re ready to freelance, launch startups, or
                    land their first job.
                  </p>
                  <p>
                    🚀 By joining our platform, you’ll: <br></br> __Gain
                    hands-on training with the latest tools & frameworks
                    <br></br> __Build a portfolio that impresses clients &
                    employers<br></br> __Learn the secrets of freelancing
                    platforms like Upwork & Fiverr <br></br> __Get mentorship &
                    guidance for real success in tech <br></br> <br></br>✨ We
                    don’t just teach you how to code — we help you build a
                    career in web development.<br></br>
                    <br></br>{" "}
                  
                  </p>
                    <p>
                      📍 Now available in your city <strong>Multan</strong> with
                      competitive fees. Enjoy the first{" "}
                      <strong>5 days of trial classes</strong> — come and
                      experience our professionalism. After that, you can decide
                      how you’d like to continue learning with us.
                    </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section Learning */}
      <section className="section py-5" id="courses">
        <div className="container">
          <h2 className="fw-bold mb-3">✨ What You’ll Learn</h2>
          <div className="row g-4">
            {/* Frontend */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="card p-3">
                <div className="mb-3 fs-1 text-primary">
                  <FaCode />
                </div>
                <h5>Frontend Development</h5>
                <p>HTML, CSS, Bootstrap, JavaScript</p>
              </div>
            </div>

            {/* Backend */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="card p-3">
                <div className="mb-3 fs-1 text-success">
                  <FaServer />
                </div>
                <h5>Backend Development</h5>
                <p>PHP, Laravel, MySQL</p>
              </div>
            </div>

            {/* Frameworks */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="card p-3">
                <div className="mb-3 fs-1 text-warning">
                  <FaBolt />
                </div>
                <h5>Modern Frameworks</h5>
                <p>React.js & Next.js</p>
              </div>
            </div>

            {/* Git */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="card p-3">
                <div className="mb-3 fs-1 text-danger">
                  <FaGithub />
                </div>
                <h5>Version Control</h5>
                <p>Git & GitHub basics</p>
              </div>
            </div>

            {/* Hosting */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="card p-3">
                <div className="mb-3 fs-1 text-info">
                  <FaCloudUploadAlt />
                </div>
                <h5>Deployment & Hosting</h5>
                <p>cPanel, Vercel, Hostinger</p>
              </div>
            </div>

            {/* Freelancing */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="card p-3">
                <div className="mb-3 fs-1 text-secondary">
                  <FaBriefcase />
                </div>
                <h5>Freelancing & Career</h5>
                <p>Portfolio building & freelancing tips</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Method */}
      <section className="section py-5" id="method">
        <div className="container">
          <h2 className="fw-bold mb-4">✨ Our Teaching Method</h2>
         

          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-md-4">
              <div className="card p-4">
                <div className="mb-3 fs-1 text-primary">
                  <FaBookOpen />
                </div>
                <h5>Step-by-Step Guidance</h5>
                <p>
                  From basics to advanced, we guide you through every concept
                  clearly.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-4">
              <div className="card p-4">
                <div className="mb-3 fs-1 text-success">
                  <FaLaptopCode />
                </div>
                <h5>Practical First</h5>
                <p>
                  Hands-on coding with live examples and exercises in every
                  class.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4">
              <div className="card p-4">
                <div className="mb-3 fs-1 text-warning">
                  <FaProjectDiagram />
                </div>
                <h5>Project-Based Learning</h5>
                <p>
                  Work on portfolio-worthy projects to showcase your skills.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-md-4">
              <div className="card p-4">
                <div className="mb-3 fs-1 text-info">
                  <FaGlobe />
                </div>
                <h5>Freelancing Mentorship</h5>
                <p>
                  Learn how to succeed on Upwork, Fiverr & Freelancer platforms.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="mb-3 fs-1 text-danger">
                  <FaUserFriends />
                </div>
                <h5>One-on-One Support</h5>
                <p>Get personal guidance to clear doubts and stay on track.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="col-md-4">
              <div className="card p-4">
                <div className="mb-3 fs-1 text-secondary">
                  <FaRocket />
                </div>
                <h5>Career-Oriented Approach</h5>
                <p>
                  Our mission isn’t just teaching code — we prepare you for jobs
                  & freelancing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
