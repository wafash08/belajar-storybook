import '../src/index.css';

// Configures Storybook to log the acitons (onArchiveTask and onPinTask) in the UI
/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
