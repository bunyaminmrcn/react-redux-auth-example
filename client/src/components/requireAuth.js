import React, { Component} from "react";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

export default ChildComponent => {
    class ComposedComponent extends Component {
        state = { navigate: false }
        componentDidMount() {
            this.shouldNavigateAway()
         }
      
         componentDidUpdate() {
            this.shouldNavigateAway()
         }
      
         shouldNavigateAway() {
            if(!this.props.auth && this.state.navigate == false) {
               //console.log('I need to leave')
               this.setState({navigate: true})
            }
         }

        render() {
            return <>
            { this.state.navigate && <Navigate to="/" replace={true} />}
                <ChildComponent {...this.props} />
            </>
        }
    }

    function mapStateToProps(state) {
        return {
           auth: state.auth.authenticated
        }
     }

    return connect(mapStateToProps, null)(ComposedComponent);
}