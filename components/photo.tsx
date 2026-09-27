import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
  className?: string;
  aspect?: "portrait" | "wide";
};

export function Photo({ src, alt, priority = false, caption, className = "", aspect = "portrait" }: PhotoProps) {
  const ratio = aspect === "wide" ? "aspect-[3/2]" : "aspect-[4/5]";

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden bg-line ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={aspect === "wide" ? "(min-width: 1024px) 1100px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
          className="object-cover object-center"
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-ink-soft">{caption}</figcaption> : null}
    </figure>
  );
}
