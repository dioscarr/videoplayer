import { createBoard } from '@wixc3/react-board';
import { SelectExample } from '../../../components/select-example/select-example';

export default createBoard({
    name: 'Select Example',
    Board: () => <SelectExample />,
    environmentProps: {
        canvasMargin: {
            top: 24,
            left: 0,
        },
        windowWidth: 390,
        canvasWidth: 348,
        canvasPadding: {
            left: 0,
        },
        canvasBackgroundColor: '#ff0000',
        windowHeight: 844,
    },
});
