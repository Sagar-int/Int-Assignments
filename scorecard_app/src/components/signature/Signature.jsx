import { Col, Container, Row } from 'react-bootstrap';
import './signature.css';

export const Signature = () => {
	return (
		<Container>
			<Row>
				<Col sm={7} className="teacher_remark_col">
					<div className="teacher_remark">
						<h5>C.G.P : 9.5</h5>
						<h6>
							Teacher's Remark - <span className="t_mark_span">Excelent</span>
						</h6>
					</div>

					<div className="teach_sign">
						<div>
							<p>Mr.Unknown</p>
							<h6>
								<em>Techer's Signature</em>
							</h6>
						</div>

						<div>
							<p>Mr. XYZ's Papa</p>
							<h6>
								<em>Parents's Signature</em>
							</h6>
						</div>
					</div>
				</Col>

				<Col sm={4} className="principal_sign_col">
					<div className="principal_remark">
						<h5>Grade : A1</h5>
					</div>

					<div className="principal_sign">
						<p>Mr.Super Unknown</p>
						<h6>
							<em>Principal's Signature</em>
						</h6>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
