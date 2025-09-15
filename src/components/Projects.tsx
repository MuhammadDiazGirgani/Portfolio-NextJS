import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <Container id="projects" className="my-2">
      <h2 className="fw-bold mb-4 text-center">Projects</h2>
      <Row>
        {/* Card 1 */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow border-0 rounded-4 overflow-hidden position-relative">
            <a
              href="https://kawalu.id/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
              <Image
                src="/turnedin.png"
                alt="Turnedin"
                width={400}
                height={200}
                className="w-100"
              />
              <div className="p-3">
                <h3 className="fw-bold fs-5">Turnedin</h3>
                <p className="text-muted">
                   Turnedin is a web application designed for university students working on theses or coursework. It includes plagiarism checking, AI content detection, document revision, paraphrasing, and translation services. This project was developed during my internship at PT Exempli Gratia, where I worked as a frontend developer using EJS and Bootstrap CSS alongside a team.
                </p>
              </div>
            </a>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow border-0 rounded-4 overflow-hidden position-relative">
            <a
              href="https://fpbinar-kel7.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
              <Image
                src="/courseapp.png"
                alt="Course App"
                width={400}
                height={200}
                className="w-100"
              />
              <div className="p-3">
                <h3 className="fw-bold fs-5">CourseIn</h3>
                <p className="text-muted">
                   CourseIn provides free and paid IT courses, including Data Science, Web Development, Android Development, and UI/UX Design. I developed this web application as a Frontend Developer during my independent study at Binar Academy, using React JS and Tailwind CSS in collaboration with a frontend team, integrating data through API requests tested via Postman from the backend team.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/binar-final-project-kelompok7/finalproject-bm7"
              target="_blank"
              rel="noopener noreferrer"
              className="position-absolute bottom-0 end-0 m-2 text-dark"
            >
              <FaGithub size={30} />
            </a>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow border-0 rounded-4 overflow-hidden position-relative">
            <a
              href="https://guitar-vault-store.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
              <Image
                src="/guitarvault.png"
                alt="GuitarVaultStore"
                width={400}
                height={200}
                className="w-100"
              />
              <div className="p-3">
                <h3 className="fw-bold fs-5">GuitarVaultStore</h3>
                <p className="text-muted">
                   GuitarVaultStore is a simple e-commerce web application for selling and buying guitars. It features shopping cart, wishlist, total items tracking, user authentication (login, logout, edit profile), and an admin dashboard with full CRUD functionality. The project was built using TypeScript and React Bootstrap.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/MuhammadDiazGirgani/GuitarVault-Store"
              target="_blank"
              rel="noopener noreferrer"
              className="position-absolute bottom-0 end-0 m-2 text-dark"
            >
              <FaGithub size={30} />
            </a>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow border-0 rounded-4 overflow-hidden position-relative">
            <a
              href="https://drive.google.com/drive/folders/1C2iq1oweshfgeOBNQ4b8FjWN886yHU_N?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
              <Image
                src="/movielistapp.jpg"
                alt="MovielistApp"
                width={400}
                height={300}
                className="w-100"
              />
              <div className="p-3">
                <h3 className="fw-bold fs-5">MovielistApp</h3>
                <p className="text-muted">
                  MovielistApp is my first React Native project, developed to explore Android development. It includes search, favorites, categories, movie details, and language switching, fetching data from the TMDB API. The project uses React Native, React Bootstrap, and styling via React Native StyleSheet.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/MuhammadDiazGirgani/Movielist-App-React-Native"
              target="_blank"
              rel="noopener noreferrer"
              className="position-absolute bottom-0 end-0 m-2 text-dark"
            >
              <FaGithub size={30} />
            </a>
          </Card>
        </Col>

        {/* Card 5 */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow border-0 rounded-4 overflow-hidden position-relative">
            <a
              href="https://drive.google.com/drive/folders/1wMdH0P-4sqMfFFntvBf90gMO923vautq?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
              <Image
                src="/newsapp.jpg"
                alt="NewsApp"
                width={400}
                height={300}
                className="w-100"
              />
              <div className="p-3">
                <h3 className="fw-bold fs-5">NewsApp</h3>
                <p className="text-muted">
                   NewsApp is a simple mobile application built for personal use to access news quickly while practicing React Native skills. It fetches news from public repositories, with features like dark mode, adjustable text size, and category-based search. Developed using Expo React Native and styled with React Native StyleSheet.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/MuhammadDiazGirgani/NewsApp-React-Native"
              target="_blank"
              rel="noopener noreferrer"
              className="position-absolute bottom-0 end-0 m-2 text-dark"
            >
              <FaGithub size={30} />
            </a>
          </Card>
        </Col>

        {/* Card 6 */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow border-0 rounded-4 overflow-hidden position-relative">
            <a
              href="https://drive.google.com/drive/folders/1XHlHzkf8feQh59ancz7nuK2eGlRWQMSM?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark d-block"
            >
              <Image
                src="/weatherapp.jpg"
                alt="WeatherApp"
                width={400}
                height={300}
                className="w-100"
              />
              <div className="p-3">
                <h3 className="fw-bold fs-5">WeatherApp</h3>
                <p className="text-muted">
                  WeatherApp is a personal mobile application to monitor local weather using data from the OpenWeatherMap API. It includes language switching, notifications, and temperature unit toggle (°C / °F). The app is single-page, built with React Native CLI, and styled with React Native StyleSheet.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/MuhammadDiazGirgani/WeatherApp-React-Native"
              target="_blank"
              rel="noopener noreferrer"
              className="position-absolute bottom-0 end-0 m-2 text-dark"
            >
              <FaGithub size={30} />
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
