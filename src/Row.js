import Cell from "./Cell";

const Row = ({ item }) => {
  return (
    <>
      <tr className="trBackground">
        <th>No</th>
        <th>Name</th>
        <th>Surname</th>
        <th>e-mail</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Web site</th>
        <th>Address</th>
      </tr>
      <tr>
        {Object.entries(item).map(([key, value]) => {
          return <Cell key={key} cellData={JSON.stringify(value)} />;
        })}
      </tr>
    </>
  );
};

export default Row;
