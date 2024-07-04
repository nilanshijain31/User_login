import react from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createRoot} from 'react-dom/client'
import './index.css'
import{BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render (
<BrowserRouter>
<App/>
</BrowserRouter>

);
