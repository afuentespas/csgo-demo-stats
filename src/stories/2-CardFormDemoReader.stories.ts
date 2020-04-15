import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { CardFormDemoReaderComponent } from 'src/app/core/components/card-form-demo-reader/card-form-demo-reader.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormDemoReaderModule } from 'src/app/shared/form-demo-reader/form-demo-reader.module';
import { ProgressBarModule } from 'src/app/shared/progress-bar/progress-bar.module';

export default {
    title: 'Complex Components/Card Form Demo Reader',
    component: CardFormDemoReaderComponent,
    decorators: [
        moduleMetadata({
          declarations: [CardFormDemoReaderComponent],
          imports: [CommonModule, ProgressBarModule, CardModule, FormDemoReaderModule],
        }),
      ],
};

export const Default = () => ({
    component: CardFormDemoReaderComponent,
    props: { },
});

Default.story = {
    name: 'Default',
};

export const ReadingDemo = () => ({
    component: CardFormDemoReaderComponent,
    props: { 
        isReadingDemo: true,
        percentageLoading: 25
    },
});

ReadingDemo.story = {
    name: 'Reading Demo',
    parameters:{
        notes: 'View when demo reader is reading demo file.'
    }
}

export const ReadingDemoError = () => ({
    component: CardFormDemoReaderComponent,
    props: { 
        isReadingDemo: false,
        isReadingDemoError: true,
        errorMsg: 'Error Message'
    },
});

ReadingDemoError.story = {
    name: 'Reading Demo Error',
    parameters:{
        notes: 'View when demo reader has a error.'
    }
}