import { Table } from 'react-bootstrap';
import { useScolasticsData } from '../../hooks/academic';
import './scolasticArea.css';

export const ScolasticArea = () => {
	const { isLoading, error, data } = useScolasticsData();
	let grand_total = 0;
	for (let i = 0; i < data?.data.length; i++) {
		grand_total = grand_total + parseInt(data.data[i].total_mark);
	}

	let Percentage = ((grand_total/2200)*100).toFixed(3)
	// console.log("grand_total", grand_total, Percentage);

	if (isLoading) {
		return <h2>Loading..</h2>;
	}

	if (error) {
		return <h2>{error.message}</h2>;
	}

	return (
		<Table bordered hover className="table_border common_width" responsive='sx'>
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

				{data?.data.map((ele) => {
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
				})}

				<tr>
					<td colSpan={2} className="fw-bold text-uppercase">
						Grand Total
					</td>
					<td colSpan={5}>{grand_total}</td>
				</tr>
				<tr>
					<td colSpan={2} className="fw-bold text-uppercase">
						Percentage
					</td>
					<td colSpan={5}>{Percentage}</td>
				</tr>
				<tr>
					<td colSpan={2} className="fw-bold text-uppercase">
						Rank
					</td>
					<td colSpan={5}>V</td>
				</tr>
			</tbody>
		</Table>
	);
};
