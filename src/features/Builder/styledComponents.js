import styled from 'styled-components';
import Theme from '../../common/Theme';

const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	.draggable-main {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		user-select: none;
		font-family: ${Theme.font.fontFamily};
		display: flex;
		justify-content: center;
		align-items: center;
		background: #f0f0f0;
	}

	.content {
		position: relative;
		width: 100%;
		height: 240px;
	}

	.content > div {
		position: absolute;
		box-sizing: border-box;
		width: 100%;
		box-sizing: border-box;
		width: 100%;
	}
	.draggable-main {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		user-select: none;
		font-family: ${Theme.font.fontFamily};
		display: flex;
		justify-content: center;
		align-items: center;
		background: #f0f0f0;
	}

	.content {
		position: relative;
		width: 100%;
		height: 240px;
	}

	.content > div {
		position: absolute;
		box-sizing: border-box;
		width: 100%;
	}

	.content > div {
		position: absolute;
		box-sizing: border-box;
		width: 100%;
		height: 90px;
		overflow: visible;
		pointer-events: auto;
		transform-origin: 50% 50% 0px;
		border-radius: 5px;
		color: white;
		line-height: 90px;
		padding-left: 32px;
		font-size: 14.5px;
		background: lightblue;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.content > div:nth-child(1) {
		background: ${Theme.colors.primary.redPink};
	}
	.content > div:nth-child(2) {
		background: ${Theme.colors.secondary.navyBlue};
	}
	.content > div:nth-child(3) {
		background: ${Theme.colors.tertiary.babyBlueLight};
	}
	.content > div:nth-child(4) {
		background: ${Theme.colors.tertiary.babyBlueLight};
	}
`;

export { Container };
