import Image from "next/image";
import { forwardRef } from "react";

export const Card = forwardRef(({ id, frontAlt, frontSrc, backText }, ref) => {
  return (
    <div className="card" id={id} ref={ref}>
      <div className="card-wrapper">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Image
              priority
              src={frontSrc}
              alt={frontAlt}
              width={500}
              height={500}
            />
          </div>
          <div className="flip-card-back">
            <p>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
