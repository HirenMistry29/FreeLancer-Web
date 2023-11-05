"use client";
import { Provider } from "react-redux";
import { store } from "../../lib/redux/store";
import { ResumeForm } from "../components/ResumeForm/index";
import { Resume } from "../components/Resume/index";
// import Header from "../components/header/header";

const ResumeBuilder =()=> {
  return (
    <div className="mt-[3%]">
     <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gray-50">
        <div className="flex flex-row justify-between">
          <div className="w-[50%]">
            <ResumeForm />
          </div>
          <div className="w-[40%] flex justify-center fixed right-0">
            <div className="">
              <Resume />
            </div>
          </div>
          
        </div>
      </main>
    </Provider>
    </div>
   
  );
}

export default ResumeBuilder;
