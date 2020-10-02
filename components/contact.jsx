import React, { useState } from "react";
import Head from "next/head";

import fetch from "node-fetch";

const Contact = ({ section }) => {
  const [ contact, setContact ] = useState(null);
  const [ message, setMessage ] = useState(null);

  const [ status, setStatus ] = useState(null);

  return (
    <form className="mt-8">
      <input 
        className="col-span-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-10 mb-4" 
        type="text" 
        placeholder="If you want, you can provide any kind of contact that allows me to reach you!" 
        onChange={ event => setContact(event.target.value) }
      />
      
      <textarea 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-24 mb-6" 
        placeholder="A job offer? An idea for a collaboration? A Feed-Back on one of my works? Let me know right away!"
        onChange={ event => setMessage(event.target.value) }
      />

      { status == null &&
        <button 
          className="w-64 shadow bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none font-semibold h-10"

          disabled={!(contact && message)}

          onClick={ async function(event) {
            event.preventDefault();

            const request = await fetch("/api/messages", {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                contact: contact,
                message: message
              })
            });
            
            setStatus(request.status == 200);

            setContact(null); setMessage(null);

            window.setTimeout(() => setStatus(null), 10000);
          }}
        >
          Contact me now 🌎
        </button>
      }

      { status == true &&
        <button className="w-64 shadow bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none font-semibold h-10">
          Message sent! ✔
        </button>
      }

      { status == false &&
        <button className="w-64 shadow bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none font-semibold h-10">
          Try again later... ❌
        </button>
      }
    </form> 
  );
}

export default Contact;