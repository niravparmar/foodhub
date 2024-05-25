import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

  constructor(props){
    super(props);

    // console.log(this.props.name+"-constructor")

  }
  componentDidMount(){
    // console.log(this.props.name+"-ComponentDidMount")

  }

  render() {
    // console.log(this.props.name+"-Render")

    return (
      <>
        <h1>About</h1>
        <p>This is About Page</p>
        {/* <User name={"Nirav"} location={"Function"}/> */}
        <UserClass />

      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <h1>About</h1>
//       <p>This is About Page</p>
//       {/* <User name={"Nirav"} location={"Function"}/> */}
//       <UserClass name={"Nirav"} location={"Class"} />
//     </>
//   );
// };

export default About;
