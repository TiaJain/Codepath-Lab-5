import { Link } from "react-router-dom";

const NotFound = () => {
    return (
     <div>
        <p> Uh oh! There's nothing here...</p>
        <Link to="/">
            Home
        </Link>
     </div>
    );
  };
  
  export default NotFound;