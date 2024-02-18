import logo from './logo.svg';
import './App.css';
import { Form } from './componets/Form/Form';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
   <div className="App">
    <div className='container'>
      <h1>It's work</h1>
     
      <Switch>
        
      <Route path = {'/form'} element={<Form />} />
      </Switch>
      <button  className="btn">Закрыть</button>
   </div>
  </div>
 );}
export default App;

// onClick = {closeEvent}
//  <Header/>

// <Route index element = {<ProductList/>}/>