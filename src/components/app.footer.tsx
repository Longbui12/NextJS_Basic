// const AppFooter = () => {
//   return (
//     <div style={{ background: "#ddd", textAlign: "center", padding: "5px 0" }}>
//       LEARNING NEXTJS V13.4.12 & BUILDING PETER APP .
//     </div>
//   );
// };
// export default AppFooter;

// làm responsive cho footer vì hok dùng thư viện :
import "./app.footer.css";

const AppFooter = () => {
  return (
    <div className="footer">
      LEARNING NEXTJS V13.4.12 & BUILDING PETER APP .
    </div>
  );
};
export default AppFooter;
