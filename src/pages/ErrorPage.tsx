import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../Components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
    <NavBar/>
    <header className='font-poppins text-white ms-5 mt-4 text-xl md:text-3xl'>
      <h1>Oops...</h1>
      <h3>{isRouteErrorResponse(error) ? "This Page doesn't Exist" : "An unexpected error occurred"}</h3>
    </header>
    </>
  )
}

export default ErrorPage