import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Layout } from './layout/Layout'
import { Home } from './pages'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
