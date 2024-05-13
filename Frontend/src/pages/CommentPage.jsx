import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreatePostPopup from "../components/CreatePost/CreatePostPopup";
import CommentCard from "../components/CommentCard/CommentCard";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../assets/Style/CommentPage.css";


import { formatDistanceToNow, parseISO } from 'date-fns';

const formatTimeAgo = (timestamp) => {
  const date = new Date(timestamp);
  // update for Dhaka timezone
  date.setHours(date.getHours() + 6);
  return formatDistanceToNow(date, { addSuffix: true });
};



export default function CommentPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const { postId } = useParams();


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/comments/${postId}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId, isPopupOpen]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="comment-section">
      <div>
        <Button onClick={openPopup}>Add Comment</Button>
        {isPopupOpen && <CreatePostPopup onClose={closePopup} postId={postId} />}
      </div>

      <MDBContainer className="py-5 comment-body">
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10">
            <MDBCard className="text-dark">
              <MDBCardBody className="p-4 comment-card-body">
                <MDBTypography
                  tag="h4"
                  className="mb-0 text-4xl font-bold text-center"
                >
                  Comments
                </MDBTypography>
              </MDBCardBody>

              <hr className="my-0" />
              <div className="comment-card-container">
                {comments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    username={comment.author.Username}
                    timestamp={formatTimeAgo(comment.timestamp)}
                    content={comment.content}
                  />
                ))}
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
