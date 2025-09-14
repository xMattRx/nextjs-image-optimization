import Image from "next/image";

type OptimizedImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
};

export function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
}: OptimizedImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
        />
    );
}
