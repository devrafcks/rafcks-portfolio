import Image from "next/image";

export function DeviceMockup({
  src,
  alt,
  device,
  priority = false,
}: {
  src: string;
  alt: string;
  device: "laptop" | "phone";
  priority?: boolean;
}) {
  if (device === "phone") {
    return (
      <div className="mx-auto w-[min(100%,15.5rem)] rounded-[1.8rem] bg-night p-2 shadow-[0_20px_50px_rgba(43,30,32,0.25)]">
        <div className="overflow-hidden rounded-[1.35rem] bg-cream dark:bg-night-2">
          <Image
            src={src}
            alt={alt}
            width={390}
            height={844}
            sizes="248px"
            priority={priority}
            className="h-auto w-full object-contain"
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
      <div className="overflow-hidden rounded-lg bg-cream dark:bg-[#24181a]">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={800}
          sizes="(max-width: 768px) 92vw, 640px"
          priority={priority}
          className="aspect-video h-auto w-full object-contain"
        />
      </div>
    </figure>
  );
}
