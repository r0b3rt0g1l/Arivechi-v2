import Image from "next/image";
import { UserRound } from "lucide-react";
import { cn } from "@/lib/cn";

export function FuncionarioAvatar({ src, nombre, size = "md", className }) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-20 w-20",
    lg: "h-32 w-32",
    xl: "h-40 w-40",
  };
  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[var(--color-guinda-deep)] to-[var(--color-guinda)] text-[var(--color-cream)] ring-4 ring-white shadow-[var(--shadow-card)]",
        sizeClasses[size],
        className,
      )}
      aria-hidden={src ? undefined : "true"}
    >
      {src ? (
        <Image
          src={src}
          alt={`Fotografía de ${nombre}`}
          fill
          sizes="160px"
          className="object-cover"
        />
      ) : (
        <UserRound className={iconSizes[size]} />
      )}
    </div>
  );
}

export default FuncionarioAvatar;
