import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Home from '../Components/Home';
import About from '../Components/About';
import AllStudents from '../Components/AllStudents';
import AddStudent from '../Components/AddStudent';
import EditStudent from '../Components/EditStudent';
import styles from '../Components/style.module.css'
import StudentDetails from '../Components/StudentDetails'
import Class1 from '../Components/class/Class1';
import Class2 from '../Components/class/Class2';
import Class3 from '../Components/class/Class3';
import Class4 from '../Components/class/Class4';
import Class5 from '../Components/class/Class5';
import Class6 from '../Components/class/Class6';
import Class7 from '../Components/class/Class7';
import Class8 from '../Components/class/Class8';
import Class9 from '../Components/class/Class9';
import Class10 from '../Components/class/Class10';

function Routes() {
  return (
    <div className={styles.Route}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/allstudents' component={AllStudents}/>
          <Route exact path='/allstudents/:id' component={StudentDetails}/>
          <Route path='/allstudents/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class1' component={Class1}/>
          <Route exact path='/class1/:id' component={StudentDetails}/>
          <Route path='/class1/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class2' component={Class2}/>
          <Route exact path='/class2/:id' component={StudentDetails}/>
          <Route path='/class2/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class3' component={Class3}/>
          <Route exact path='/class3/:id' component={StudentDetails}/>
          <Route path='/class3/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class4' component={Class4}/>
          <Route exact path='/class4/:id' component={StudentDetails}/>
          <Route path='/class4/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class5' component={Class5}/>
          <Route exact path='/class5/:id' component={StudentDetails}/>
          <Route path='/class5/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class6' component={Class6}/>
          <Route exact path='/class6/:id' component={StudentDetails}/>
          <Route path='/class6/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class7' component={Class7}/>
          <Route exact path='/class7/:id' component={StudentDetails}/>
          <Route path='/class7/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class8' component={Class8}/>
          <Route exact path='/class8/:id' component={StudentDetails}/>
          <Route path='/class8/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class9' component={Class9}/>
          <Route exact path='/class9/:id' component={StudentDetails}/>
          <Route path='/class9/:id/edit/:id' component={EditStudent}/>

          <Route exact path='/class10' component={Class10}/>
          <Route exact path='/class10/:id' component={StudentDetails}/>
          <Route path='/class10/:id/edit/:id' component={EditStudent}/>
          
          <Route path='/addstudent' component={AddStudent}/>
          <Route path='/about' component={About}/>
          <Route render={() =><div>Error: 404, Page not found</div>}/> 
        </Switch>
    </div>
  );
}

export default Routes;
