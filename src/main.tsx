import { createRoot } from "react-dom/client";
import "./index.css";
// import {App} from './App.tsx'
import MainPage  from './MainPage.tsx'

const rootEl = document.getElementById("root") as HTMLElement;
const reactRoot = createRoot(rootEl);
reactRoot.render(<MainPage />);

