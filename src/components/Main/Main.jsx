import React from "react";
import SignIn from "../SignIn";
import Chat from "../Chat";
import { connect } from "react-redux";

const Main = ({auth}) => {
    return (
        <div>
            {!auth.isLoaded?<Chat/>:!auth.isEmpty?<Chat/>:<SignIn/>}
        </div>
    );
};

function mapStateToProps(state) {
    return {
      auth: state.firebase.auth
    };
  }
  
  export default connect(mapStateToProps)(Main);