import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  console.log(reqType);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
        <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
        <Button
          buttonText="comments"
          reqType={reqType}
          setReqType={setReqType}
        />
      </form>
    </div>
  );
};

export default Form;
