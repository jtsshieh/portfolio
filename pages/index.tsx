import Image from 'next/image';
import profilePic from '../public/pfp.png';
import { css } from '@emotion/react';
import bg from '../public/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Nav } from '../components/nav';
import {
	faDiscord,
	faGithub,
	faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

const highlight = css`
	background-color: #7fbcff;
	padding: 5px;
	border-radius: 10px;
`;

export function CoverSection() {
	return (
		<section
			css={css`
				height: 100vh;
				width: 100%;
				display: flex;
				flex-direction: column;
				background: url(${bg.src}) center no-repeat fixed;
				align-items: center;
				justify-content: center;
				text-align: center;
				color: white;
			`}
		>
			<Image
				src={profilePic}
				alt="Profile Picture"
				width={256}
				height={256}
				css={css`
					border-radius: 50%;
				`}
			/>
			<h1>Hi I&apos;m Justin</h1>
			<h2>
				You may also know me as <span css={highlight}>jtsshieh</span> from most
				platforms.
			</h2>
			<h2>I&apos;m a web developer.</h2>
			<svg
				viewBox="0 0 1440 320"
				xmlns="http://www.w3.org/2000/svg"
				css={css`
					position: absolute;
					bottom: 0;
				`}
			>
				<path
					fill="#7fbcff"
					d="M0,288L34.3,282.7C68.6,277,137,267,206,234.7C274.3,203,343,149,411,154.7C480,160,549,224,617,224C685.7,224,754,160,823,160C891.4,160,960,224,1029,240C1097.1,256,1166,224,1234,218.7C1302.9,213,1371,235,1406,245.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
				/>
			</svg>
		</section>
	);
}

function ProjectButton({
	icon,
	text,
	href,
}: {
	icon: IconDefinition;
	text: string;
	href: string;
}) {
	return (
		<a
			css={css`
				color: white;
				text-decoration: none;
				background-color: #59caef;
				border-radius: 10px;
				padding: 1rem;
			`}
			href={href}
		>
			<FontAwesomeIcon icon={icon} /> {text}
		</a>
	);
}

function Project({
	name,
	description,
	color,

	buttons,
}: {
	name: string;
	description: string;
	color: string;

	buttons: Array<{ icon: IconDefinition; text: string; href: string }>;
}) {
	return (
		<div
			css={css`
				border-radius: 10px;
				background-color: ${color};
				padding: 2rem;
				color: white;
				display: flex;
				flex-direction: column;
			`}
		>
			<h3
				css={css`
					margin: 0;
					font-size: 2rem;
				`}
			>
				{name}
			</h3>
			<p
				css={css`
					line-height: 1.5;
					flex: 1;
				`}
			>
				{description}
			</p>
			<div
				css={css`
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					gap: 1rem;
					@media (max-width: 600px) {
						grid-template-columns: 1fr 1fr;
					}
				`}
			>
				{buttons.map(({ icon, text, href }) => (
					<ProjectButton key={text} icon={icon} text={text} href={href} />
				))}
			</div>
		</div>
	);
}

function ProjectsSection() {
	return (
		<section
			css={css`
				display: flex;
				padding: 2rem;
				flex-direction: column;
				color: white;
			`}
			id="projects"
		>
			<h1>My Projects</h1>

			<div
				css={css`
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-auto-rows: 1fr;
					gap: 1rem;

					@media (max-width: 1400px) {
						grid-template-columns: 1fr 1fr;
					}

					@media (max-width: 1000px) {
						grid-template-columns: 1fr;
					}
				`}
			>
				<Project
					name="Librebird"
					description="Librebird is an open source email management application featuring powerful tools and utilities for service administrators."
					color="#3f3d6b"
					buttons={[
						{
							text: 'GitLab',
							icon: faGitlab,
							href: 'https://gitlab.com/rubellite/librebird',
						},
						{
							text: 'Website',
							icon: faGlobe,
							href: 'https://librebird.xyz',
						},
					]}
				/>

				<Project
					name="Ship Dock"
					description="Ship Dock is a web app allowing you to interact with docker easily and from the web."
					color="#007aff"
					buttons={[
						{
							text: 'GitHub',
							icon: faGithub,
							href: 'https://github.com/jtsshieh/ship-dock',
						},
					]}
				/>
			</div>
		</section>
	);
}

function ContactMethod({
	icon,
	iconLink,
	platform,
	children,
}: {
	icon: IconDefinition;
	iconLink: string;
	platform: string;
	children: ReactNode;
}) {
	return (
		<li
			css={css`
				gap: 1rem;
				display: grid;
				grid-template-columns: 1fr 3fr;

				@media (max-width: 700px) {
					grid-template-columns: 1fr 2fr;
				}
			`}
		>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;

					@media (max-width: 700px) {
						margin: 2.5rem;
					}
				`}
			>
				<a
					href={iconLink}
					css={css`
						text-decoration: none;
						color: white;
						font-size: 10rem;

						&:hover {
							color: #e6e1d2;
						}
						@media (max-width: 700px) {
							font-size: 7.5rem;
						}
					`}
				>
					<FontAwesomeIcon icon={icon} />
				</a>
			</div>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					justify-content: center;
				`}
			>
				<h3
					css={css`
						font-size: 3rem;
						margin: 0;
					`}
				>
					{platform}
				</h3>
				<p
					css={css`
						line-height: 1.5;
					`}
				>
					{children}
				</p>
			</div>
		</li>
	);
}

function ContactSection() {
	return (
		<section
			css={css`
				display: flex;
				padding: 2rem;
				flex-direction: column;
				color: white;
			`}
			id="contact"
		>
			<h1>Contact</h1>

			<h2>
				You can find on many different platforms, however I am, by far, most
				active on Discord
			</h2>

			<ul
				css={css`
					list-style-type: none;
					padding: 0;
					margin: 5rem 0;
					display: flex;
					flex-direction: column;
					gap: 5rem;
				`}
			>
				<ContactMethod
					icon={faDiscord}
					iconLink="https://discord.com/users/236279900728721409"
					platform="Discord"
				>
					Discord is a chat platform connecting people from anywhere on one
					platform. I use Discord very often and can be found at{' '}
					<code>jtsshieh#6424</code>.
				</ContactMethod>
				<ContactMethod
					icon={faGithub}
					iconLink="https://github.com/jtsshieh"
					platform="GitHub"
				>
					GitHub hosts almost all of my open source code repositories. You can
					find me on GitHub <code>@jtsshieh</code>.
				</ContactMethod>
			</ul>
		</section>
	);
}

export default function Home() {
	return (
		<div>
			<Nav />
			<CoverSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
