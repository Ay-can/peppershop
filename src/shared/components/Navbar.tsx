import style from "./Navbar.module.css";
import pepperIcon from "../../assets/pepper-icon.png";

interface Props {
  brand?: string;
  links: { label: string; href: string }[];
}

export function Navbar({ brand, links }: Props) {
  return (
    <nav className={style.navbar}>
      {brand && (
        <div className={style.brand}>
          <img className={style.logo} src={pepperIcon} />
          {brand}
        </div>
      )}
      <div className={style.links}>
        {links.map((link) => (
          <a key={link.href} href={link.href} className={style.link}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
