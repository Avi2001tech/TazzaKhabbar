import './App.css';

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './components/NavComp';
import News from './components/News';
import { Container } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Router>
          <NavComp/>
          <Container>
            <Routes>
                <Route path="/" element={<News pageSize={5} country="in" category="general"/>}/>
                <Route path="/science" element={<News pageSize={5} country="in" category="science"/>}/>
                <Route path="/business" element={<News pageSize={5} country="in" category="business"/>}/>
                <Route path="/entertainment" element={<News pageSize={5} country="in" category="entertainment"/>}/>
                <Route path="/health" element={<News pageSize={5} country="in" category="health"/>}/>
                <Route path="/sports" element={<News pageSize={5} country="in" category="sports"/>}/>
                <Route path="/general" element={<News pageSize={5} country="in" category="general"/>}/>
                <Route path="/technology" element={<News pageSize={5} country="in" category="technology"/>}/>
            </Routes>
          </Container>
        </Router>          
      </div>
      </>
    )
  }
}

