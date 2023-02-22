import React from "react"

class ComponentLifeCycle extends React.Component{

    componentDidMount(){
       console.log('hiiiiiiiiiii')
    }

    render(){

        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <p>Life cycle method implementation!!!</p>
            </div>
        )
    }
}

export default ComponentLifeCycle