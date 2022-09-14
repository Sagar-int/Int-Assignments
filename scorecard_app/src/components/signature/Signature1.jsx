import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import './signature.css';

export const Signature1 = () => {
	const { part1_data } = useSelector((state) => state.AcademicReducer);
	const [grade, setGrade] = useState('');

	let grand_total = 0;
	for (let i = 0; i < part1_data?.length; i++) {
		grand_total = grand_total + parseInt(part1_data[i].total_mark);
	}

	let Total = part1_data.length * 200;
	// let Percentage = ((grand_total / Total) * 100).toFixed(3);


	return (
		<Container>
			<Row>
				<div className="remark_row">
					<div className="teacher_remark">
						<h5>C.G.P : 9.5</h5>
						<h6>
							Teacher's Remark - <span className="t_mark_span">Excelent</span>
						</h6>
					</div>

					<div className="principal_remark">
						<h5>Grade : {Total ? grade : null}</h5>
					</div>
				</div>
			</Row>
			<br />
			<br />
			<br />

			<Row>
				<div className="all_sign_row">
					<div>
						<p>___________________________________</p>
						<h6>
							<em>Techer's Signature</em>
						</h6>
					</div>

					<div>
						<p>___________________________________</p>
						<h6>
							<em>Parents's Signature</em>
						</h6>
					</div>

					<div>
						<p>___________________________________</p>
						<h6>
							<em>Principal's Signature</em>
						</h6>
					</div>
				</div>
			</Row>
			<br />
		</Container>
	);
};
