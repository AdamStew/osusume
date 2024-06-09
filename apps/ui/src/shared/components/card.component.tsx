import { Flex } from '@dynatrace/strato-components-preview';
import { BoxShadows, Colors } from '@dynatrace/strato-design-tokens';
import React, { ReactElement } from 'react';

interface CardProps {
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
  image?: ReactElement;
}

const Card = ({ children, image, style }: CardProps) => {
  const defaultStyle = {
    border: Colors.Border.Neutral.Default,
    borderRadius: '0 0 8px 8px',
    background: Colors.Background.Surface.Default,
    boxShadow: BoxShadows.Surface.Raised.Rest,
    padding: '1rem 2rem',
    height: '100%',
  };

  return (
    <Flex flexDirection="column" gap={2} width={300}>
      {image}
      <Flex flexDirection="column" style={{ ...defaultStyle, ...style }}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Card;
