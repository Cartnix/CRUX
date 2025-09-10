export default function CodeLines() {
  const pattern = [2, 3, 2, 3, 2, 3];

  return (
    <div className="p-3 rounded-xl flex flex-col gap-2">
      <div className="w-[60%] h-[2px] bg-[rgba(255,255,255,0.8)] rounded mb-"></div>
      {pattern.map((cols, i) => (
        <div
          key={i}
          className={`grid grid-cols-${cols} gap-2`}
        >
          {Array.from({ length: cols }).map((_, j) => (
            <div
              key={j}
              className="h-[2px] bg-[rgba(255,255,255,.2)] rounded"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
