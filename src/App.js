import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import logos from './logo.svg';
import './App.css';
import * as firebase from '../public/js/firebase';
import '../public/js/main.js'


  
class Home extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log( localStorage['username'] );
  }
  
  handleSubmit(event) {
    console.log('An essay was submitted: ');
    var keyword = this.refs.keyword.value;
    var category = this.refs.category.value;
    console.log(category + " - " + keyword);
    
    location.href = "#/search/keyword=" + keyword + "&category=" + category;
    event.preventDefault();
  }

  render() {
    return (
      
      <div className="top-container">
          <Nav />
          
          <div className="jumbotron">
          
            <div className="container">
              <div className="col-md-8 col-md-offset-2">
              <h2 className="search-slogan">Search questions</h2>
                <form className="form search-form" onSubmit={this.handleSubmit}>
                  <div className="form-group col-md-6">
                    <input type="text" name="keyword" className="form-control" id="keyword" ref='keyword' />
                  </div>
                
                  <div className="form-group col-md-4">
                    <select className="form-control" id="category" ref="category" name="category">
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
      
    )}


  
}


class Nav extends Component {
  
  constructor(props) {
    super(props);
    var isLoggedIn = localStorage['username'];
    this.state = {isLoggedIn: isLoggedIn};
  }

  render() {
    
    let menuLinks = null;
		if ( this.state.isLoggedIn ) {
  		menuLinks = (
    		<span>
          <a href="#/settings" className="btn">Account settings</a>
      		<a href="#/create-post" className="btn">Create Post</a>
      		<a href="#/posts" className="btn">My posts</a>
      		<a href="#/logout" className="btn">Logout</a>
    		</span>
  		)
    } else {
      menuLinks = (
        <span>
          <a href="#/login" className="btn">Login</a>
    		  <a href="#/register" className="btn">Register</a>
    		</span>
    	)
    }
    
    return (
      
  
    <nav className="navbar top-menu navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand logo" href="#/">
            <img src="#/" alt="Logo" />
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <div className="navbar-form navbar-right">
	      		{menuLinks}
          </div>
        </div>
      </div>
    </nav>
  
    )
  }
  
}

const Address = () => (<h1>We are located at 555 Jackson St.</h1>);

class NotFound extends Component {
  
  render() {
    return (
        <h1>Error 404 .. This page is not found!</h1>
      )
  
  
  }
}



const Login = () => (
  
  <div className="form-container">
    
      <div className="general-forms">
    	  <div className="container">
    	    <div className="row">
    	       <div className="content col-md-4 col-md-offset-4">
    	         
    	         <div className="form-logo text-center">
    	             <a href="#/"><img src="https://goo.gl/XEUwU6" alt="Logo" /></a>
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
  
class Register extends Component {
    
  render() {
    return (
    <div className="form-container">
    
        <div className="general-forms">
    	  <div className="container">
    	    <div className="row">
    	       <div className="content col-md-4 col-md-offset-4">
    	         
    	         <div className="form-logo text-center">
    	             <a href="#/"><img src="https://goo.gl/XEUwU6" alt="Logo" /></a>
    	         </div>
    	         <h3 className="title">Register</h3>
    	         <form className="form register-form">
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
  
  )
  };
  
  

}


class CreatePost extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  onSearchBoxChange(event){
    
  }
  
  handleSubmit(event) {
    var category, keyword;
    var keyword = this.refs.keyword.value;
    location.href = "#/search/keyword=" + keyword + "&category=" + category;
    event.preventDefault();
  }
  
  render() {
    return (
      
      <div className="top-container">
          <Nav />
        
          <div className="jumbotron search"></div>
          
          <div className="container search">
              <div className="col-md-8 col-md-offset-2">
                <h2 className="search-slogan">Create Post</h2>
                <form className="form search-form" onSubmit={this.handleSubmit}>
                  
                  <div className="form-group">
                    <label>Question title</label>
                    <input type="text" name="keyword" className="form-control" id="title" />
                  </div>
                  
                  <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" name="keyword" className="form-control" id="desc"></textarea>
                  </div>
                
                  <div className="form-group">
                    <button type="submit" className="btn btn-default btn-block">Post</button>
                  </div>
                </form>
              </div>
              
              
            </div>
        </div>
    
    )
  }
}


class Search extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  onSearchBoxChange(event){
    
  }
  
  handleSubmit(event) {
    var category, keyword;
    var keyword = this.refs.keyword.value;
    location.href = "#/search/keyword=" + keyword + "&category=" + category;
    event.preventDefault();
  }
  
  render() {
    return (
      
      <div className="top-container">
          <Nav />
        
          <div className="jumbotron search"></div>
          
          <div className="container search">
              <div className="col-md-10 col-md-offset-1">
                <h2 className="search-slogan">Search questions</h2>
                <form className="form search-form" onSubmit={this.handleSubmit}>
                  <div className="form-group col-md-8 col-md-offset-1">
                    <input type="text" name="keyword" className="form-control" id="keyword" ref='keyword' onChange={this.onSearchBoxChange} defaultValue={this.props.params.query} />
                  </div>
                  
                
                  <div className="form-group col-md-2">
                    <button type="submit" className="btn btn-default btn-block">Search</button>
                  </div>
                </form>
              </div>
              
              <div className="col-md-8 col-md-offset-2">
                <div className="col-md-4">
                  <ul className="search-category list-unstyled" id="category" ref="category" name="category">
                    <h4>Filter by categories</h4>
                    <li value="All">Categories</li>
                    <li value="2">2</li>
                    <li value="3">3</li>
                    <li value="4">4</li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <ul className="list-unstyled">
                    <li>
                      <h4>Search item 1</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </li>
                    <li>
                      <h3>Search item 2</h3>
                      <p>is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </li>
                    <li>
                      <h3>Search item 3</h3>
                      <p>dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </li>
                    <li>
                      <h3>Search item 4</h3>
                      <p>Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
        </div>
    
    )
  }
}


class Post extends Component {
  
  render() {
    return (
      <div>
        <Nav />
      
        <h3>Welcome to the Post Page</h3>
        <h2>{this.props.params.name}</h2>
      </div>
    
    )
  }
}

class Logout extends Component{
  constructor(props) {
    super(props);
    localStorage.removeItem("username");
    location.href = "#/";
  }
  
  render(){
    return(
      <div>
      
      </div>
    )
  }
  
}

class App extends Component {
  
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/address" component={Address} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path='search/:query' component={Search} />
        <Route path='create-post' component={CreatePost} />
        <Route path='post/:name' component={Post} />
        <Route path='logout' component={Logout} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

export default App;
