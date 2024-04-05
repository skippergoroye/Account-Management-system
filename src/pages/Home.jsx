import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import DocumentImg from '../assets/PNG/documents.png';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col justify-center items-center'>
      <Navbar />
      <div className='text-center pt-[80px]'>
        <h1 className='text-[68px] font-bold line-[67px]'>Unlock <span className='text-[#C4B5FD]'>Efficiency</span>.</h1>
        <h5 className='text-[38.32px]'>Seamlessly Manage your Accounts Today!</h5>
        <div className='flex flex-col items-center'>
          <div className='flex gap-6'>
            <Link to="/" className='bg-[#F9FAFB] border-2 border-[#CBD5E1] text-[16px] py-2 px-8 rounded-lg text-black'>Learn More</Link>
            <Link to="/" className='bg-[#374151] py-2 px-8 rounded-lg text-[16px] text-white'>Get Started</Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <img 
            src={DocumentImg}
            alt="Documents"
            width={350}
            height={50}
          />
        </div>
      </div>
      <div className="pt-4">
      <Footer/>
      </div>
    </div>
  )
}

export default Home;
