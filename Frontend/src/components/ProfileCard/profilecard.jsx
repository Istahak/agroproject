import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ProfileCard({ username, totalPostsCount }) {
  return (
    <div className="">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "180px", borderRadius: "10px" }}
                      src="data:image/png;base64,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"
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{username}</MDBCardTitle>
                    <MDBCardText>user</MDBCardText>

                    <div
                      className="d-flex items-center justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">{totalPostsCount}</p>
                      </div>
                    </div>
                    {/* <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div> */}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
