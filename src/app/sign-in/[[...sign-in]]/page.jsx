import { SignIn } from "@clerk/nextjs";

export default function SignInPage(){
    return (
        <div className="w-full h-[47rem] flex justify-center items-center bg-gray-100">
            <SignIn /> 
        </div>
    )
}