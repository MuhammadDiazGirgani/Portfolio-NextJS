import { Card, Col, Row } from "react-bootstrap";
import Image from "next/image";
import Button from "react-bootstrap/Button";

export default function Home() {
const skills = [
  { name: "JavaScript", img: "/skills/javascript.png" },
  { name: "ReactJS", img: "/skills/reactjs.png" },
  { name: "TypeScript", img: "/skills/typescript.png" },
  { name: "NextJS", img: "/skills/nextjs.png" },
  { name: "MongoDB", img: "/skills/mongodb.png" },
  { name: "NodeJS", img: "/skills/nodejs.png" },
  { name: "Bootstrap", img: "/skills/bootstrap.png" },
  { name: "Tailwind", img: "/skills/tailwind.png" },
  { name: "ReactBootstrap", img: "/skills/reactbootstrap.png" },
  { name: "HTML", img: "/skills/html.png" },
  { name: "CSS", img: "/skills/css.png" },
  { name: "Postman", img: "/skills/postman.png" },
];



  return (
    <section className="container py-5">
      <Row className="g-4">
        {/* Hero Card */}
        <Col md={8} lg={8}>
         <Card className="h-100 shadow-sm border-0 rounded-4 p-4">
  <h1 className="fw-bold fs-1">👋 Hello!</h1>
  <p className="fs-5">
    I'm <span className="fw-bold">Diaz</span>, a front-end web developer based in Indonesia.  
    I have a passion for building responsive websites and mobile applications.  
    With a focus on user experience and efficient coding, I specialize in 
    <strong> JavaScript</strong> and modern frameworks such as 
    <strong> React, TypeScript, and Next.js</strong>.
  </p>
</Card>

        </Col>

        {/* Card Location dengan Map */}
        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
            <div style={{ width: "100%", height: "250px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1977.2418742463697!2d108.13636997729706!3d-7.6310100327648485!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1756737614270!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Card>
        </Col>

        {/* Card Github */}
        <Col md={6} lg={2}>
         <a
              href="https://github.com/MuhammadDiazGirgani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
            <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
            <Image
              src="/github.svg"
              alt="Github"
              width={150}
              height={150}
               className="img-fluid p-3"
    />
          </Card>
          </a>
        </Col>

        {/* Card Instagram */}
        <Col md={6} lg={2}>
                <a
              href="https://www.instagram.com/diazzgirgani_?igsh=MWJpNnVkMDVqendzMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
            <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={150}
              height={150}
               className="img-fluid p-3"
    />
          </Card>
          </a>
        </Col>

        {/* Card Skills */}
        <Col md={12} lg={8}>
          <Card className="h-100 shadow-sm border-0 rounded-4 p-4">
            <h2 className="fw-bold fs-4 text-center mb-4">Skills</h2>
            <div style={{ maxHeight: "100px", overflowY: "auto", overflowX: "hidden" }}>
              <Row className="g-2 text-center ">
                {skills.map((s, i) => (
                  <Col key={i} md={3} sm={6} xs={6}>
                    <div>
                      <Image
                        src={s.img}
                        alt={s.name}
                        width={70}
                        height={70}
                        className="mx-auto mb-2"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Card>
        </Col>

{/* Card LinkedIn */}
<Col md={6} lg={2}>
 <a
              href="https://www.linkedin.com/in/muhammad-diaz-girgani-6439b5259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
  <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
    <Image
      src="/linkedin.svg"
      alt="LinkedIn"
      width={150}
      height={150}
      className="img-fluid p-3"
    />
  </Card>
  </a>
</Col>

{/* Card Spotify */}
<Col md={6} lg={2}>
 <a
              href="https://open.spotify.com/user/31su46py5dylpldggwfpegar2bau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
  <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
    <Image
      src="/spotify.svg"
      alt="Spotify"
      width={150}
      height={150}
      className="img-fluid p-3"
    />
  </Card>
  </a>
</Col>

         {/* Hero Card */}
        <Col md={8} lg={8}>
         <Card className="h-100 shadow-sm border-0 rounded-4 p-4 text-flex-start ">
  <h1 className="fw-bold fs-1 ">🤝 Let’s Collaborate</h1>
  <p className="fs-5">
    If you’d like to collaborate, work together, or have me build a web or mobile project,  
    feel free to get in touch through my contact page.
  </p>
  <div className="d-flex justify-content-end align-items-end">
  <Button 
    href="/contact" 
    variant="dark" 
    className="fw-bold rounded-3 px-4 w-50 "
  >
    Contact Me
  </Button>
  </div>
</Card>

        </Col>
      </Row>
    </section>
  );
}
