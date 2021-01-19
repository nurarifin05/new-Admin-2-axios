
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'

const URL = 'http://192.168.0.101:5000/api/v1/tr'

const Menu1 = () => {
    const [employees, setEmployees] = useState([])

  //pengganti componentDidMount
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setEmployees(response.data)
        console.log('ini output res', response)
    }
    const removeData = (item_id, e) => {
        axios.delete(`${URL}/${item_id}`)
        .then(res => {
            const del = employees.filter(
                employee => item_id !== employee.item_id)
                setEmployees(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Device_ID', 'id_Account','is_location', 'item_id', 'UoM', 'Quantity', 'Line_number', 'Rack_number', 'Bin_number', 'Time_Enter', 'status', 'Action']
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({id,Device_ID,id_Account,id_location, item_id, UoM, Quantity, Line_number, Rack_number, Bin_number, Time_Enter, status}) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{Device_ID}</td>
                    <td>{id_Account}</td>
                    <td>{id_location}</td>
                    <td>{item_id}</td>
                    <td>{UoM}</td>
                    <td>{Quantity}</td>
                    <td>{Line_number}</td>
                    <td>{Rack_number}</td>
                    <td>{Bin_number}</td>
                    <td>{Time_Enter}</td>
                    <td>{status}</td>
                     <td className='opration'>
                    <button className='buttonDelete' onClick={(e) => removeData(item_id, e)}>Delete</button>
                    <button className='buttonEdit' >Edit</button>
                    </td> 
                </tr>
            )
        })
    }
    return (
        <>
        <h1 id='title'></h1>
        <table id='employee'>
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
        </>
    )
}

export default Menu1

// import React from 'react';
  
// import axios from 'axios';
  
// export default class Menu1 extends React.Component {
//   state = {
//     posts: []
//   }
  
//   componentDidMount() {
//     axios.get(`http://192.168.0.101:5000/api/v1/tr`)
//       .then(res => {
//         const posts = res.data;
//         this.setState({ posts });
//       })
//   }
  
//   deleteRow(item_id, e){
//     axios.delete(`http://192.168.0.101:5000/api/v1/tr/${item_id}`)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
  
//         const posts = this.state.posts.filter(item => item.item_id !== item_id);
//         this.setState({ posts });
//       })
  
//   }
  
//   render() {
//     return (
//       <div>
  
//         <table className="table table-bordered">
//             <thead>
//               <tr>
//                   <th>ID</th>
//                   <th>Device_ID</th>
//                   <th>id_Account</th>
//                   <th>id_location</th>
//                   <th>item_id</th>
//                   <th>UoM</th>
//                   <th>Quantity</th>
//                   <th>Line_number</th>
//                   <th>Rack_number</th>
//                   <th>Bin_number</th>
//                   <th>Time_Enter</th>
//                   <th>status</th>
//               </tr>
//             </thead>
  
//             <tbody>
//               {this.state.posts.map((post) => (
//                 <tr>
//                   <td>{post.id}</td>
//                   <td>{post.Device_ID}</td>
//                   <td>{post.id_Account}</td>
//                   <td>{post.id_location}</td>
//                   <td>{post.item_id}</td>
//                   <td>{post.UoM}</td>
//                   <td>{post.Quantity}</td>
//                   <td>{post.Line_number}</td>
//                   <td>{post.Rack_number}</td>
//                   <td>{post.Bin_number}</td>
//                   <td>{post.Time_Enter}</td>
//                   <td>{post.status}</td>
//                   <td>
//                     <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.item_id, e)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
  
//         </table>
//       </div>
//     )
//   }
// }