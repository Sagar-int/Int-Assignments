import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
// import { useScolasticsData } from '../../hooks/academic';
import './scolasticArea.css';

export const ScolasticArea = () => {
	// const { isLoading, error, data } = useScolasticsData();
	 //data from json server
	const {part1_data} = useSelector((state) => state.AcademicReducer);


	let grand_total = 0;
	for (let i = 0; i < part1_data?.length; i++) {
		grand_total = grand_total + parseInt(part1_data[i].total_mark);
	}

	let Total = part1_data.length*200;
	let Percentage = ((grand_total/Total)*100).toFixed(3)

	// console.log("grand_total-->", grand_total ,"and", "Total-->", Total);

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
							<td>{i+1}</td>
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
					<td colSpan={5}>{grand_total? grand_total: null}</td>
				</tr>
				<tr>
					<td colSpan={2} className="fw-bold text-uppercase">
						Percentage
					</td>
					<td colSpan={5}>{grand_total? Percentage: null}</td>
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
