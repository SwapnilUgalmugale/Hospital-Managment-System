import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { patientSigninAction } from '../../actions/patientAction'
import Header from '../../components/Header'

const PatientSignInScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const patientSignin = useSelector((store) => store.patientSignin)
  const { loading, error, response } = patientSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(patientSigninAction(email, password))
  }

  useEffect(() => {
    if (response && response.status == '200') {
      sessionStorage.setItem('pat_info', JSON.stringify(response.data))
      sessionStorage.setItem('isLoggedIn', true)
      props.history.push('/bookAppointment')
    } else if (response && response.status == 'error') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div>
      <div className='center-align fadeInDown'>
        <h3 className='text-center'>Patient Signin</h3>
        <div className='form box-shadow'>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type='email'
              className='form-control'
              placeholder='hms@gmail.com'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              className='form-control'
              placeholder='*****'></input>
          </div>
        </div>
        <div className='text-center'>
          <button
            onClick={onSignin}
            className='btn btn-success btn-lg btn-block'>
            Signin
          </button>
          <div>
            New User? <Link to='/patientSignUp'>Signup here</Link>
          </div>
        </div>
      </div>
      {loading && (
        <div className='Container text-center'>waiting for response</div>
      )}
    </div>
  )
}
export default PatientSignInScreen
