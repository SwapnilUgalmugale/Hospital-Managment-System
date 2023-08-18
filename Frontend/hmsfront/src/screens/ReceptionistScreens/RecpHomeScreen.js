import { Redirect, Route, Switch } from 'react-router-dom'
import RecpAcceptPayment from './RecpAcceptPayment'
import RecpAdmitPatient from './RecpAdmitPatient'
import RecpDischargePatient from './RecpDischargePatient'
import RecpViewAppointments from './RecpViewAppointments'

import Profile from '../AdminScreens/Profile'

const { default: RecpHomeNavBar } = require('../../components/RecpHomeNavBar')

const RecpHomeScreen = (props) => {
  return (
    <div>
      <RecpHomeNavBar />
      <Switch>
        <Route exact path="/receptionist">
          <Redirect to="/receptionist/home" />
        </Route>
        <Route path="/receptionist/home" component={Profile} />
        <Route
          path="/receptionist/view-appointments"
          component={RecpViewAppointments}
        />
        <Route
          path="/receptionist/accept-payment"
          component={RecpAcceptPayment}
        />
        <Route
          path="/receptionist/admit-patient"
          component={RecpAdmitPatient}
        />
        <Route
          path="/receptionist/discharge-patient"
          component={RecpDischargePatient}
        />
      </Switch>
    </div>
  )
}

export default RecpHomeScreen
