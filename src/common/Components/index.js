import styled, { css } from 'styled-components';
import Theme from '../Theme';
import LightenDarkenColor from '../Theme/Color';

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;

const Text = styled.p`
  font-family: ${Theme.font.fontFamily};
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 8px 0 0 0;
  line-height: 20px;
  ${props =>
		props.link &&
		css`
			cursor: pointer;
		`}
  ${props =>
		props.center &&
		css`
			text-align: center;
		`}
  ${props =>
		props.reset &&
		css`
			margin: 0;
		`}
`;

const PageContainer = styled.div`
	position: fixed;
	top: 10px;
	left: 10px;
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	padding: 8px 16px;
	p {
		margin: 0;
	}
`;

const Row = styled.div`
  background: white;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
  &:hover {
    cursor: pointer;
    background: #f1eeea;
  }
  h2 {
    font-size: 16px;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 150px;
    max-width: 150px;
  }
  span {
    margin-left: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span.active {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: #a2e8d9;
    border-radius: 50%;
  }
  span.inactive {
    width: 20px;
    height: 20px;
    background: #d48e80;
    display: inline-block;
    border-radius: 50%;
  }
  ${props =>
		props.justify &&
		css`
			justify-content: ${props.justify};
		`}
  ${props =>
		props.highlight &&
		css`
			background: #f5f5f8;
			border: 1px solid #f5f5f8;
		`}
  ${props =>
		props.border &&
		css`
			border: 1px solid ${props.border};
		`}
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-sizing: border-box;
	${props =>
		props.align &&
		css`
			justify-content: ${props.align};
			align-items: flex-start;
		`}
	h1,
  h2,
  h3 {
		margin-top: 0;
	}
`;

const Background = styled.div`
	background: #eafefc;
	width: 100%;
	/* padding: 24px; */
	box-sizing: border-box;
	height: 100%;
`;

const Grid = styled.div`
	padding-left: 24px;
	padding-right: 24px;
	width: 100%;
	box-sizing: border-box;
	margin: 0 auto;
`;

const Button = styled.button`
  border: none;
  background-color: #83c1c7;
  border-radius: 8px;
  padding: 12px;
  color: white;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  cursor: pointer;
  ${props =>
		props.width &&
		css`
			width: ${props.width};
		`}
  &:focus {
    outline: none;
  }
  &.square {
    background-color: #83c1c7;
    color: white;
  }
  &:hover {
    background-color: #83c1c7;
  }
  ${props =>
		props.verticalPush &&
		css`
			margin-top: ${props.verticalPush}px;
		`}
  ${props =>
		props.horizontalPush &&
		css`
			margin-left: ${props.horizontalPush}px;
		`}
  svg {
    margin-left: 8px;
  }
  ${props =>
		props.reset &&
		css`
			svg {
				margin: 0;
			}
		`}
  ${props =>
		props.variant === 'teal' &&
		css`
			background-color: ${Theme.colors.tertiary.babyBlueDark};
			&:hover {
				background-color: ${LightenDarkenColor(
					Theme.colors.primary.babyBlueDark,
					-10
				)};
			}
		`}
  ${props =>
		props.variant === 'white' &&
		css`
			background-color: white;
			color: black;
			&:hover {
				background-color: ${LightenDarkenColor('#ffffff', -10)};
				color: black;
			}
		`}
  ${props =>
		props.variant === 'orange' &&
		css`
			background-color: ${Theme.colors.primary.redPinkDark};
			&:hover {
				background-color: ${LightenDarkenColor(
					Theme.colors.primary.redPinkDark,
					-10
				)};
			}
		`}
`;

const Main = styled.div`
	height: 100%;
	background: #dbeaf0;
	padding: 24px;
	${props =>
		props.height &&
		css`
			height: ${props.height}px;
		`}
	width: calc(100% - 200px);
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
		box-sizing: border-box;
		margin-top: 16px;
	}
`;

const Circle = styled.div`
  max-width: 200px;
  max-height: 200px;
  min-width: 75px;
  min-height: 75px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #e8aea2;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
		props.align &&
		css`
			align-items: ${props.align};
		`}
  ${props =>
		props.horizontalPush &&
		css`
			margin-top: ${props.horizontalPush}px;
		`}
  h2 {
    font-size: 16px;
		margin: 0;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
  }
  ${props =>
		props.size &&
		css`
			max-width: ${props.size}px;
			max-height: ${props.size}px;
		`}
    ${props =>
			props.padding &&
			css`
				padding: ${props.padding};
			`}
  ${props =>
		props.radius &&
		css`
			border-radius: ${props.radius};
		`}
    h1, h2 {
      width: 100%;
      text-align: center;
    }
`;

const Item = styled.li`
	display: block;
	width: 100%;
	width: 100%;
	box-sizing: border-box;
	font-family: ${Theme.font.fontFamily};
	font-weight: 600;
	padding: 8px;
	text-align: left;
	position: relative;
	a {
		font-weight: normal;
		font-family: ${Theme.font.fontFamily};
	}
	&.is-active {
		a {
			font-weight: 600;
		}
		&:after {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			width: 3px;
			height: 100%;
			background: #e8aea2;
		}
	}
	&.last {
		margin-top: auto;
	}
	a {
		color: black;
		text-decoration: none;
		font-family: ${Theme.font.fontFamily};
		&:hover {
			color: black;
		}
	}
`;

const Modal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 24px;
	width: 60%;
	height: 60%;
	background: white;
	border-radius: 16px;
	z-index: 999;
	display: none;
	${props =>
		props.isActive &&
		css`
			display: block;
		`}
	button.close {
		background: none !important;
		border: none;
		outline: none;
		text-align: center;
		position: absolute;
		right: 16px;
		top: 16px;
		font-weight: normal !important;
		color: black !important;
	}
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 998;
	background: rgba(0, 0, 0, 0.2);
	display: none;
	${props =>
		props.isActive &&
		css`
			display: block;
		`}
`;

const Block = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 8px;
  background: #e8aea2;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
		props.maxWidth &&
		css`
			width: 100%;
			max-width: ${props.maxWidth}px;
		`}
  ${props =>
		props.direction &&
		css`
			flex-direction: ${props.direction};
		`}
    ${props =>
			props.shadow &&
			css`
				box-shadow: 8px 8px 0px 3px rgba(0, 0, 0, 0.04);
			`}
  ${props =>
		props.align &&
		css`
			align-items: ${props.align};
		`}
  ${props =>
		props.reset &&
		css`
			padding: 0;
			background: transparent;
			justify-content: flex-start;
			align-items: flex-start;
			flex-direction: column;
		`}
  ${props =>
		props.justify &&
		css`
			justify-content: ${props.justify};
		`}
  ${props =>
		props.verticalPush &&
		css`
			margin-top: ${props.verticalPush}px;
		`}
  ${props =>
		props.bgColor &&
		css`
			background: ${props.bgColor};
		`}
    ${props =>
			props.zIndex &&
			css`
				z-index: ${props.zIndex};
			`}
  ${props =>
		props.height &&
		css`
			height: ${props.height}px;
		`}
    ${props =>
			props.padding &&
			css`
				padding: ${props.padding}px;
			`}
`;

const Heading = styled.h1`
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 24px;
	font-size: 20px;
	padding: 0;
	position: relative;
	font-family: ${Theme.font.fontFamily};
	text-transform: uppercase;
	font-weight: 600;
	text-overflow: ellipsis;
`;

const Container = styled.div`
	background: white;
	width: 100%;
	overflow: auto;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	padding: 24px;
	box-sizing: border-box;
	align-items: flex-start;
	text-transform: uppercase;
	font-family: ${Theme.font.fontFamily};
	${props =>
		props.column &&
		css`
			flex-direction: column;
			box-sizing: border-box;
			margin-left: auto;
			margin-right: auto;
			max-width: 580px;
			width: 100%;
			padding: 24px 24px 24px 24px;
		`}
	${props =>
		props.left &&
		css`
			flex-direction: row;
			padding: 0;
		`}
	button {
		border: none;
		background: #83c1c7;
		border-radius: 8px;
		padding: 12px;
		color: white;
		font-size: 15px;
		text-transform: uppercase;
		&:focus {
			outline: none;
		}
		&.square {
			background: #83c1c7;
			color: white;
		}
		&:hover {
			background: #83c1c7;
			cursor: pointer;
		}
	}
	span {
		white-space: nowrap;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	input {
		width: 100%;
		padding: 16px;
		border-radius: 8px;
		background: white;
		border: none;
		font-size: 16px;
		margin-top: 16px;
		line-height: 20px;
		background: #f5f5f8;
		font-family: 'Montserrat', sans-serif;

		&:focus {
			outline: none;
		}
		p {
			/* margin-top: 0 !important; */
			/* margin-bottom: 8px !important; */
			&.reset {
				margin: 0 !important;
			}
			margin: 0 !important;
		}
		box-sizing: border-box;
	}

	section {
		height: 100%;
		width: 200px;
		background: white;
		padding: 16px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		ul {
			padding-left: 24px;
		}
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	box-sizing: border-box;
	margin-top: 16px;
	li:last-child {
		margin-top: 100%;
		background: white;
	}
`;

const Input = styled.input`
	width: 100%;
	padding: 12px;
	border-radius: 8px;
	background: white;
	border: none;
	font-size: 16px;
	margin-top: 16px;
	line-height: 20px;
	box-sizing: border-box;
	background: #f5f5f8;
	font-family: 'Montserrat', sans-serif;
	${props =>
		props.verticalPush &&
		css`
			margin-top: ${props.verticalPush}px;
		`}
	&:focus {
		outline: none;
	}
`;

const Creative = styled.div``;

export {
	Container,
	Circle,
	Content,
	Background,
	Item,
	Button,
	Flex,
	Overlay,
	Heading,
	Main,
	Creative,
	Modal,
	Grid,
	List,
	Text,
	Input,
	Block,
	Row
};
