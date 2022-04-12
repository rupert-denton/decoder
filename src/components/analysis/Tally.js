import "./Tally.css";

const Tally = (props) => {
  return (
    <div className="tally">
      <table>
        <tr>
          <th></th>
          <th>#</th>
        </tr>
        <tr>
          CVC
          <td>10</td>
        </tr>
        <tr>
          CVCC
          <td>9</td>
        </tr>
        <tr>
          CCVC
          <td>8</td>
        </tr>
        <tr>
          CCVCC
          <td>1</td>
        </tr>
        <tr>
          Polysyllabic
          <td>3</td>
        </tr>
      </table>
    </div>
  );
};

export default Tally;
