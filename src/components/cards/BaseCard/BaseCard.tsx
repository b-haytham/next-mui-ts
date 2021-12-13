// import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";

interface BaseCardProps extends CardProps {}

const BaseCard: React.FC<BaseCardProps> = ({ children, ...rest }) => {
  return <Card {...rest}>{children}</Card>;
};

export default BaseCard;
