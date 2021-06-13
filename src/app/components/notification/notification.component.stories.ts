import { NotificationComponent } from './notification.component';
import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, Story } from '@storybook/angular';
import { AppModule } from '../../app.module';

export default {
  title: 'Notification',
  component: NotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [AppModule],
    }),
  ],
} as Meta;

const Template: Story<NotificationComponent> = (args) => ({
  props: args,
});

export const NotificationStory = Template.bind({});
