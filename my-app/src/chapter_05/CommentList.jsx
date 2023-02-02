import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "혜민😳",
        comment: "집 가고 싶다",
    },
    {
        name: "먼지🐱",
        comment: "츄르..🐾",
    },
    {
        name: "멍멍이",
        comment: "기여워..."
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) =>  { // 맵으로 댓글 불러오기
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;