import Logo from '../assets/PNG/logo.png';
import VerifyImg from "../assets/PNG/envilope.png";
import { Link } from 'react-router-dom';



const VerificationMail = () => {
  return (
    <div className='text-center md:px-[350px] md:py-[112px] bg-slate-100 pt-10 bg-[#EEF2FF]  text-center items-center justify-center'>
        <div className="w-full text-center items-center justify-center flex">
            <div>
                <img 
                    src={Logo}
                    alt='Logo'
                    className='h-[40px]'
                />
            </div>
            
        </div>
        <div className='w-full bg-white mt-10 pb-20 px-2 text-center items-center justify-center border rounded-xl'>
            <div className='flex justify-center'>
                <img 
                    src={VerifyImg}
                    alt='VerifyImg'
                    className='h-[180px] w-[140px] pt-20'
                />
            </div>
            <p className='text-[25px] font-normal mt-10 '>Hi Folaranmi, your verification link has just been sent to your email address <br /><Link to="/" className="text-primary">(jamessoon@gmail.com)</Link>. Click the link to verify your account.</p>
            <p className='text-[16px] font-normal mt-6'>Didn’t get the mail? <Link to="/" className="text-primary">Click to resend</Link></p>
        </div>
    </div>
  )
}

export default VerificationMail