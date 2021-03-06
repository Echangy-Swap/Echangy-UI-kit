import styled from "styled-components";
import Button from "../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  border-radius: 8px;
  margin-top: 0;  
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    
    margin-top: 2.2rem;
  }

`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
