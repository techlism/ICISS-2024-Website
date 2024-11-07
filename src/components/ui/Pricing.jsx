import styling from "./Pricing.module.css";

const Pricing = () => {
	return (
		<div className={styling["table-wrapper"]}>
			<div className={styling["table-container"]}>
				<table className={styling.table}>
					<tbody>
						<tr>
							<th rowSpan="2">Category</th>
							<th colSpan="2">Indian Participant</th>
							<th colSpan="2">Foreign Participant</th>
						</tr>
						<tr>
							<th>On or before November 10, 2024</th>
							<th>After November 10, 2024</th>
							<th>On or before November 10, 2024</th>
							<th>After November 10, 2024</th>
						</tr>
						<tr>
							<td>Academia (Author)</td>
							<td>
								₹7000 <span style={{ fontSize: "0.8rem" }}>(+₹1260 GST)</span>
							</td>
							<td>
								₹8000 <span style={{ fontSize: "0.8rem" }}>(+₹1440 GST)</span>
							</td>
							<td>
								$200 <span style={{ fontSize: "0.8rem" }}>(+$36 GST)</span>
							</td>
							<td>
								$250 <span style={{ fontSize: "0.8rem" }}>(+$45 GST)</span>
							</td>
						</tr>
						<tr>
							<td>Industry/ R & D organization (Author)</td>
							<td>
								₹8000 <span style={{ fontSize: "0.8rem" }}>(+₹1440 GST)</span>
							</td>
							<td>
								₹9000 <span style={{ fontSize: "0.8rem" }}>(+₹1620 GST)</span>
							</td>
							<td>
								$250 <span style={{ fontSize: "0.8rem" }}>(+$45 GST)</span>
							</td>
							<td>
								$300 <span style={{ fontSize: "0.8rem" }}>(+$54 GST)</span>
							</td>
						</tr>
						<tr>
							<td>Attending only/ Accompanying Person</td>
							<td>
								₹2000 <span style={{ fontSize: "0.8rem" }}>(+₹360 GST)</span>
							</td>
							<td>
								₹2000 <span style={{ fontSize: "0.8rem" }}>(+₹360 GST)</span>
							</td>
							<td>
								$100 <span style={{ fontSize: "0.8rem" }}>(+$18 GST)</span>
							</td>
							<td>
								$100 <span style={{ fontSize: "0.8rem" }}>(+$18 GST)</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={styling["table-wrapper"]}>
				<div className={styling["table-container"]}>
					<table className={styling.table}>
						<tbody>
							<tr>
								<td style={{ color: "yellow", fontWeight: "bold" }}>
									Kindly note that the permissible page length is limited to 12
									pages according to available template. In the event of
									exceeding this limit, an additional charge of INR 500{" "}
									<span style={{ fontSize: "0.8rem" }}>(+₹90 GST)</span> per
									page or $10{" "}
									<span style={{ fontSize: "0.8rem" }}>(+$1.8 GST)</span> per
									page will be charged to the participant for presentation.
								</td>
							</tr>
							<tr>
								<td style={{ color: "yellow", fontWeight: "bold" }}>
									Presentation Certificate will be provided to only one
									presenter per paper.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
