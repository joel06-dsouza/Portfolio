import React from "react";

// import React, { useState } from "react";

const Contact = () => {

//     const [data, setdata] = useState({
//         fullname:'',
//         phone:'', 
//         email:'',
//         msg:'',
//     });



//     const InputEvent = (event) => {
//         const{name, value} = event.target;

//         setdata((preVal) => {
//             return {
//                 ...preVal,
//                 [name] : value,
//             };
//         });
//     };

//     const formSubmit = (e) => {
//         e.preventDefault();
//         alert(`My full name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email} and I just want to tell you ${data.msg}.`)
//     };


    return( 
        <>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSTwE6u7JIAK8Sae78vV9_opQgOToOFf88Q8_W0vvso4W--g/viewform?embedded=true" width="640" height="813" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
{/*                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your full name" 
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"
                                    required 
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone number
                                </label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent} 
                                    placeholder="Enter your phone number" 
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message 
                                </label>
                                <textarea 
                                    class="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    required>
                                </textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>*/}
                    </div>
                </div>
            </div> 
        </>
    );   
};

export default Contact;