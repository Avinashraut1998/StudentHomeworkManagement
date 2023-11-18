import { Table } from "react-bootstrap";

const HomeworkTable = ({homeworkData}) => {

 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>serial no</th>
          <th>Assingment Name</th>
          <th>Discription</th>
          <th>Homework status</th>
          
        </tr>
      </thead>
      <tbody>
       {
        homeworkData?.map((item)=> <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.discription}</td>
          <td>{item.status}</td>
          
        </tr>)
       }
      </tbody>
    </Table>
  );
};

export default HomeworkTable;
