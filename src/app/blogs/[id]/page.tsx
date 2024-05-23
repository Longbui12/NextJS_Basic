const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log("CHECK ID :", params.id);

  return <div>VIEW DETAIL WITH MR.PETER = {params.id}</div>;
};

export default ViewDetailBlog;
