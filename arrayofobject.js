//
const users = [
    {
      firstName: "shubham",
      lastName: "Bhattacharya",  // Changed "Lastname" to "lastName"
      gender: "male",
    },
    {
      firstName: "prince",
      lastName: "kumar",  // Consistent case
      gender: "male",
    },
    {
      firstName: "riya",
      lastName: "kumari",
      gender: "female",
    },
    {
      firstName: "sonali",
      lastName: "raj",
      gender: "female",
    }
  ];
  
  console.log(users[1]["gender"]); // Correct usage of square brackets
  for(let i=0;i<users.length;i++){
    if(users[i]["gender"]=="male"){
      console.log(users[i]["firstName"]);
    }
  }
  