import { useEffect, useRef, useState } from "react";
import { CarouselData } from "../../../Utils/Carouseldata";
import CarouselItem from "./CarouselItem";

export default function CarouselWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const speed = 0.5; 

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev - speed;
        const totalWidth = container.scrollWidth / 2;
        return newOffset <= -totalWidth ? 0 : newOffset;
      });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="overflow-hidden w-full carousel-container mb-8">
      <div
        ref={containerRef}
        className="flex gap-16"
        style={{
          transform: `translateX(${offset}px)`,
          willChange: "transform",
        }}
      >
        {[...CarouselData, ...CarouselData].map((item, index) => (
          <CarouselItem key={index} title={item.title} src={item.src} />
        ))}
      </div>
    </div>
  );
}
