import { useNavigate } from "react-router-dom";
import { House, Search, User } from "lucide-react";
import styles from "./Navbar.module.scss";


type NavbarProps = {
  onSearchClick?: () => void; 
};


const Navbar = ({ onSearchClick }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles[`navbar__search-box`]}>
        <button
          onClick={() => {
            onSearchClick ? onSearchClick() : navigate(-1);
          }}
          className="flex items-center"
        >
          <Search className="w-6 h-6" />
        </button>
      </div>
      <div className={styles[`navbar__home-box`]}>
        <button onClick={() => navigate("/")} className="flex items-center">
          <House className="w-6 h-6" />
        </button>
      </div>
      <div className={styles[`navbar__user-box`]}>
        <button onClick={() => navigate("/User")} className="flex items-center">
          <User className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
