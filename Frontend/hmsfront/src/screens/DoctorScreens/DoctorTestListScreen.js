import Header from '../../components/Header'
import '../../App.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getTests,
  testPresc,
} from '../../actions/DoctorAction'
const DoctorTestListScreen = (props) => {
  const dispatch = useDispatch()


  const tests = useSelector((store) => store.test)
  const { error, response, loading } = tests

  useEffect(() => {
    dispatch(getTests())
  }, [])

  useEffect(() => {}, [error, response, loading])
  let list = []
  const test_presc = () => {
    dispatch(testPresc(list))
    props.history.push('/doctor/test_presc')
  }

  const add_to_list = (id) => {
    list = list.filter((item) => item != id)
    list.push(id)
  }
  const remove_from_list = (id) => {
    list = list.filter((item) => item != id)
  }
  return (
    <div className="container">
      <Header title="List" />
      <div>
        <div className="subheader ">Select Tests</div>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Test id</th>
              <th>Test name</th>
              <th>Test charge</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {response &&
              response.length > 0 &&
              response.map((note) => {
                return (
                  <tr id={note.id}>
                    <td>{note.id}</td>
                    <td>{note.name}</td>
                    <td>{note.charges}</td>

                    <td>
                      <button
                        class="btn btn-primary mx-3"
                        onClick={() => {
                          document.getElementById(note.id).style.background =
                            'lightblue'
                          add_to_list(note.id)
                        }}>
                        Add
                      </button>
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          document.getElementById(note.id).style.background =
                            'white'
                          remove_from_list(note.id)
                        }}>
                        Remove
                      </button>
                    </td>
                    <td></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div class="text-center">
        <button onClick={test_presc} className="btn btn-success float-center">
          Submit
        </button>
      </div>
    </div>
  )
}

export default DoctorTestListScreen
