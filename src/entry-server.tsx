import {renderToString} from 'react-dom/server';
import App from './App';
export {pages} from './pages';
export function render(path='/'){return renderToString(<App path={path}/>)}
