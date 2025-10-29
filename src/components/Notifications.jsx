function Notifications({ hasNewMessages }) {
  return (
    <div>
      <h2>Inbox</h2>
          {hasNewMessages && <p>You have a new message!</p>}
          {hasNewMessages && <h2>No new message.</h2> }
    </div>
  );
}
export default Notifications