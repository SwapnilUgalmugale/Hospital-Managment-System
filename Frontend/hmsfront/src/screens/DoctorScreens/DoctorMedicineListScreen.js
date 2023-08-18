import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMedicines, medPresc } from '../../actions/DoctorAction'
import '../../App.css'
import Header from '../../components/Header'

const DoctorMedicineListScreen = (props) => {
  const dispatch = useDispatch()
  const medicines = useSelector((store) => store.medicine)
  const { error, response, loading } = medicines


  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getMedicines())
  }, [])

  useEffect(() => {}, [error, response, loading])
  let list = []
  const med_presc = () => {
    dispatch(medPresc(list))
    props.history.push('/doctor/med_presc')
  }
  const add_to_list = (id, qty) => {
    list = list.filter((item) => item != id)
    list.push({
      medicine: { id: id },
      qty: qty,
    })
    console.log('lists :' + list)
    console.log('qty :' + qty)
  }
  const remove_from_list = (id, qty) => {
    list = list.filter((item) => item.medicine.id != id)

    console.log('lists :' + list)
    console.log('qty :' + qty)
  }
  return (
    <div>
      <Header title="List" />
      <div>
        <div className="subheader ">Select Medicines</div>
        <table className="table table-striped container">
          <thead>
            <tr>
              <th>Medicine id</th>
              <th>Medicine name</th>

              <th>Quantity</th>

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
                    <td>
                      <input id={note.name} type="number" name="qty" />
                    </td>
                    <td>
                      <button
                        class="btn btn-primary"
                        onClick={() => {
                          document.getElementById(note.id).style.background =
                            'lightblue'
                          add_to_list(
                            note.id,
                            document.getElementById(note.name).value
                          )
                        }}>
                        Add
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          document.getElementById(note.id).style.background =
                            'white'
                          remove_from_list(
                            note.id,
                            document.getElementById(note.name).value
                          )
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
        <button onClick={med_presc} className="btn btn-success float-center">
          Submit
        </button>
      </div>
    </div>
  )
}

export default DoctorMedicineListScreen
