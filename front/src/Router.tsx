import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Main />} />
            <Route path='/weapons/:id' element={<h1>Weapons</h1>} />
          </Route>
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router