import React from "react"
import LockIcon from "../../img/lockIcon.png";

export const NotFriendBlackBlock = (props) => {
    const { pageOwnerName, areFriends } = props
    console.log("this is black:", pageOwnerName)
    console.log("this is black arefriends:", areFriends)
    return (
        <div style={{
            height: "50vh",
            backgroundColor: "#434343", zIndex: "20"
        }}>
            <img style={{ marginTop: "40px" }} src={LockIcon} alt="lockIcon" />
            <p style={{ marginTop: "10px", color: "white" }}>You are not friends with {pageOwnerName}</p>
        </div >
    )

}