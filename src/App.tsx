import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Layout } from './layout/Layout'
import { Home, Personal, SignIn, SignUp } from './pages'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/personal' element={<Personal />} />
          </Route>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
