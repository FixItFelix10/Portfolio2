import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Project from './src/project'
import Layout from './components/Layout'
import Services from './src/Service'
//MainRouter component that renders the Layout component and the Routes component with the different routes for the application
const MainRouter = () => { 
    //return a div with the layout componenet and different routes for the app
    return (<div>
        <Layout />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    </div>
    )
}
//export the MainRouter component
export default MainRouter;