import { Redirect, Route, Switch } from 'react-router-dom'
import AdminHomeNavBar from '../../components/AdminHomeNavBar'
import AdminUpdateEmployeeScreen from './AdminUpdateEmployeeScreen'
import AdminAddEmployeeScreen from './AdminAddEmployeeScreen'
import AdminPaymentHistoryScreen from './AdminPaymentHistoryScreen'
import AdminViewEmployeesScreen from './AdminViewEmployeesScreen'
import Profile from './Profile'

const AdminHomeScreen = () => {
  return (
    <div className="admin">
      <AdminHomeNavBar />
      <Switch>
        <Route exact path="/admin">
          <Redirect to="/admin/home" />
        </Route>
        <Route path="/admin/home" component={Profile} />
        <Route path="/admin/add-employee" component={AdminAddEmployeeScreen} />
        <Route
          path="/admin/view-employees"
          component={AdminViewEmployeesScreen}
        />
        <Route
          path="/admin/payment-history"
          component={AdminPaymentHistoryScreen}
        />
        <Route
          path="/admin/update-employee"
          component={AdminUpdateEmployeeScreen}
        />
      </Switch>
    </div>
  )
}

export default AdminHomeScreen
