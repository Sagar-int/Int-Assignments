import { Table } from 'react-bootstrap';
import { useGradingscaleData } from '../../hooks/grading';
import './gradingscale.css';

export const GradingScale = () => {
	const { isLoading, error, data } = useGradingscaleData();

	if (isLoading) {
		return <h2>Loading..</h2>;
	}

	if (error) {
		return <h2>{error.message}</h2>;
	}


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
					{data?.data.map((ele) => {
						return (
							<tr>
								<td>{ele.range}</td>
								<td>{ele.grade}</td>
								<td>{ele.remarks}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
