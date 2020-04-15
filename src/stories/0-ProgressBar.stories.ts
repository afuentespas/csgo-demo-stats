import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBarComponent } from 'src/app/shared/progress-bar/progress-bar.component';

export default { 
    title: 'Single Components/ProgressBar Component',
    component: ProgressBarComponent
}

export const Empty = () => ({
    component: ProgressBarComponent,
    props: {
        percentage: 0,
    }
});

Empty.story = {
    name: 'Empty progressbar',
    parameters: {
        notes: 'Progressbar to 0%.'
    }
};

export const Half = () => ({
    component: ProgressBarComponent,
    props: {
        percentage: 50,
    }
});

Half.story = {
    name: 'Half progressbar',
    parameters: {
        notes: 'Progressbar to 50%.'
    }
}

export const Full = () => ({
    component: ProgressBarComponent,
    props: {
        percentage: 100,
    }
});

Full.story = {
    name: 'Full progressbar',
    parameters: {
        notes: 'Progressbar to 100%.'
    }
}