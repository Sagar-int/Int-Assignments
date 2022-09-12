import { Table } from 'react-bootstrap';
import './gradingscale.css';
import gradedata from "./gscale.json";

export const GradingScale = () => {
	
	return (
		<div>
			<Table striped bordered hover className="grading_scale_table table_border">
				<thead>
					<tr>
						<th>Marks Range</th>
						<th>Grades</th>
						<th>Remarks</th>
					</tr>
				</thead>
				<tbody>
					{gradedata.map((ele) => {
						return (
							<tr>
								<td className='range-remark'>{ele.range}</td>
								<td>{ele.grade}</td>
								<td className='range-remark'>{ele.remarks}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
