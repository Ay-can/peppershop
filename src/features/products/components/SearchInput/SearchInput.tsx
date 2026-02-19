import style from "./SearchInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Bijv. Carolina Reaper"
    />
  );
}
