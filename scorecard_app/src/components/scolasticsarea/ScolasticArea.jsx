import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { DataContext } from '../../contexts/DataContext';
// import { useScolasticsData } from '../../hooks/academic';
import './scolasticArea.css';

export const ScolasticArea = () => {
	// const { isLoading, error, data } = useScolasticsData();
	//data from json server
	const { handleEditRow } = useContext(DataContext);

	const { part1_data } = useSelector((state) => state.AcademicReducer);
	console.log('part1_data from part1:', part1_data);

	let grand_total = 0;
	for (let i = 0; i < part1_data?.length; i++) {
		grand_total = grand_total + parseInt(part1_data[i].total_mark);
	}

	let Total = part1_data.length * 200;
	let Percentage = ((grand_total / Total) * 100).toFixed(3);

	return (
		<Table bordered hover className="table_border common_width" size="sm" responsive="xs">
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
					<th>80</th>
					<th>20</th>
					<th>80</th>
					<th>20</th>
					<th>200</th>
				</tr>
			</thead>

			<tbody>
				{/* {data?.data.map((ele) => {
					return (
						<tr>
							<td>{ele.id}</td>
							<td>{ele.subject}</td>
							<td>{ele.fa}</td>
							<td>{ele.f_oral}</td>
							<td>{ele.sa}</td>
							<td>{ele.s_oral}</td>
							<td>{ele.total_mark}</td>
						</tr>
					);
				})} */}

				{part1_data?.map((ele, i) => {
					return (
						<tr>
							<td
								onClick={() =>
									handleEditRow({
										child: 'subject',
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
							<td>{ele.subject}</td>
							<td>{ele.fa}</td>
							<td>{ele.f_oral}</td>
							<td>{ele.sa}</td>
							<td>{ele.s_oral}</td>
							<td>{ele.total_mark}</td>
						</tr>
					);
				})}

				<tr>
					<td colSpan={2} className="fw-bold text-uppercase">
						Grand Total
					</td>
					<td colSpan={5}>{grand_total ? grand_total : null}</td>
				</tr>
				<tr>
					<td colSpan={2} className="fw-bold text-uppercase">
						Percentage
					</td>
					<td colSpan={5}>{grand_total ? Percentage : null}</td>
				</tr>
				<tr>
					<td colSpan={2} className="fw-bold text-uppercase">
						Rank
					</td>
					<td colSpan={5}>{null}</td>
				</tr>
			</tbody>
		</Table>
	);
};
