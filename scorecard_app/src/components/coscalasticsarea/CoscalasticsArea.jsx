import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { DataContext } from '../../contexts/DataContext';
import { useCoScolasticsData } from '../../hooks/academic';

export const CoscalasticsArea = () => {
	// const { isLoading, error, data } = useCoScolasticsData();
	const { handleEditRow } = useContext(DataContext);
	const { part2_data } = useSelector((state) => state.AcademicReducer);

	return (
		<Table bordered hover className="table_border common_width" responsive="xs">
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
							<td
								onClick={() =>
									handleEditRow({
										child: 'skill',
										Id: i,
										edit: false,
									})
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									fill="currentColor"
									class="bi bi-pencil-square"
									viewBox="0 0 16 16"
								>
									<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
									<path
										fill-rule="evenodd"
										d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
									/>
								</svg>
								{i + 1}
							</td>
							<td>{ele.skill}</td>
							<td>{ele.grade}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};
