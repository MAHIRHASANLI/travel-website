import css from "./index.module.css";

const ButtonColorfull = ({ children }) => {
  return (
    <button type="submit" className={css.button}>
      {children}
    </button>
  );
};

export default ButtonColorfull;
