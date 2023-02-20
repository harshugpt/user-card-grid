1 - I used create-react-app to create a new React project.

2 - I created a Navbar component that displays the brand name and a "Get Users" button.

3 - I created a UserCard component that displays the details of a single user.

4 - I created a UserCardGrid component that displays a grid of UserCard components.

5 - I added state to the App component to store the user data, the loading status, and the current page number.

6 - I added an onClick handler to the "Get Users" button that fetches the user data from the API using the fetch function.

7 - I updated the UserCardGrid component to display the user data and added a loader to display while the data is being fetched.

8 - I added custom CSS to style the components and make them responsive.

9 - I added pagination to the UserCardGrid component, allowing users to navigate through multiple pages of data.

10 - I updated the onClick handler to fetch data for the current page number and added logic to loop back to the first page when the last page is reached.

11 - useState: I used the useState hook to manage the users state variable in the App component. This state variable holds the array of user data fetched from the API.

12 - useEffect: I used the useEffect hook to fetch the user data from the API when the App component mounts and whenever the page state variable changes. This hook allowed me to execute side effects (such as fetching data) without blocking the rendering of the component.

13 - useReducer: I used the useReducer hook to manage the loading state variable in the App component. This state variable holds a boolean value that indicates whether the data is currently being fetched from the API or not. Using useReducer allowed me to write more concise code for updating the state based on a previous value.

14 - useState: I used the useState hooks to manage the page state variable in the App component. This state variable holds the current page number.
