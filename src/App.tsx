import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, NotFound, Personal, SignIn, SignUp, Statistics } from './pages'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Layout } from './layout/Layout'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/personal' element={<Personal />} />
            <Route path='/statistics' element={<Statistics />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
