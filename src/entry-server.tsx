import {renderToString} from 'react-dom/server';
import App from './App';
export {pages} from './pages';
export function render(path='/',lang:'en'|'hi'|'mr'='en'){return renderToString(<App path={path} initialLang={lang}/>)}
