import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateContextProvider } from './Context/index.jsx';
import ContextProvider from './Context/Context.jsx'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x0TXxbf1x0ZFNMZFhbRnVPMyBoS35RckVnW3dednBRRGReUUF1');
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <StateContextProvider>
    <ContextProvider>
		<App />
	</ContextProvider>
  </StateContextProvider>,
)
