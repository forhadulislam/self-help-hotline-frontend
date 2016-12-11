import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import logos from './logo.svg';
import './App.css';

const Home = () => (

  <div className="top-container">
    <Nav />
    
    <div className="jumbotron">
    
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
        <h2 className="search-slogan">Search questions</h2>
          <form className="form search-form">
            <div className="form-group col-md-6">
              <input type="text" name="keyword" className="form-control" id="keyword" />
            </div>
          
            <div className="form-group col-md-4">
              <select className="form-control" id="category" name="category">
                <option value="All">Categories</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          
            <div className="form-group col-md-2">
              <button type="submit" className="btn btn-default btn-block">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );


const Nav = () => (
  
    <nav className="navbar top-menu navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand logo" href="/">
            <img src="#" />
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <div className="navbar-form navbar-right">
	        	<a href="#/login" className="btn">Login</a>
	      		<a href="#/register" className="btn">Register</a>
	      		
	      		
	      		<a href="#/settings" className="btn">Account settings</a>
	      		<a href="#/create-post" className="btn">Create Post</a>
	      		<a href="#/posts" className="btn">My posts</a>
	      		<a href="#/logout" className="btn">Logout</a>
	      		
          </div>
        </div>
      </div>
    </nav>
  
  );

const Address = () => (<h1>We are located at 555 Jackson St.</h1>);

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);



const Login = () => (
  
  <div className="form-container">
    
      <div className="general-forms">
    	  <div className="container">
    	    <div className="row">
    	       <div className="content col-md-4 col-md-offset-4">
    	         
    	         <div className="form-logo text-center">
    	             <a href="/"><img src="https://goo.gl/XEUwU6" /></a>
    	         </div>
    	         <h3 className="title">Login</h3>
    	         <form className="form login-form">
  	        	  <div className="form-group">
          	        <label>Username</label>
      				   <input type="text" className="form-control" id="username" />
      				</div>
      				  
      				  <div className="form-group">
      				    <label>Password</label>
      				    <input type="password" className="form-control" id="password" />
      				  </div>
  				      
  				      <div className="form-group">
  				        <button type="submit" className="btn btn-default btn-block">Login</button>
  				      </div>
  	               </form>
  	           
                  <div className="form-group">
          		    <small><a href="/forgot-password">Forgot your password?</a></small>
          		  </div>
    	       </div>
  	    	  
      	     </div>
        	</div>
        </div>
    </div>
  
  );
  
  
const Register = () => (
    
    <div className="form-container">
    
        <div className="general-forms">
    	  <div className="container">
    	    <div className="row">
    	       <div className="content col-md-4 col-md-offset-4">
    	         
    	         <div className="form-logo text-center">
    	             <a href="/"><img src="https://goo.gl/XEUwU6" /></a>
    	         </div>
    	         <h3 className="title">Register</h3>
    	         <form className="form login-form">
  	        	  <div className="form-group">
  	        	    <label>Username</label>
  				        <input type="text" className="form-control" id="username" />
  				      </div>
  				  
      				  <div className="form-group">
      	        	    <label>Email</label>
      				        <input type="text" className="form-control" id="email"/>
      				  </div>
  				  
  				  
      				  <div className="form-group">
      				    <label>Password</label>
      				    <input type="password" className="form-control" id="password" />
      				  </div>
  				  
      				  <div className="form-group">
      				    <label>Confirm password</label>
      				    <input type="password" className="form-control" id="confirm-password" />
      				  </div>
      			      
    			      <div className="form-group">
    			        <button type="submit" className="btn btn-default btn-block">Register</button>
    			      </div>
              </form>
    	         
	       </div>
  	    	  
	     </div>
    	</div>
    </div>
    
  </div>
  
  );
  
const Post = (props) => (
  
    <div>
      <Nav />
    
      <h3>Welcome to the Post Page</h3>
      <h2>{props.params.name}</h2>
    </div>
  
);

class App extends Component {
  
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/address" component={Address} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path='/post/:name' component={Post} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}




export default App;
