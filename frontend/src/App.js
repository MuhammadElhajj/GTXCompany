// import React, { useState, useEffect } from 'react';  
// import './css/Body.css'
// import './css/Form.css'
// import './css/Header.css'
// import './css/Mian.css'
// import './css/style.css'
// import './App.css';
// import HomePage from './components/HomePage';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import SuccessMessage from './components/Success';
// import FailedMessage from './components/Failed';
// import axios from 'axios';
// import ScrollToTopButton from './components/ScrollButton';



//     function App() {
//       const [senderName, setSenderName] = useState('');
//       const [senderEmail, setSenderEmail] = useState('');
//       const [subject, setSubject] = useState('');
//       const [message, setMessage] = useState('');
//       const [recipients, setRecipients] = useState('');
//       const [replyToName, setReplyToName] = useState('');
//       const [replyToEmail, setReplyToEmail] = useState('');
//  const [status, setStatus] = useState('');
//  const [isPending, setIsPending] = useState(false);  

//       const handleSubmit = async (e) => {
//         e.preventDefault();const data = {
//           subject,
//           message,
//           recipients: recipients.split(','), // تحويل إلى مصفوفة
//           senderName,
//           senderEmail,
//           replyToName,
//           replyToEmail
//         };

//         try {
//           // const response = await axios.post('https://gtxcompany-com.onrender.com', data);
//           const response = await axios.post('http://localhost:5000/send-email', data);  
//           setStatus(response.data.message);
//           setIsPending(false);
//         } catch (error) {
//           setStatus('Error sending email' + error.message);
//           // setStatus('Error sending email');
//         }
//       };


//       function successButton () {
//         setStatus(!status)
//       }

//       // ! Scroll 



//   const scrollToTop = () => {  
//       window.scrollTo({  
//           top: 0,  
//           behavior: 'smooth'  
//       });  
//   };  


// // });
//       // ! Scroll 

      
//   function successButton () {
//     // window.location.reload();
//     setStatus(!status)
//     setSenderName("")
//     setSenderEmail("")
//     setSubject("")
//     setMessage("")
//     setRecipients("")
//     setReplyToName("")
//     setReplyToEmail("")
  
//   }



//     const handleSendMessage = async () => {  
//         setIsPending(true); // Set pending state to true  
    

//  }

import React, { useState } from 'react';  
import './css/Body.css';  
import './css/Form.css';  
import './css/Header.css';  
import './css/Mian.css';  
import './css/style.css';  
import './App.css';  
import HomePage from './components/HomePage';  
import Footer from './components/Footer';  
import Header from './components/Header';  
import SuccessMessage from './components/Success';  
import FailedMessage from './components/Failed';  
import axios from 'axios';  
import ScrollToTopButton from './components/ScrollButton';  

function App() {  
    const [senderName, setSenderName] = useState('');  
    const [senderEmail, setSenderEmail] = useState('');  
    const [subject, setSubject] = useState('');  
    const [message, setMessage] = useState('');  
    const [recipients, setRecipients] = useState('');  
    const [replyToName, setReplyToName] = useState('');  
    const [replyToEmail, setReplyToEmail] = useState('');  
    const [status, setStatus] = useState('');  
    const [isPending, setIsPending] = useState(false);  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        setIsPending(true);  // تعيين حالة الانتظار على true  

        const data = {  
            subject,  
            message,  
            recipients: recipients.split(','), // تحويل إلى مصفوفة  
            senderName,  
            senderEmail,  
            replyToName,  
            replyToEmail  
        };  

        try {  
            // const response = await axios.post('http://localhost:5000/send-email', data);  
            const response = await axios.post('https://gtxcompanybackend.onrender.com/api/send-email', data);  
            setStatus(response.data.message);  
        } catch (error) {  
            setStatus('Error sending email : ' + error.message);  
            // setStatus('Error sending email');  
        } finally {  
            setIsPending(false);  // تعيين حالة الانتظار إلى false بعد الانتهاء  
            resetForm();  // استدعاء دالة مسح الحقول  
        }  
    };  

    const resetForm = () => {  
        setSenderName("");  
        setSenderEmail("");  
        setSubject("");  
        setMessage("");  
        setRecipients("");  
        setReplyToName("");  
        setReplyToEmail("");  
    };  

    const scrollToTop = () => {  
        window.scrollTo({  
            top: 0,  
            behavior: 'smooth'  
        });  
    };  
    function successButton () {
              setStatus(!status)
            }
      

      return (
        <div className="App">
          {status && <SuccessMessage Status = {status}  SetStatus = {setStatus} successButton ={successButton}/> }
          {/* : <FailedMessage/> */}
          {/* <button class="scroll-button" onClick={scrollToTop} ><FaAngleDoubleUp/></button> */}
          <ScrollToTopButton/>

         <Header/>
         <HomePage/>
         <div className='container' id='Poll'>
         <h1 className='Container__H1'>Email Sender</h1>
        <form onSubmit={handleSubmit} id='Form__Mailer'>
          <h2 className='Sender__Part__H2'>Sender Information : </h2>
          <div className='Sender__Part'>
            
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              required
              placeholder='Sender Name'
              className='Sender__Part__Name '
            />
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              required
              placeholder='Sender Email'
                className='Sender__Part__Email '
            />
       
          </div>

          <h2 className='Sender__Part__H2'>Reply To : </h2>
          <div className='ReplyTo__Part'>
          <input
              type="text"
              required
              value={replyToName}
              onChange={(e) => setReplyToName(e.target.value)}
              className='ReplyTo__Part__Name'
              placeholder='Reply To Name'
            />
             <input
              type="email"
              required
              value={replyToEmail}
              onChange={(e) => setReplyToEmail(e.target.value)}
              className='ReplyTo__Part__Email'
                   placeholder='Reply To Email'
            />
       
          </div>
            

    

         

         
           <h2 className='Sender__Part__H2'>Subject : </h2>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className='Message__Part__Subject '
              placeholder='Subject'
            />
      

            
      <h2 className='Sender__Part__H2'>Message : </h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className='Message__Part__Message'
              placeholder='Message'
            />
         
           
         <h2 className='Sender__Part__H2'>Recipients Email Address : </h2>
            <input
              type="text"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
              required
              className='Recipients__Part__Input '
              placeholder='Recipients Emails (comma separated) Ex : one@example.com , tow@example.com'
            />
          
{/* <button className='Send__Button' type="submit">Send Email</button> */}
<button className='Send__Button ' type="submit" onClick={handleSubmit} disabled={isPending}>  
                <p className={isPending ? "loader" : ""}>{isPending ? '' : 'Send Message'}</p>
            </button>  
        </form>
        </div>
         <Footer />
         

        </div>
      );
    }

    export default App ;
