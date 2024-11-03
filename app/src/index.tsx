import './index.css';
import ReactDOM from 'react-dom/client';
import TopBar from "./component/top-bar";
import Content from "./component/content";
import BottomBar from "./component/bottom-bar";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <div className='app'>
        <TopBar/>
        <Content/>
        <BottomBar/>
    </div>
);