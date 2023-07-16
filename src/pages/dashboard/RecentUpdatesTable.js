import Table from "react-bootstrap/Table";

export const RecentUpdatesTable = () => {
  return (
    <>
        <div className="fw-bold p-3"> Recents Updates</div>
    <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th> Subject</th>
          <th>Status</th>
          <th>Last Update</th>
          <th>Tracking ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Emails </td>
          <td>Respond all customer Emails</td>
          <td>
            <div className="progress badge "> PROGRESS</div>
          </td>
          <td>Apr 5, 2023</td>
          <td>AB-12345</td>
        </tr>
        <tr>
          <td> Order </td>
          <td>Fulfill all the customers Orders</td>
          <td>
            <div className="badge done "> DONE</div>
          </td>
          <td>Apr 28, 2023</td>
          <td>AB-12346</td>
        </tr>
        <tr>
          <td> Shipment </td>
          <td>Shipping all the customers Order</td>
          <td>
            <div className="onhold badge"> ON HOLD</div>
          </td>
          <td>March 29, 2023</td>
          <td>AB-12347</td>
        </tr>
        <tr>
          <td> Sale and Offers </td>
          <td>Outdated sale offers giftcards</td>
          <td>
            <div className="rejected badge "> REJECTED</div>
          </td>
          <td>Apr 9, 2023</td>
          <td>AB-12348</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};
