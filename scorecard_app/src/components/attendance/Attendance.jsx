import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { useAttendenceData } from '../../hooks/academic';

export const Attendance = () => {
	const { isLoading, error, data } = useAttendenceData();
	const {part3_data} = useSelector((state) => state.AcademicReducer);

	

	return (
		<Table striped bordered hover className="table_border common_width" responsive>
			<thead>
				<tr>
					<th></th>
					<th>No. of Working Days</th>
					<th>No. of Days Present</th>
					<th>Percentage</th>
				</tr>
			</thead>
			<tbody>
				{/* {data?.data.map((ele) => {
					return (
						<tr>
							<td>{ele.term}</td>
							<td>{ele.working_days}</td>
							<td>{ele.present_days}</td>
							<td>{ele.percentage}</td>
						</tr>
					);
				})} */}
				{part3_data?.map((ele) => {
					return (
						<tr>
							<td>{ele.term}</td>
							<td>{ele.working_days}</td>
							<td>{ele.present_days}</td>
							<td>{ele.percentage}%</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};
