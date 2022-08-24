import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { useCoScolasticsData } from '../../hooks/academic';

export const CoscalasticsArea = () => {
	const { isLoading, error, data } = useCoScolasticsData();
	const {part2_data} = useSelector((state) => state.AcademicReducer);


	return (
		<Table bordered hover className="table_border common_width" responsive="xs" >
			<thead>
				<tr height="75px">
					<th></th>
					<th>Skills</th>
					<th>Grade</th>
				</tr>
				<tr></tr>
			</thead>
			<tbody>

				{/* {data?.data.map((ele) => {
					return (
						<tr>
							<td>{ele.id}</td>
							<td>{ele.skill}</td>
							<td>{ele.grade}</td>
						</tr>
					);
				})} */}
				{part2_data?.map((ele, i) => {
					return (
						<tr>
							<td>{i+1}</td>
							<td>{ele.skill}</td>
							<td>{ele.grade}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};
