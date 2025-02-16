import { useNavigate } from "react-router"
import "../../assets/css/error404.css"

export default function Error404() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <div className="main">
        <div className="not-fouund-404">
          <h1>Oops!</h1>
        </div>
        
        <p>Page Not Found !</p>
        <button onClick={handleClick}>Back to home</button>
      </div>
    </>
  );
}
