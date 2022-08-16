import { Table } from 'react-bootstrap';
import { useCoScolasticsData } from '../../hooks/academic';

export const CoscalasticsArea = () => {
	const { isLoading, error, data } = useCoScolasticsData();

	if (isLoading) {
		return <h2>Loading..</h2>;
	}

	if (error) {
		return <h2>{error.message}</h2>;
	}

	return (
		<Table bordered hover className="table_border common_width" responsive>
			<thead>
				<tr height="75px">
					<th></th>
					<th>Skills</th>
					<th>Grade</th>
				</tr>
				<tr></tr>
			</thead>
			<tbody>

				{data?.data.map((ele) => {
					return (
						<tr>
							<td>{ele.id}</td>
							<td>{ele.skill}</td>
							<td>{ele.grade}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};
