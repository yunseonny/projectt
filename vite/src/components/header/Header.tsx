import { useNavigate } from "react-router-dom";
import { ShoppingCart, ChevronLeft } from "lucide-react";
import styles from "./Header.module.scss";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className={styles.header__Container}>
        {/* 제목 */}
        <span className={styles.headerText}>{title}</span>
      </div>
      <div className={styles.header__userBox}>
        {/* 쇼핑카트 버튼 */}
        <button
          onClick={() => navigate("/cart")}
          className="flex items-center"
          aria-label="Shopping cart"
        >
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
