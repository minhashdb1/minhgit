import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
function Minh() {
    const [add, setState] = useState([])
    const [number, setNumber] = useState()

    function add2 (){
        let a = document.querySelector('#ten').value
        let b = document.querySelector('#date').value
        let c = document.querySelector('#chon').value
        if(!a || !b || !c){
          return alert('điền đầy đủ thông tin')
        }
        setState([...add,{ten:a, date:b, chon:c } ])

    }
    function xoa (i) {
      
      
      let newDe = add.filter(function(value, index){
        return i !== index
      })
      setState(newDe)
    }
    function sua (i) {
      document.querySelector('#job').value = add[i].ten
      document.querySelector('#date2').value = add[i].date
      document.querySelector('#chon2').value = add[i].chon
      setNumber(i)
    }
    function luu (){
      let newAdd = [...add]
      let a = document.querySelector('#job').value
      let b = document.querySelector('#date2').value
      let c = document.querySelector('#chon2').value
      if(!a || !b || !c){
        return alert('điền đầy đủ thông tin')
      }
      newAdd[number] = {ten:a, date:b, chon:c }
      setState(newAdd)
    }
  return (
    <div>
        <div className="todo">
        <h1>Todo List</h1> 
        <input type="text" placeholder='Tên công việc' id='ten'/>
        <input type="date" name="" id="date" />
        <select name="" id="chon">
          <option value="">---Choose---</option>
          <option value="To do">To do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <button className='button1' onClick={add2}>Add</button> 
        </div>
        <div style={{display: 'flex', justifyContent:'center' , flexWrap:'wrap'}}>
          {add.map(function(value, index){
            return (
                <Card style={{margin: '10px',width:'18%'}}>
                <CardBody>
                  <CardTitle tag="h5" >{value.ten}</CardTitle>
                  <CardText>{value.date} <br></br>{value.chon} </CardText>
                  <button onClick={function(){
                    sua(index)
                  }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Sửa</button>
                  <Button onClick={function(){
                    xoa(index)
                  }}>Delete</Button>
                </CardBody>
              </Card>
            )
          })}
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Change</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text" placeholder='Công việc' id='job' />
        <input type="date" name="" id="date2" />
        <select name="" id="chon2">
          <option value="">---Choose---</option>
          <option value="Todo">To do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={luu} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Minh