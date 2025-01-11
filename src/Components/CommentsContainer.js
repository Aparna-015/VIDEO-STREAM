import React from "react";

const commentsData = [
  {
    name: "creative_minds",
    text: "This video was so helpful! Thank you for explaining everything so clearly. 🙌",
    replies: [
      {
        name: "@content_creator",
        text: "I’m glad you found it useful! Let me know if you have any questions. 😊",
        replies: [],
      },
    ],
  },
  {
    name:"@anuzz___0",
    text:"This vlog made me feel like I was right there with you! Amazing shots. 🏖️🙌",
    replies:[],
  },
  {
    name:"@veenak90",
    text:"This absolutely nice... ...😊",
    replies:[
      {
        name:" @neetumukundan3020",
        text:"Yes",
        replies:[
                {
                name:"",
                text:"Thank you guys.........😊😊🙌",
                replies:[
                  {
                    name:"@rahulsingla1710",
                    text:"❤❤❤",
                    replies:[],
                  }
                ]
                },
                {
                  name:"@maya__013",
                  text:"Following your channel from the last two years, interesting content!😊",
                  replies:[],
                }
             ]
      }
    ],
  },
  {
    name: "gamer_x",
    text: "Loved this walkthrough! Can you make one for the next level of the game? 🎮",
    replies: [
      {
        name: "@content_creator",
        text: "Thanks for watching! I’ll definitely cover that in my next video. Stay tuned! 🔔",
        replies: [],
      },
    ],
  },
  {
    name: "foodie_life",
    text: "This recipe looks so delicious! Definitely trying it this weekend. 🍝",
    replies: [
      {
        name: "@content_creator",
        text: "Thanks! Let me know how it turns out. 😊",
        replies: [],
      },
    ],
  },
  {
    name: "tech_enthusiast",
    text: "Great review! Do you think this laptop is good for video editing? 💻",
    replies: [
      {
        name: "@content_creator",
        text: "Yes, it’s great for video editing. Just ensure you get the higher RAM configuration. 😊",
        replies: [],
      },
    ],
  },
  {
    name: "travel_blogger",
    text: "This vlog made me feel like I was right there with you! Amazing shots. 🏖️",
    replies: [
      {
        name: "@content_creator",
        text: "Thank you so much! Glad you enjoyed the visuals. 🌍",
        replies: [],
      },
    ],
  },
  {
    name: "music_addict",
    text: "This song has been on repeat since I found it here! Thanks for sharing. 🎶",
    replies: [
      {
        name: "content_creator",
        text: "It’s a favorite of mine too! Glad you like it. 🎧",
        replies: [],
      },
    ],
  },
  {
    name: "@fitness_journey",
    text: "This workout routine is a game changer! Thanks for the motivation. 💪",
    replies: [
      {
        name: "@content_creator",
        text: "You’ve got this! Keep pushing yourself. 😊",
        replies: [],
      },
    ],
  },
  {
    name: "@movie_buff",
    text: "This breakdown of the movie was so detailed. I caught so many things I missed! 🎥",
    replies: [
      {
        name: "@content_creator",
        text: "Happy to help! Let me know if there’s another movie you’d like me to cover. 🎬",
        replies: [],
      },
    ],
  },
  {
    name: "@diy_lover",
    text: "This DIY was so fun to make! My friends couldn’t believe I made it myself. 🛠️",
    replies: [
      {
        name: "@content_creator",
        text: "That’s amazing! So glad you tried it out. 😊",
        replies: [],
      },
    ],
  },
  {
    name: "@random_thoughts",
    text: "Anyone else watching this at 3 AM and suddenly feeling inspired? 😂",
    replies: [
      {
        name: "@night_owl",
        text: "Right here! 3 AM squad represent. 😅",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex bg-gray-100 p-2 ml-4 rounded-lg   ">
      <img
        className="w-12 h-12"
        src="https://www.shutterstock.com/image-vector/user-account-profile-circle-flat-600nw-467503004.jpg"
        alt=""
      />
      <div className="">
        <p>{name} </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {

    return (
      comments.map((comment,index) => (
      <div className="p-2">
        <Comment key={comment.id} data={comment} />
        
        <div className="pl-6    text-gray-950">
        <hr/>
          <CommentList comments={comment.replies} />
        </div>
        
      </div>
       
    ) ))
  }


const CommentsContainer = () => {


  return (
    <div className="m-5 p-2 bg-gray-100 w-[900px] ">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
