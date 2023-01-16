import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/praveen-kispotta-bb3128184/",
        icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
        bgColor: "#ff9580",
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com/PRAVEEN-KISPOTTA",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
        bgColor: "#f2faa6",
      },
      {
        id: 3,
        name: "LeetCode",
        link: "https://leetcode.com/Praveen_Kispotta/",
        icon: "https://cdn-icons-png.flaticon.com/512/711/711284.png",
        bgColor: "#b8b3e8",
      },
    ];
    // Edit the code given below and pass data as props to listItem and map over data.
    return (
      <div className="List">
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default List;
