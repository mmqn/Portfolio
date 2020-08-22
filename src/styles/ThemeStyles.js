export const lightThemeStyle = `
body {
	background-color: #fafafa;
	color: #242424;
}

h1 {
	color: #003192;
}

h2 {
	color: #242424;
}

main {
	scrollbar-color: #d5d5d5 #fafafa;
}

aside {
	background-color: #f0f0f0;
}

nav {
	background-color: #fafafa;
}

#filter-menu {
	background-color: #f0f0f0;
	box-shadow: 0px 1px 6px #b5b5b5;
}

.action-button {
	color: #242424;
	background-color: #f0f0f0;
}

.action-button:active {
	background-color: #ff8e65;
}

.internal-link {
	color: #242424;
}

.internal-link:visited {
	color: #242424;
}

.internal-link:hover {
	color: #003192;
}

.internal-link:before {
	background-color: #003192;
}

article a {
	color: #003192;
}

article a:visited {
	color: #003192;
}

article a:hover {
	color: #4080ff;
}

article a:before {
	background-color: #4080ff;
}

@keyframes flash {
	0% {
		color: #242424;
		border: 1px solid #242424;
		padding-left: 0px;
  }
  20% {
		color: #003192;
		border: 1px solid #003192;
		padding-left: 6px;
  }
  40% {
		color: #242424;
		border: 1px solid #242424;
		padding-left: 6px;
  }
  60% {
		color: #003192;
		border: 1px solid #003192;
		padding-left: 6px;
  }
  80% {
		color: #242424;
		border: 1px solid #242424;
		padding-left: 6px;
	}
	100% {
		border: none;
		padding-left: 0px;
	}
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	background: transparent;
}

::-webkit-scrollbar-thumb {
	border-radius: 2px;
	background: #d5d5d5;
}

::-webkit-scrollbar-thumb:hover {
	background: #bbbbbb;
}

@media (hover: hover) {
	aside:hover {
		box-shadow: 0px 1px 6px #b5b5b5;
	}

	article img:hover, video:hover {
		box-shadow: 0px 4px 6px #9b9b9b; 
	}

	.story-card:hover {
		border: 1px solid #e1dfdf;
		box-shadow: 0px 1px 6px #eaeaea;
	}
	
	.story-card:hover p {
		color: #000000;
	}
	
	.story-card:hover h2 {
		color: #003192;
	}
	
	.tag-clickable:hover {
		color: #003192;
	}

	.action-button:hover {
		box-shadow: 0px 1px 6px #b5b5b5; 
	}
}

/* desktop-ish */
@media only screen and (min-width: 1000px) {
	.story-title {
		background-color: #fafafa;
	}
}

/* mobile-ish */
@media only screen and (max-width: 999px) {
	main {
		border: 1px solid #dfdfdf;
	}

	nav {
		border-right: 1px solid #dfdfdf;
	}

	#mobile-story-reader {
		background-color: #fafafa;
	}

	.mobile-story-reader-close-button {
		color: #003192;
	}
}`;

export const darkThemeStyle = `
body {
	background-color: #1a1a1a;
	color: #e3e3e3;
}

h1 {
	color: #6fa0ff;
}

h2 {
	color: #e3e3e3;
}

main {
	scrollbar-color: #333333 #1a1a1a;
}

aside {
	background-color: #2f2f2f;
}

nav {
	background-color: #1a1a1a;
}

#filter-menu {
	background-color: #2f2f2f;
	box-shadow: 0px 1px 6px #000000;
}

.action-button {
	color: #e3e3e3;
	background-color: #2f2f2f;
}

.action-button:active {
	background-color: #ff7f50;
}

.internal-link {
	color: #e3e3e3;
}

.internal-link:visited {
	color: #e3e3e3;
}

.internal-link:hover {
	color: #6fa0ff;
}

.internal-link:before {
	background-color: #6fa0ff;
}

article a {
	color: #6fa0ff;
}

article a:visited {
	color: #6fa0ff;
}

article a:hover {
	color: #a8c5ff;
}

article a:before {
	background-color: #a8c5ff;
}

@keyframes flash {
  0% {
		color: #e3e3e3;
		border: 1px solid #e3e3e3;
		padding-left: 0px;
  }
  20% {
		color: #6fa0ff;
		border: 1px solid #6fa0ff;
		padding-left: 6px;
  }
  40% {
		color: #e3e3e3;
		border: 1px solid #e3e3e3;
		padding-left: 6px;
  }
  60% {
		color: #6fa0ff;
		border: 1px solid #6fa0ff;
		padding-left: 6px;
  }
  80% {
		color: #e3e3e3;
		border: 1px solid #e3e3e3;
		padding-left: 6px;
	}
	100% {
		border: none;
		padding-left: 0px;
	}
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	background: transparent;
}

::-webkit-scrollbar-thumb {
	border-radius: 2px;
	background: #333333;
}

::-webkit-scrollbar-thumb:hover {
	background: #666666;
}

@media (hover: hover) {
	aside:hover {
		box-shadow: 0px 1px 6px #111111;
	}

	article img:hover, video:hover {
		box-shadow: 0px 4px 6px #111111; 
	}

	.story-card:hover {
		border: 1px solid #333333;
		box-shadow: 0px 1px 6px #111111;
	}

	.story-card:hover p {
		color: #ffffff;
	}

	.story-card:hover h2 {
		color: #6fa0ff;
	}

	.tag-clickable:hover {
		color: #6fa0ff;
	}

	.action-button:hover {
		box-shadow: 0px 1px 6px #111111; 
	}
}

/* desktop-ish */
@media only screen and (min-width: 1000px) {
	.story-title {
		background-color: #1a1a1a;
	}
}

/* mobile-ish */
@media only screen and (max-width: 999px) {
	main {
		border: 1px solid #454545;
	}

	nav {
		border-right: 1px solid #454545;
	}

	#mobile-story-reader {
		background-color: #212121;
	}

	.mobile-story-reader-close-button {
		color: #6fa0ff;
	}
}`;
