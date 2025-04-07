function SuccessMessage({SetStatus , Status, successButton}) {


  return (
    // <div class="Success__Message">
    <div class={Status == "Email sent successfully!" ? "Success__Message" : "Failed__Message" }>
      <h2>{Status == "Email sent successfully!" ? "Success" : "Failed" }</h2>
      <p>{Status}</p>
      <button onClick={successButton}>Ok</button>
    </div>
  );
}

export default SuccessMessage;
