import { Borders, Spacings } from '@dynatrace/strato-design-tokens';

interface ChipProps {
  children: JSX.Element[] | JSX.Element | string;
  color?: string;
}

const Chip = (props: ChipProps) => {
  const { children, color } = props;
  const chipStyle = {
    minWidth: '0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    paddingLeft: Spacings.Size8,
    paddingRight: Spacings.Size8,
    paddingTop: Spacings.Size2,
    paddingBottom: Spacings.Size2,
    marginRight: Spacings.Size4,
    borderRadius: Borders.Radius.Field.Default,
    ...(color && { backgroundColor: color }),
    ...(!color && { border: 'solid #FFFFFF', borderWidth: '1px' }),
  };

  return <div style={chipStyle}>{children}</div>;
};

export default Chip;
