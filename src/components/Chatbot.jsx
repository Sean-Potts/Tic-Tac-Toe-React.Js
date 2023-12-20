import React, { useEffect } from "react";
import axios from "axios";

const ChatbotComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://aeona3.p.rapidapi.com/",
        params: {
          text: "tell me a story",
          userId: "12312312312",
        },
        headers: {
          "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
          "X-RapidAPI-Host": "aeona3.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the function when the component mounts
  }, []); // Empty dependency array means it runs once when mounted

  return <div>{/* Your component JSX goes here */}</div>;
};

export default ChatbotComponent;
