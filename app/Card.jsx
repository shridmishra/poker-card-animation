import Image from "next/image";

export const Card = ({ id, frontAlt, frontSrc, backText }) => {
  return (
    <div className="card" id={id}>
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
};
