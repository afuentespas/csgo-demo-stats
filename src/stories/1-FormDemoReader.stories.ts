import { moduleMetadata } from '@storybook/angular';
import { FormDemoReaderComponent } from 'src/app/shared/form-demo-reader/form-demo-reader.component';
import { CommonModule } from '@angular/common';
import { DemofileReaderModule } from 'src/app/core/demofile-reader/demofile-reader.module';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Single Components/Form Demo Reader',
    component: FormDemoReaderComponent,
    decorators: [
        moduleMetadata({
          declarations: [FormDemoReaderComponent],
          imports: [CommonModule, DemofileReaderModule],
        }),
      ],
};

export const Default = () => ({
    component: FormDemoReaderComponent,
    props: {
        onChange: action('Upload CSGO Demo File'),
    },
});

Default.story = {
    name: 'Default state',
};
