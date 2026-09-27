import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  caption?: string;
  className?: string;
  frame?: boolean;
};

export function Photo({
  src,
  alt,
  width,
  height,
  priority = false,
  caption,
  className = "",
  frame = false,
}: PhotoProps) {
  return (
    <figure className={className}>
      <div className={frame ? "border border-dashed border-cognac p-2 sm:p-3" : ""}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="h-auto w-full"
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm leading-relaxed text-ink-soft">{caption}</figcaption> : null}
    </figure>
  );
}
