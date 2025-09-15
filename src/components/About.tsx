import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";


export default function About() {
  return (
    <Container id="profile" className="my-2">
      <Row className="justify-content-center align-items-stretch g-4">
        {/* Card kiri: Text */}
        <Col md={4} lg={8}>
          <Card className="bg-white shadow rounded-5 h-100 p-4">
            <h1 className="fw-bold mb-3">
              Hello, I’m Diaz , Web Development and Designer Web.
            </h1>
            <p>
I am a recent Computer Science graduate with strong expertise in React.js, Next.js, React Native, and Tailwind CSS. I have experience building 
responsive and user-friendly web and mobile applications through both academic and real-world projects. Currently, I am also deepening my knowledge
 of mobile development with React Native, and I have built several simple projects to strengthen my practical skills. I am skilled in API integration 
 and eager to contribute as a Front-end Developer in a collaborative environment while continuing to learn and grow. </p>
            <p>
I want to gain more hands-on experience in this field and look for opportunities that align with my technical and soft skills, 
especially in front-end development. My goal is to work in an environment where I can continuously learn, contribute effectively, 
and grow as a developer.
            </p>

          </Card>
        </Col>
        {/* Card kanan: Foto */}
        <Col md={4} lg={3}>
          <Card className="bg-white shadow rounded-5 h-100 overflow-hidden d-flex justify-content-center">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={800}
              height={500}
              className="w-100 h-100 object-fit-cover"
            />
          </Card>
        </Col>

<Col md={4} lg={2}>
  <a href="/resume.pdf" download className="text-decoration-none">
    <Card className="bg-white shadow rounded-5 h-100 p-4 text-center cursor-pointer">
      <img
        src="/resume.png"
        alt="Resume"
        className="img-fluid mb-3 mt-5"
        style={{ maxHeight: "512px" }}
      />
      <h2 className="fw-bold mb-0">Resume</h2>
    </Card>
  </a>
</Col>
<Col md={4} lg={9}>
  <Card className="bg-white shadow rounded-5 h-100 p-4">
    <h1 className="fw-bold mb-4">My Experience</h1>

    {/* Upwork */}
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <h5 className="fw-bold mb-1">Upwork – Freelance Frontend Developer</h5>
        <span className="text-muted">(2023)</span>
      </div>
      <p className="mb-1">
        Developed small to medium-scale projects for international clients using React.js and Next.js.
      </p>
      <p className="mb-0">Focused on building responsive UI and integrating REST APIs.</p>
    </div>

    {/* Studi Independent */}
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <h5 className="fw-bold mb-1">Binar Academy – Frontend Development</h5>
        <span className="text-muted">(2023)</span>
      </div>
      <p className="mb-0">
        Learned and practiced modern frontend technologies (React.js, Tailwind CSS, GitHub Collaboration).
      </p>
    </div>

    {/* PT Exempli Gratia */}
    <div>
      <div className="d-flex justify-content-between">
        <h5 className="fw-bold mb-1">PT Exempli Gratia – Frontend Developer Intern</h5>
        <span className="text-muted">(2024)</span>
      </div>
      <p className="mb-0">
        Assisted in developing internal web applications using Next.js and MongoDB, and optimized UI/UX performance.
      </p>
    </div>
  </Card>
</Col>



      </Row>
    </Container>
  );
}