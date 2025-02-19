import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="error-page">
      <h1>PAGE NOT FOUND 404</h1>
      <Link to="/">GO BACK</Link>
    </div>
  )
}
