// import { useState } from "react";
import { useState } from "react";
import ".././styles/supportPage.css";

function Support() {
  const [button, setButton] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const [send, setSend] = useState(true);
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    topic: "",
  });

  const [ticketNumber , setTicketNumber] = useState(0);
  //set the name and value on every change in the input
  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  //check user is input 
  const checkInput = () => {
    setButton(false);
   
    console.log(form);
    if (form.first.trim() === "") {
      setErrMessage("Firstname is required!");
      return;
    }
    if (form.last.trim() === "") {
      setErrMessage("Lastname is required!");
      return;
    }
    if (form.email.trim() === "") {
      setErrMessage("Email is required!");
      return;
    }
    if (!form.topic) {
      setErrMessage("Topic is required!");
      return;
    }
  
    setTicketNumber(Math.floor(Math.random()*9000) +1000);
    setSend(false);
  };
  return (
    <div className="supportContainer">
      <div className="container">
        {errMessage ? (
          <div className="modal">
            <div className="message">
              <h4>Message</h4>
              <p>{errMessage}</p>
            </div>
            <button
              onClick={() => {
                setErrMessage("");
                setButton(true);
              }}
            >
              Ok
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <h1>Support Ticket Form</h1>
        {send ?  (
          <div className="box">
            <div className="field">
              <div>
                <div className="requiredIcon">
                  <h4>Name</h4>
                  <small>*</small>
                </div>
                <div>
                  <div className="nameContainer">
                    <div className="name">
                      <input
                        type="text"
                        name="first"
                        value={form.first}
                        onChange={handleChange}
                      />
                      <label htmlFor="first">First</label>
                    </div>
                    <div className="name">
                      <input
                        type="text"
                        name="last"
                        value={form.last}
                        onChange={handleChange}
                      />
                      <label htmlFor="last">Last</label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="requiredIcon">
                  <h4>Email</h4>
                  <small>*</small>
                </div>
                <input
                  type="text"
                  className="emailInput"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="requiredIcon">
                  <h4>Topic</h4>
                  <small>*</small>
                </div>

                <div className="topic">
                  <h5>What can we help you today?</h5>
                  <div className="radio">
                    <input
                      type="radio"
                      value="General"
                      name="topic"
                      checked={form.topic === "General"}
                      onChange={handleChange}
                    />
                    <label htmlFor="General">General</label>
                  </div>
                  <div className="radio">
                    <input
                      type="radio"
                      value="Bug"
                      name="topic"
                      checked={form.topic === "Bug"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Bug">Bug</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="optionalField">
                <h4>Description</h4>
                <p>Optional</p>
              </div>
              <input className="descriptionInput" type="text" />
            </div>
          </div>
        ):(
          <div className="ticket">
            <h1>Thank you for sending us your report, we will track the problem now</h1>
            <h4>ticket number:{ticketNumber}</h4>
          </div>
        )  } 
      </div>
      {send? <button
        className={button ? "sendBtn btnColor" : "sendBtn"}
        onClick={checkInput}
      >
        SEND
      </button> : <div></div>}
      
    </div>
  );
}
export default Support;
