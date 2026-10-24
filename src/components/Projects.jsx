function Projects() {
  return (
    <div className="container">
    <div className="projects" id="projects">
      <div id="proj1">
        <h2 className="projects-title">Projects</h2>
        <div className="thefrist-2">
          <section className="eachbox">
            <h3>Travel Planner ✈️ </h3>
            <p className="languge">
              {" "}
              Reacta(Vite) | TailwindCSS | Axios | React Router | Context API
            </p>
            <p>
              The Travel Planner Application is a web application that allows
              users to search for destinations, explore travel details.
            </p>
            <a
              href="https://travel-planner-bice-theta.vercel.app/"
              target="_blank"
              className="languge"
            >
              View Webpage
            </a>
          </section>
          <section className="eachbox">
            <h3>To-Do List App</h3>
            <p className="languge">React | Redux | CSS</p>
            <p>
              Developed a task management application with Create, Update,
              Delete, and Complete functionalities.Implemented Local Storage to
              preserve user tasks.
            </p>
            <a className="languge">View webpage</a>{" "}
          </section>
        </div>
        <div className="thelast-2">
          <section className="eachbox">
            <h3>Inventory Management System</h3>
            <p className="languge"> Python | Tkinter | JSON</p>
            <p>
              A Python-based inventory management application for managing
              product details, stock quantities, prices, and inventory records
              with JSON data persistence.
            </p>
            <a
              href="https://github.com/meron-dve/inventory-management-system"
              target="_blank"
              className="languge"
            >
              View on GitHub
            </a>{" "}
          </section>
          <section className="eachbox">
            <h3>Beauty Salon Booking</h3>
            <p className="languge">React | JavaScript | CSS</p>
            <p>
              Booking webapp that can allow users to choose services they need
              and also book for day and time and the price.
            </p>
            <a className="languge">Comming Soon</a>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Projects;
<div className="pro2"></div>;
