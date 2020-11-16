import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link , Redirect,Switch } from "react-router-dom";
 


class Response extends Component {
    render() {


        var refreshPage = () => {
            window.location.reload();
        }
        return (
 

            <div className="text-gray-700 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                 
                <div>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Important</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    {this.props.msg_post}
                    </p>
                    <br/> 
                <button onClick={refreshPage} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >
                    Refresh
                </button>
                </div>
                </div>
            </div>
            </div>
             


 


        )
    }
}

export default Response
