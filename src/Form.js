import React, { Component } from 'react'
import Response from './Response';
const axios = require('axios');

const querystring = require('querystring');
 

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
          name: '',
          email: '',
          apimsg: '',
          is_visible : false
        };
      }
    
     handleEmailChange = (event) => {
        this.setState({
          email:event.target.value
        })
      }
    
    handleNameChange = (event) => {
        this.setState({
            name:event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
          alert("Submitted")
          axios.post( "http://localhost:8000/register_user/" , querystring.stringify({ name: `${this.state.name}` , email : `${this.state.email}`   }))
            .then(res => {
 
                this.setState({
                    apimsg:res.data.msg,
                    is_visible: true,
                    name: "",
                    email: ""
                    
                })
                console.log( this.state.apimsg )
            })
            .catch(err => {
                console.log(err);
            });

      }

          
    
    render() {
        
      
        return (

            <div>

                {this.state.is_visible ? <Response msg_post={this.state.apimsg} /> :null}
                   
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full">
                        <div>
                            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg" alt="Workflow"/>
                            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Stoic Email-Letter
                            </h2>
                            <p className="mt-2 text-center text-sm leading-5 text-gray-600">

                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                Fill the form with appropriate details
                            </a>
                            </p>
                        </div>
                        <form className="mt-8" onSubmit={this.handleSubmit}   >
                    
                            <div className="rounded-md shadow-sm">
                            <div>
                                <input value={this.state.email} onChange={this.handleEmailChange} aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address"/>
                            </div>
                            <br/>              
                            <div className="-mt-px">
                                <input value={this.state.name} onChange={this.handleNameChange} aria-label="Name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Name"/>
                            </div>
                            </div>
                            

                            <div className="mt-6">
                            <button type="submit"  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Sign Up
                            </button>
                            </div>
                        </form>

                    <br/>
                    <br/>
                    <hr/>

                    <div role="alert">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        Note:
                        </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <p>
                        If you already have your email registered, the only change will reflect in your name (in case of a different name)
                        </p>
                        </div>
                    </div>
                        

                        </div>
                    </div>

                   

            </div>
        )
    }
}

export default Form
