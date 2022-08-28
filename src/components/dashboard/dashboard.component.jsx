import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div
      className="container bg-light border-light"
      style={{ minHeight: "80vh" }}
    >
      <Link to="/Addpost">
        <button
          className="fs-3 btn btn-light m-2"
          style={{
            width: "211px",
            height: "139px",

            border: "1px solid #aaaaaa",
          }}
        >
          <img
            src="https://img.icons8.com/avantgarde/60/FA5252/plus.png"
            alt=""
          />
          <br />
          Add Post
        </button>
      </Link>

      <button
        className="fs-3  btn btn-light m-2"
        style={{
          width: "211px",
          height: "139px",
          verticalAlign: "top",
          color: "#1d1d1d",
          border: "1px solid #aaaaaa",
        }}
      >
        <img
          src="https://img.icons8.com/avantgarde/60/000000/edit.png"
          alt=""
        />
        View/Update
      </button>

      <button
        className="fs-3 btn btn-light m-2"
        style={{
          width: "211px",
          height: "139px",
          color: "#1d1d1d",
          border: "1px solid #aaaaaa",
        }}
      >
        <img
          src="https://img.icons8.com/stickers/60/000000/visible.png"
          alt=""
        />
        <br />
        View Orders
      </button>
    </div>
  );
};

export default Dashboard;
