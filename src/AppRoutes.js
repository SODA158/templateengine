import DocumentBody from "./components/DocumentBody";
import Works from "./components/Works";

const work = 2;
const AppRoutes = [
  // {
  //   index: true,
  //   element: <Home/>
  // },
  {
    path: "/Work/:id",
    element: <DocumentBody />,
  },
  {
    index: "/UserWorks/" + 1,
    element: <Works Userid={1} />,
  },
];

export default AppRoutes;
