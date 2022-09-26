import {Component}from 'react'
import FunctionalComponent from './FunctionalComponent'
class ClassComponent extends Component {
    render(){
        const {fname, lname}=this.props;
        return(
            <div>{`Hello from Class Component ${fname} ${lname}`}
            <FunctionalComponent fname ={"EA"} lname={"14"}/>
            </div>
        )
    }
}

export default ClassComponent