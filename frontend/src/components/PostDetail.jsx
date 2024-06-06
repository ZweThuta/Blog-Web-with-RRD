import { useNavigate, useSubmit } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const PostDetail = ({ post }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`edit-post`);
  };
  const submit = useSubmit();
  const postDeleteHandler = () => {
    const confirmStatus = window.confirm("Are you sure to delete?");
    if (confirmStatus) {
      submit(null, { method: "DELETE" });
    }
  };
  const { description, image, title, date } = post;
  return (
    <section className="detail">
      <h1 className="detail-title">
        {title} <hr />
      </h1>
      <img className="detail-image" src={image} alt={title} />
      <p className="detail-date">
        <CalendarDaysIcon className="calendar-icon" /> <span>{date}</span>
      </p>
      <p className="detail-description">&nbsp;&nbsp;&nbsp;{description}</p>

      <div className="detailbtn-bg">
        <button className="edit-btn" onClick={navigateHandler}>
          Edit
        </button>
        <button className="delete-btn" onClick={postDeleteHandler}>
          Delete
        </button>
      </div>
      <hr />
    </section>
  );
};

export default PostDetail;
