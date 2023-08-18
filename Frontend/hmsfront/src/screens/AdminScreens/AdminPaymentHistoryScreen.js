import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { adminGetTotalChargesAction } from '../../actions/employeeActions'
import Header from '../../components/Header'

const AdminPaymentHistoryScreen = () => {
  const totalCharges = useSelector((store) => store.totalCharges)
  const { response } = totalCharges
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adminGetTotalChargesAction())
  }, [])
  const data = response ? response.data : []
  return (
    <div className="container">
      <Header title="Payment History" />
      <Bar
        className="container"
        data={{
          labels: ['Cons Charges', 'Test Charges', 'Ward Charges'],
          datasets: [
            {
              label: 'Revenue',
              data: data,
              backgroundColor: 'rgba(54, 162, 132, 0.2)',
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
        width={100}
        height={200}
      />
    </div>
  )
}

export default AdminPaymentHistoryScreen
