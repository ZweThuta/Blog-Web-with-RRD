import PostForm from "../components/PostForm";

const Create = () => {
  return (
    <>
      <PostForm
        header={"Create your post here!"}
        btnText={"Post"}
        method={"POST"}
      />
    </>
  );
};
export default Create;
