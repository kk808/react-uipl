import { Button } from 'styled-bootstrap-components';
import styled, { css } from 'styled-components';

const StyledButton = styled(Button)`
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.4);
  border: 0;   
  color: #333;
  background: #DFDFDF;
  height: 50px;
  padding: 0 16px;
  &&:hover, &&:focus, &&:active {  
	border: 0;
	background: #BFBFBF;
	color: #333333;
  }
  ${({ action }) => action && css`
    color: white;
	background: #2DB300;
    font-weight: 500;
	&&:hover, &&:focus, &&:active {
		background: #259400;
		color: #fff;
	}
  `}
  ${({ sm }) => sm && css`
    height: 40px;
  `}
`;

export default StyledButton;