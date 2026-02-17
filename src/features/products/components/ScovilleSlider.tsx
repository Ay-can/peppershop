interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function ScovilleSlider({ value, onChange }: Props) {
  return (
    <div>
      <input
        type="range"
        min={0}
        max={2_500_000}
        step={1000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span>Max Scoville: {value}</span>
    </div>
  );
}
