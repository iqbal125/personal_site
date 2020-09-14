import image1 from "../../static/CoursePics/2199924_ed01_2.jpg"
import image2 from "../../static/CoursePics/2258296_130c_4.jpg"
import image3 from "../../static/CoursePics/2542078_6708_3.jpg"

const courses = [
  {
    title: "React Fullstack with node/express, PostgreSQL and AWS",
    subtitle:
      "Learn how to setup a React Fullstack app on AWS with a PostgreSQL database",
    url:
      "https://www.udemy.com/course/react-fullstack-with-nodeexpress-psql-and-aws/",
    students: "30,000+",
    technolgies: ["React", "Redux", "Node.js", "AWS", "Postgres"],
    description:
      "This was my more intermediate to advanced course and students were expected to have prior React and javascript knowledge. I started with a basic React app and walked the students through building it into a more complex advanced app. In the final section we did a complex production level deployment to AWS. A lot of theory was also covered in between the coding sections.",
    topics: `Setting up a proxy, how CORS works, why to not use an ORM, setting up a local postgres db, reducers and actions for more complex state management, creating a schema.sql file, setting up express routes and accompanying sql queries, building a client side React blog, authentication and user state management, CSS animations, fullstack search engine, custom messaging, building an admin app, AWS VPC subnetting, nginx, PM2. `,
    img: image3,
  },
  {
    title: "React with Redux, React-Router, Hooks and Auth0",
    subtitle: "Learn the complete React-Redux front end system.",
    url: "https://www.udemy.com/course/modern-react/",
    students: "36,000+",
    technolgies: ["React", "Redux", "React-Router", "Auth-0"],
    description: `This was my first course and I wasn’t really sure what to expect when I published it. Luckily it got good feedback from the community and amassed tens of thousands of students. This is a beginner to intermediate course. It covers React and Redux in depth. In dept React Router and Authentication are also covered.`,
    topics: `Redux Dev tools, JSX, Virtual DOM,  ternary expressions, lifecycle methods, Redux, reducers, actions, action creators, react-router, history, Authentication, JWT tokens, Private Routes, Oauth2 logins, silent authentication`,
    img: image1,
  },
  {
    title: "React Hooks and Context (with React-Redux migration guide)",
    subtitle:
      "Learn the future of React and how to migrate your existing Redux code",
    url: "https://www.udemy.com/course/react-hooks-with-react-redux-migration/",
    students: "11,000+",
    technolgies: ["React", "React Hooks", "Context"],
    description: `This was a sort of mini course that functions as a supplement to the main React-Redux course. This course mainly covers the basic usage of the 4 main React hooks. There is also a section on how to transition from using Redux to React hooks.  The second main section builds out a project using the React Hooks. `,
    topics: `Correct usage of useState, useEffect, useReducer and useContext. 2 rules of Hooks, managing global state with context, creating a form with global state with context. `,
    img: image2,
  },
]

export default courses
