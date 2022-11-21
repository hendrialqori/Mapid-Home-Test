import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store as Store } from './configs'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
		<Provider store={Store}>
			<App />
		</Provider>
    </Router>
)
