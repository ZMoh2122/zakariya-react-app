function Dashboard({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>You are logged in!</p> : <p>Please log in first.</p>}
      {isLoggedIn ? <p>yes true</p> : <p>no false</p>}
    
      
      
      </div>
  );
}

export default Dashboard;
