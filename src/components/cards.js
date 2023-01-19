//internal import
import usersCardInfo from "../data/userCardInfo.json";

export const UsersCard = (props) => {
  const { headingone, headingtwo, paragraphtext, icon } = props;
  return (
    <>
      <div border="" style={{ width: "14rem" }} className="cardShadow card">
        <div className="d-flex ms-2 me-4 my-auto">
          {" "}
          <div class="card-body">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            <div className="text-muted textMutedFont card-title">
              {" "}
              {headingone}
            </div>
            <div className="statFont card-title">
              <b> {headingtwo}</b>
            </div>
          </div>
          {/* <HomeOutlinedIcon className="mt-3" /> */}
          {/* <Card.Img
            variant="top"
            src={icon}
            className="mx-lg-auto img-fluid"
            style={{ maxHeight: "100px", maxWidth: "120px" }}
          /> */}
        </div>
      </div>
      <br />
    </>
  );
};

export const Users = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center py-4">
          {usersCardInfo.usersCardInfo.map((info) => {
            return (
              <>
                <div
                  className="col-lg-3 col-md-4 col-sm-10 my-4 d-flex align-items-stretch"
                  key={info.id}
                >
                  <UsersCard {...info} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
