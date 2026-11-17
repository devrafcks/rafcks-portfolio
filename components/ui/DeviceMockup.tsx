import Image from "next/image";

export function DeviceMockup({
  src,
  alt,
  device,
  priority = false,
  hover = false,
  tall = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  device: "laptop" | "phone";
  priority?: boolean;
  hover?: boolean;
  tall?: boolean;
  width?: number;
  height?: number;
}) {
  const zoom = hover ? "transition duration-500 group-hover:scale-[1.04]" : "";
  const imageWidth = width ?? (device === "phone" ? 390 : 1280);
  const imageHeight = height ?? (device === "phone" ? 844 : 800);
  if (device === "phone") {
    return (
      <div className="mx-auto w-[min(100%,15.5rem)] rounded-[1.8rem] bg-night p-2 shadow-[0_20px_50px_rgba(43,30,32,0.25)]">
        <div className="overflow-hidden rounded-[1.35rem] bg-cream dark:bg-night-2">
          <Image
            src={src}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            sizes="248px"
            priority={priority}
            className={`h-auto w-full object-contain ${zoom}`}
          />
        </div>
      </div>
    );
  }

  return (
    <figure className="rounded-2xl bg-night p-2.5 shadow-[0_24px_50px_rgba(43,30,32,0.22)]">
      <div className="mb-2 flex gap-1.5 px-2" aria-hidden="true">
        <span className="size-2 rounded-full bg-white/30" />
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/20" />
      </div>
      <div className={`overflow-x-hidden rounded-lg bg-cream dark:bg-[#24181a] ${tall ? "max-h-[min(52vh,32rem)] overflow-y-auto" : "overflow-hidden"}`}>
        <Image
          src={src}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          sizes="(max-width: 768px) 92vw, 640px"
          priority={priority}
          className={`h-auto w-full ${tall ? "object-contain" : "aspect-video object-contain"} ${zoom}`}
        />
      </div>
    </figure>
  );
}
