import {Routes,Route,Navigate} from 'react-router-dom'
import { LoginPage } from '../auth'
import { CaldenarPage } from '../calendar'
export const AppRouter = () => {
    //const authStatus='not-Authenticated'
    const authStatus='Authenticated'

  return (
    <Routes>
          {
               (authStatus=== 'not-Authenticated')
               ?<Route path="/auth/*" element={<LoginPage/>}/>
               :<Route path="/*" element={<CaldenarPage/>}/>
          } 
          <Route path='/*' element ={<Navigate to ="/auth/login"/>}/>
    </Routes>
  )
}
