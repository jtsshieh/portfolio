import { css } from '@emotion/react';
import { useScrollTrigger } from '@material-ui/core';

function NavItem({ children }: { children: string }) {
	const handleClick = () => {
		const anchor = document.querySelector(`#${children.toLowerCase()}`);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<li
			css={css`
				color: white;
				font-size: 1.5rem;
				cursor: pointer;
				&:hover {
					color: #e6e6e6;
				}
			`}
			onClick={handleClick}
		>
			{children}
		</li>
	);
}

export function Nav() {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return (
		<nav
			css={css`
				z-index: 1001;
				position: fixed;
				height: 64px;
				width: 100%;
				${trigger &&
				css`
					background-color: #7fbcff;
					box-shadow: 0 5px 0px #7fbcff;
				`}
				transition-property: background-color, box-shadow;
				transition-duration: 0.25s;
				transition-timing-function: ease-in-out;
			`}
		>
			<ul
				css={css`
					padding: 0;
					margin: 0 auto;
					height: 100%;
					list-style-type: none;
					display: flex;
					gap: 10rem;
					align-items: center;
					justify-content: center;
				`}
			>
				<NavItem>Projects</NavItem>
				<NavItem>Contact</NavItem>
			</ul>
		</nav>
	);
}
