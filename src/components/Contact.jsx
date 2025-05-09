import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "71f270db-b597-4fa7-b46c-6c8132213bd5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form sub,itted sucessfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <div className='container mx-auto py-2 pt-20 px-6 md:px-20 lg:px-25 w-full overflow-hidden' id='Contact'>
        <div className='text-center flex flex-col items-center'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration under font-light'>With us</span></h1>
            <p className='text-gray-500 max-w-80 mb-8'>Crafting spaces, creating legacies-Explore our portfolio</p>
        </div>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your name 
                    <input className="w-full rounded border-gray-500 border py-3 px-4 mt-2" type="text" placeholder='Your name' name='Name' required/>
                </div>
                <div className='w-full md:w-1/2 text-left'>
                    Your email
                    <input className="w-full rounded border-gray-500 border py-3 px-4 mt-2" type="text" placeholder='Your email' name='Email' required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                Message 
                <textarea className='w-full rounded border-gray-500 border py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
            </div>
        <button className='bg-purple-600 text-white py-2 px-12 mt-4 '>{result ? result : "Send message"}</button>
        </form>
    </div>
  )
}

export default Contact