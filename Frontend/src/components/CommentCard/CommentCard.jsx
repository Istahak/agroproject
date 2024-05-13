import React from "react";
import { MDBCardBody, MDBTypography } from "mdb-react-ui-kit";

function CommentCard({ username, timestamp, content }) {
  return (
    <div>
      <MDBCardBody className="p-4">
        <div className="d-flex flex-start">
          <div>
            <MDBTypography tag="h6" className="fw-bold mb-1">
              {username}
            </MDBTypography>
            <div className="d-flex align-items-center mb-3">
              <p className="mb-0">{timestamp}</p>
            </div>
            <p className="mb-0">{content}</p>
          </div>
        </div>
      </MDBCardBody>

      <hr className="my-0" />
    </div>
  );
}

export default CommentCard;
