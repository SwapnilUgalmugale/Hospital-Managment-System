import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { patientSignupAction } from '../../actions/patientAction'
import Header from '../../components/Header'

const PatientSignUpScreen = (props) => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const patientSignUp = useSelector((store) => store.patientSignup)
  const { loading, error, response } = patientSignUp

  const dispatch = useDispatch()
  const onSignup = () => {
    dispatch(patientSignupAction(name, gender, email, password))
  }

  useEffect(() => {
    if (response && response.status == '200') {
      props.history.push('/patientSignIn')
    } else if (response && response.status == 'error') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  })

  return (
    <div>
      <Header title='Sign Up' />
      <div className='form'>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            type='text'
            className='form-control'
            placeholder='Your name'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Gender</label>
          <select
            onChange={(e) => {
              setGender(e.target.value)
            }}
            class='form-select'
            aria-label='Default select example'>
            <option selected>Select Gender</option>
            <option value='MALE'>Male</option>
            <option value='FEMALE'>Female</option>
            <option value='OTHER'>Other</option>
          </select>
        </div>
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
            className='form-control'
            placeholder='*****'></input>
        </div>
        <div className='mb-3'>
          <button onClick={onSignup} className='btn btn-success'>
            Sign Up
          </button>
          <div className='float-end'>
            Already have account? <Link to='/patientSignIn'>SignIn here</Link>
          </div>
        </div>
        {loading && (
          <div className='container text-center'>waiting for response</div>
        )}
      </div>
    </div>
  )
}
export default PatientSignUpScreen
