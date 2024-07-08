import signupImg from "../assets/Images/signup.webp"
import Template from "../Components/core/Auth/Template"
import { useSelector } from "react-redux";

function Signup() {
  const {loading} = useSelector((state)=>state.auth);
  return (
    loading?(<div className=" h-[100vh] flex justify-center items-center"><div class="custom-loader"></div></div>):(
    <Template
      title="Join the millions learning through mentorship with Monik"
      description1="Get the Mentorship for today, tomorrow, and beyond."
      description2="Mentorship to future-proof your career."
      image={signupImg}
      formType="signup"
    />
    )
  )
}

export default Signup