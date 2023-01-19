// internal import
import { DashboardNavbar, SidebarLarge, SidebarSmall } from "../components/nav";
import { Users } from "../components/cards";

// export const Dashboard = () => {
//   return (
//     <>
//       <SidebarLarge />
//       <Users />
//       {/* <SidebarSmall /> */}
//       <p>hello</p>
//     </>
//   );
// };
export const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <SidebarLarge />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <DashboardNavbar />
              </div>
              <h3>Users</h3>
              <div className="">
                {" "}
                <Users />
              </div>

              <div className="">
                <OrganizationUsersTable />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const OrganizationUsersTable = () => {
  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead className="change">
              <tr className="letter">
                <th scope="col">ORGANIZATION</th>
                <th scope="col">USERNAME </th>
                <th scope="col"> EMAIL</th>
                <th scope="col">PHONE NUMBER</th>
                <th scope="col">DATE JOINED </th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="">
                  <p>Lendsqr</p>
                </td>
                <td className="">Adedeji</td>
                <td className="">adedeji@lendsqr.com</td>
                <td className="">08078903721</td>
                <td className="">May, 15 2020 10:00AM</td>
                <td className="">Inactive</td>
              </tr>
              <tr className="">
                <td className="">
                  <p>Lendsqr</p>
                </td>
                <td className="">Adedeji</td>
                <td className="">adedeji@lendsqr.com</td>
                <td className="">08078903721</td>
                <td className="">May, 15 2020 10:00AM</td>
                <td className="">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="">
          <div className="d-flex justify-content-between mt-3 justify-content-center ">
            <p>Showing</p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  100
                </a>
              </li>
            </ul>
            <p>out of 100</p>
            <div className="d-flex align-items-center">
              {" "}
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
