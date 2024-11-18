import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f392a678-ea1e-4216-95ce-98154725904b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you for contacting!",
                icon: "success"
              });
        }
      };
      
      return (
        <div>
            <form onSubmit={onSubmit} className="form-container">
                <div className="input">
                    <label>Full Name</label>
                    <input type="text" name="name" className="field" placeholder='Enter your name' required/>
                </div>
                <div className="input">
                    <label>Email Address</label>
                    <input type="email" name="email" className="field" placeholder='Enter your email' required/>
                </div>
                <div className="input">
                    <label>Your Message</label>
                    <textarea name="message" className="msg-field" placeholder='Enter your message' required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>

        </div>
            
    )
}

export default Contact;
