// internal import
import { DashboardNavbar, SidebarLarge, SidebarSmall } from "../components/nav";
import { Users } from "../components/cards";
import { OrganizationForm } from "../components/forms";

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
export const UserGeneralDetails = () => {
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
            <OrganizationForm />
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
              <tr className="">
                <th scope="col" className="tableHeaderText">
                  ORGANIZATION{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-filter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </th>
                <th scope="col">USERNAME</th>
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
                <td className="tableHeaderText">Adedeji</td>
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
