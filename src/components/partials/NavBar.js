import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Link to={'/'}>HOME</Link>{"      |     "}
            {/* <Link to={'/characters'}>CHARACTERS</Link>{" | "} */}
            <Link to={'/characters/new'}>CREATE</Link>
        </div>
    )
}