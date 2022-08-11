import { Table } from "react-bootstrap";
import "./scolasticArea.css";

export const ScolasticArea = () => {
  return (
    <Table striped bordered hover size="sm">
      {/* <thead>
        <tr>
          <th rowSpan={2}>Sr. No</th>
          <th rowSpan={2}>SUBJECTS</th>
          <th colSpan={2}>
            <tr className="test_row">
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>E</th>
            </tr>
            <tr>
              <th>a</th>
              <th>b</th>
              <th>c</th>
              <th>d</th>
              <th>e</th>
            </tr>
          </th>
        </tr>
      </thead> */}

      <thead>
        <tr>
          <th className="table_head" rowspan={2}>
            Sr.No
          </th>
          <th className="table_head" rowspan={2}>
            SUBJECTS
          </th>
          <th>FA</th>
          <th>Oral</th>
          <th>SA</th>
          <th>Oral</th>
          <th>Overall Marks</th>
        </tr>
        <tr>
          <td>80</td>
          <td>20</td>
          <td>80</td>
          <td>20</td>
          <td>200</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>65</td>
          <td>15</td>
          <td>60</td>
          <td>10</td>
          <td>150</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>65</td>
          <td>15</td>
          <td>60</td>
          <td>10</td>
          <td>150</td>
        </tr>
        
      </tbody>
    </Table>
  );
};
