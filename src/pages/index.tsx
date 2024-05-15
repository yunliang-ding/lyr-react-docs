// import { Navigate } from "react-router-dom"

// export default () => {
//   return <Navigate to="/user/list" replace={true} />
// }
import content from '../../docs/user.md';

export default () => {
  return (
    <div>
      <pre>{content}</pre>
    </div>
  );
};
