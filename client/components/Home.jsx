import { Link, Route } from 'react-router-dom';
export default function Home() {
   return (
        <div>
            <p>Hello World! I'm a student at centennial college, and I'm an aspiring software engineer.</p>
            <p>Click <Link to="/about">HERE</Link> to learn more about me.</p>
            <p>Click <Link to="/education">HERE</Link> to learn about my education.</p>
            <p>Click <Link to="/project">HERE</Link> to learn about my projects.</p>
            <p>Click <Link to="/contact">HERE</Link> to contact me.</p>
            <p>Click <Link to="/services">HERE</Link> to learn more about the services I can provide.</p>
        </div>
    );
}
