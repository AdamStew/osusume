import { Skeleton } from '@dynatrace/strato-components-preview';
import { BoxShadows, Colors } from '@dynatrace/strato-design-tokens';
import { useState } from 'react';

interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage = ({ src, alt }: CardImageProps) => {
  const imageStyles = {
    objectFit: 'cover',
    width: 300,
    height: 400,
    border: Colors.Border.Neutral.Default,
    borderRadius: '8px 8px 0 0',
    background: Colors.Background.Surface.Default,
    boxShadow: BoxShadows.Surface.Raised.Rest,
  } as React.CSSProperties;
  const [isLoading, setLoading] = useState(true);
  const [isFailed, setFailed] = useState(false);

  return (
    <>
      {isLoading && !isFailed && (
        <div style={{ height: '400px' }}>
          <Skeleton />
        </div>
      )}
      <img
        src={src}
        style={{ ...imageStyles, display: isLoading || isFailed ? 'none' : 'block' }}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => setFailed(true)}
      />
    </>
  );
};

export default CardImage;
