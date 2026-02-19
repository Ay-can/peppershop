import style from "./Filtersection.module.css";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className={style.filter}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
