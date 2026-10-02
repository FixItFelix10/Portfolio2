import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainRouter from '../MainRouter';
//App component that renders the MainRouter component 
const App = () => {  
  return (
    
   <Router>
    <img src={'./public/image.png'} /> 

  <MainRouter />

   </Router>
   );
};
export default App;