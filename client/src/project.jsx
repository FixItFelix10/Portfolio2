//import project.css file
import './project.css';
//export Project component
export default function Project() {
    //return a div with information about author's projects
    return(
        <div>
            <p>Here are some of my projects:</p>
            <ul>
              //list of projects with images
                <li><img src={'./public/gpa.png'} /> A GPA calculator that allows users to input their grades and calculate their GPA.</li>  
                <br></br>
                <li><img src={'./public/miles.png'}  /> A grade calculation tool that helps students track their academic performance.</li>
                <br></br>
                <li><img src={'./public/cad-usd.png'} /> A currency converter that facilitates international transactions.</li>
            </ul>
        </div>
    );
}