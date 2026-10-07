import Image from "next/image";

type HeroArtProps = {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Aspect / min-height of the stage */
  stageClassName?: string;
};

/**
 * Floating engraved cutout — same visual language as the page hero artwork.
 */
export function HeroArt({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  sizes = "(max-width: 1024px) 100vw, 540px",
  priority = false,
  stageClassName = "min-h-[16rem] sm:min-h-[18rem]",
}: HeroArtProps) {
  return (
    <div
      className={`product-story-art relative ${stageClassName} ${className}`}
      aria-hidden={!alt}
    >
      <div className="product-story-art-aura" aria-hidden />
      <Image
        src={src}
        alt={alt}
        fill
        className={`product-story-art-img object-contain object-center ${imgClassName}`}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
