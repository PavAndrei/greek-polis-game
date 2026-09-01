import {
  type ImgHTMLAttributes,
  useEffect,
  useState,
} from 'react';

type AsyncImageStatus = 'loading' | 'loaded' | 'failed';

interface AsyncImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'> {
  alt: string;
  fallbackClassName: string;
  src: string;
}

export const AsyncImage = ({
  alt,
  className,
  fallbackClassName,
  src,
  ...imageProps
}: AsyncImageProps) => {
  const [status, setStatus] = useState<AsyncImageStatus>('loading');
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    let isActualImage = true;
    const image = new Image();

    setStatus('loading');
    setLoadedSrc(null);

    image.onload = () => {
      const markImageAsLoaded = () => {
        if (!isActualImage) {
          return;
        }

        setLoadedSrc(src);
        setStatus('loaded');
      };

      if (image.decode) {
        image.decode().then(markImageAsLoaded, markImageAsLoaded);
        return;
      }

      markImageAsLoaded();
    };

    image.onerror = () => {
      if (!isActualImage) {
        return;
      }

      setLoadedSrc(null);
      setStatus('failed');
    };

    image.src = src;

    return () => {
      isActualImage = false;
    };
  }, [src]);

  if (status !== 'loaded' || !loadedSrc) {
    return <div className={fallbackClassName} aria-label={alt} />;
  }

  return (
    <img
      {...imageProps}
      className={className}
      src={loadedSrc}
      alt={alt}
    />
  );
};
