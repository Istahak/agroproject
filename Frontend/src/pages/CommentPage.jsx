import React from "react";
import CommentCard from "../components/CommentCard/CommentCard";
import "../assets/Style/CommentPage.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function CommentPage() {
  return (
    <section className="comment-section">
      <MDBContainer className="py-5 comment-body">
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10">
            <MDBCard className="text-dark">
              <MDBCardBody className="p-4 comment-card-body">
                <MDBTypography tag="h4" className="mb-0 text-4xl font-bold text-center">
                  Comments
                </MDBTypography>
              </MDBCardBody>

              <hr className="my-0" />
              <div className="comment-card-container">
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
