import React from "react";
import { MDBCardBody, MDBTypography } from "mdb-react-ui-kit";
function CommentCard() {
  return (
    <div>
      <MDBCardBody className="p-4">
        <div className="d-flex flex-start">
          <div>
            <MDBTypography tag="h6" className="fw-bold mb-1">
              Maggie Marsh
            </MDBTypography>
            <div className="d-flex align-items-center mb-3">
              <p className="mb-0">March 07, 2021</p>
            </div>
            <p className="mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </p>
          </div>
        </div>
      </MDBCardBody>

      <hr className="my-0" />
    </div>
  );
}

export default CommentCard;
