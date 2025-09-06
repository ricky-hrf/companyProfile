import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex justify-center items-center bg-orange-100">
      <p className="text-xl font-bold">
        Halaman belum tersedia, Maaf yah🙏🙏
      </p>
      <p>{error.message}</p>
    </div>
  )
} 
export default ErrorPage;