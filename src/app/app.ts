import { Main } from './main';

const start = () => {
    const main = new Main();
    main.getDefault();
    main.initiatePostCalls();
}

start();