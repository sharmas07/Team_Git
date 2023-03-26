import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';


function App() {
return (
	<Router>
	<Navbar />
  <Home />
	</Router>
);
}

export default App;

