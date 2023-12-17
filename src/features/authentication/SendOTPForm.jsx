import { useState } from "react";

const SendOTPForm = () => {
  const [phonenumber, setPhonenumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <div>
          <label htmlFor="phonenumber">شماره موبایل</label>
          <input
          id="phonenumber"
          value={phonenumber}
          onChange={(e)=>setPhonenumber(e.target.value)}
            className="w-full py-3 px- rounded-xl text-secondary-400 border border-gray-100 hover:border-primary-300 focus:outline-none foucs:border-primary-500 
            focus:bg-white
            transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200"
            type="text"
          />
        </div>
        <button className=" bg-primary-900 font-bold px-4 py-1 w-full rounded-xl text-white
        transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-primary-300">ارسال کد تایید </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
