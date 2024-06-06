import { Link } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
const PostItem = ({ post }) => {
  const { id, title, date, image } = post;
  return (
    <>
      <section className="post">
        <Link to={`${id}`}>
          <img src={image} alt={title} />
        </Link>
        <p className="title">{title}</p>
        <p className="date">
          <CalendarDaysIcon className="calendar-icon" /> <span> {date}</span>
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
          obcaecati similique repellendus necessitatibus aliquam quisquam nisi
          quia sunt neque, veritatis unde consequatur ipsa accusantium iusto
          laboriosam quidem omnis provident eos.....
        </p>
          <Link to={`${id}`} className="arrowicon-bg">
          <p>Continue Reading</p>
          </Link>
        <br/>
        <hr />
      </section>
    </>
  );
};

export default PostItem;
