import { Link } from "react-router-dom";

const ErrorPages = () => {
    return (
        <div>
            <h1>opps!! this is wrong paages</h1>
             <li className="bg-green-500 p-4 rounded w-48 "><Link to="/">Go Home page</Link></li>
        </div>
    );
};

export default ErrorPages;