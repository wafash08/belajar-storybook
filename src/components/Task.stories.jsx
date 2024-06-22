import { fn } from '@storybook/test';
import Task from './Task';

export const ActionsData = {
	onArchiveTask: fn(),
	onPinTask: fn(),
};

export default {
	/** komponen yang ingin dites atau didokumentasikan */
	component: Task,
	/** digunakan untuk mengkategorikan component pada sidebar storybook */
	title: 'Task',
	/** berguna untuk menghasilkan dokumentasi untuk komponen secara otomatis */
	tags: ['autodocs'],
	/** berisi informasi tambahan yang dibutuhkan oleh story tapi tidak dirender di storybook */
	excludeStories: /.*Data$/,
	/** berisi action yang komponen terima */
	args: { ...ActionsData },
};

export const Default = {
	args: {
		task: {
			id: '1',
			title: 'Test Task',
			state: 'TASK_INBOX',
		},
	},
};

export const Pinned = {
	args: {
		task: {
			...Default.args.task,
			state: 'TASK_PINNED',
		},
	},
};
export const Archived = {
	args: {
		task: {
			...Default.args.task,
			state: 'TASK_ARCHIVED',
		},
	},
};
