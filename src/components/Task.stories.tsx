import { Meta, Story} from '@storybook/react';
import Task, { TaskEntity, TaskProps } from './Task';

export default {
  component: Task,
  title: 'Component/Task',
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: 1,
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task as TaskEntity,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task : {
    ...Default.args.task as TaskEntity,
    state: 'TASK_ARCHIVED'
  }

};
