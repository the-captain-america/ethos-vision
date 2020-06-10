import styled, { css } from 'styled-components';
import Theme from '../Theme';
import LightenDarkenColor from '../Theme/Color';

const FieldGroup = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	flex-direction: column;
`;

const FieldLabel = styled.span`
	height: 16px;
	font-size: 13px;
	font-weight: normal;
	font-style: normal;
	line-height: 16px;
	margin-bottom: 8px;
	font-family: ${Theme.font.fontFamily};
	color: #9592a8;
	${props =>
		props.error &&
		css`
			color: ${Theme.colors.primary.redPinkDark};
		`}
`;

const FieldIcon = styled.span`
	position: absolute;
	right: 0;
	width: 20px;
	height: 20px;
	top: 14px;
	right: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FieldContainer = styled.div`
	position: relative;
	display: block;
	width: 100%;
`;

const TextArea = styled.textarea`
	max-height: 126px;
	height: 126px;
	border-radius: 4px;
	border: 1px solid transparent;
	background: #f5f5f8;
	font-size: 15px;
	font-weight: normal;
	line-height: 20px;
	box-sizing: border-box;
	padding: 14px 16px;
	display: block;
	width: 100%;
	color: #211551;
	margin-top: 8px;
	resize: none;
	${props =>
		props.width &&
		css`
			width: ${props.width};
		`}
	&:focus {
		font-weight: normal;
		outline: none;
		border: 1px solid ${Theme.colors.primary.redPinkDark};
	}
	&::placeholder {
		font-style: italic;
		color: #9592a8;
	}
`;

const Input = styled.input`
  height: 48px;
  border-radius: 4px;
  border: 1px solid transparent;
  background: #f5f5f8;
  font-size: 15px;
  font-weight: normal;
  line-height: 20px;
  box-sizing: border-box;
  padding: 14px 16px;
  display: block;
  width: 100%;
  background: none;
  background-image: none;
  font-family: ${Theme.font.fontFamily};
  /* text-transform: uppercase; */
  font-weight: normal;
  color: #211551;
  transition: all 0.3s ease-in-out;
  ${props =>
		props.bgColor &&
		css`
			background: ${props.bgColor};
		`}

  ${props =>
		props.width &&
		css`
			width: ${props.width};
		`}
  &:hover {
    background: white;
    ${props =>
			props.bgColor &&
			css`
				background: ${LightenDarkenColor(props.bgColor, -10)};
			`}
  }
  &:focus {
    font-weight: normal;
    outline: none;
    border: 1px solid ${Theme.colors.primary.redPinkLight};
    background: white;
    ${props =>
			props.bgColor &&
			css`
				background: ${LightenDarkenColor(props.bgColor, -10)};
			`}
    ${props =>
			props.error &&
			css`
				border: 1px solid ${Theme.colors.primary.redPinkDark};
			`}
    ${props =>
			props.hasBorder &&
			css`
				border: 1px solid transparent;
			`}
  }
  &::placeholder {
    /* font-style: italic; */
    color: #9592a8;
    font-weight: normal
  }
  ${props =>
		props.error &&
		css`
			border: 1px solid ${Theme.colors.primary.redPinkDark};
		`}
  ${props =>
		props.isDisabled &&
		css`
			border: solid 1px transparent;
			background: #f5f5f8;
			cursor: not-allowed;
			color: #d6d5e4;
			&:focus {
				border: solid 1px transparent;
			}
			&:hover {
				background: #f5f5f8;
			}
		`}
`;

export { FieldGroup, TextArea, Input, FieldLabel, FieldContainer, FieldIcon };
