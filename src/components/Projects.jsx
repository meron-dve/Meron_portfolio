function Projects() {
  return (
    <div className="projects" id="projects">
      <section id="proj1">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          <section className="project-item">
            <h3>Travel Planner ✈️ </h3>
            <p className="project-tech">
              {" "}
              Reacta(Vite) | TailwindCSS | Axios | React Router | Context API
            </p>
            <p>
              The Travel Planner Application is a web application that allows
              users to search for destinations, explore travel details, and plan
              personalized itineraries. The application integrates external APIs
              to fetch real-time travel data including flights, hotels.
            </p>
            <a
              href="https://travel-planner-bice-theta.vercel.app/"
              target="_blank"
            >
              View Webpage
            </a>
          </section>
          <section className="project-item">
            <h3>To-Do List App</h3>
            <p className="project-tech">React | Redux | CSS</p>
            <p>
              Developed a task management application with Create, Update,
              Delete, and Complete functionalities.Implemented Local Storage to
              preserve user tasks.
            </p>
            <a>View webpage</a>
          </section>{" "}
          <section className="project-item">
            <h3>To-Do List App</h3>
            <p className="project-tech">React | Redux | CSS</p>
            <p>
              Developed a task management application with Create, Update,
              Delete, and Complete functionalities.Implemented Local Storage to
              preserve user tasks.
            </p>
            <a>View webpage</a>
          </section>
        </div>
        <div className="projects-list2">
          <section className="project-item1">
            <h3>Inventory Management System</h3>
            <p className="project-tech"> Python | Tkinter | JSON</p>
            <p>
              A Python-based inventory management application for managing
              product details, stock quantities, prices, and inventory records
              with JSON data persistence.
            </p>
            <a
              href="https://github.com/meron-dve/inventory-management-system"
              target="_blank"
            >
              View on GitHub
            </a>{" "}
          </section>
          <section className="project-item">
            <h3>Beauty Salon Booking</h3>
            <p className="project-tech">React | JavaScript | CSS</p>
            <p>
              Booking webapp that can allow users to choose services they need
              and also book for day and time and the price.
            </p>
            <a>Comming Soon</a>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Projects;
