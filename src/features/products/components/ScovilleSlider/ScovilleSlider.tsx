import style from "./ScovilleSlider.module.css";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function ScovilleSlider({ value, onChange }: Props) {
  const min = 0;
  const max = 2_500_000;
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <input
        className={style.slider}
        type="range"
        min={0}
        max={2_500_000}
        step={10_000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill-percentage": `${percentage}%` } as React.CSSProperties}
      />
      <div className={style.sliderInfo}>
        <span>{value.toLocaleString("nl-NL")}</span>
        <span>{max.toLocaleString("nl-NL")}</span>
      </div>
    </div>
  );
}
