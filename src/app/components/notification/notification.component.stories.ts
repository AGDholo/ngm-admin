import { NotificationComponent } from './notification.component';
import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, Story } from '@storybook/angular';
import { AppModule } from '../../app.module';

export default {
  title: 'Ngm/Components/Notification',
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

export const Notification = Template.bind({});
Notification.args = {
  bordered: false,
  flat: false,
};
Notification.parameters = {};
