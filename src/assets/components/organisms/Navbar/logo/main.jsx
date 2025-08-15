import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex">
      <div>
        <Link to="/" className="flex items-center py-4 px-2">
          <span className="font-bold text-orange-500 dark:text-orange-50 text-3xl">seroroProgramming</span>
        </Link>
      </div>
    </div>
  );
}
export default Logo;