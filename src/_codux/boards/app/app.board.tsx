import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 360,
        windowHeight: 740,
        canvasHeight: 862,
        canvasWidth: 988,
    },
});
