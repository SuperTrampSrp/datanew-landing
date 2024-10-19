'use client';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { BiSolidCircleHalf } from "react-icons/bi";
import { FaSquareFull, FaStarHalf } from "react-icons/fa";
import { TbDevicesPc } from "react-icons/tb";
import { IoMdCloudUpload } from "react-icons/io";
import { BsDatabaseFillLock } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiSolidCircleThreeQuarter } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdFileCopy } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { animate, delay, motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVarients = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
    }
}

const FirstPage = () => {
    return (
        <div className="flex flex-col px-44">
            <nav className="flex items-center animate-fade-up">
                <div className="w-6/12">
                    <span className="font-bold uppercase text-xl text-blue-700 ml-16">data</span><span className="font-bold uppercase text-xl text-red-600">new</span>
                </div>
                <div className="flex gap-10 items-center">
                    <ul className="flex gap-10 font-bold text-gray-600">
                        <li>About US</li>
                        <li>Service</li>
                        <li>Package</li>
                        <li>Help</li>
                    </ul>
                    <div className="text-blue-600 text-2xl">
                        <GiHamburgerMenu />
                    </div>
                    <div className="text-yellow-400 text-9xl">
                        <CgMenuGridO />
                    </div>
                </div>
            </nav>
            <section className="flex flex-col animate-fade-up">
                <div className="text-3xl text-blue-600 font-extrabold animate-bounce">
                    <BiSolidCircleThreeQuarter size={50} />
                </div>
                <div className="flex flex-col justify-center">
                    <div className=" flex justify-center font-extrabold text-5xl text-gray-600 text-center tracking-wide">
                        <span className="flex">Manag<span className="rotate-180 origin-top mt-12 text-blue-600 mr-3"><BiSolidCircleThreeQuarter size={33} /> </span> your d<span className="text-orange-600 mt-3"><BiSolidCircleThreeQuarter size={33} /></span>ta , anytime </span>
                    </div>
                    <div className=" flex justify-center font-extrabold text-5xl text-gray-600 text-center tracking-wide -m-7">
                        <span className="flex">and anywher<span className="rotate-180 origin-top mt-12 text-blue-600 mr-3"><BiSolidCircleThreeQuarter size={33} /></span></span>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-9 py-3 bg-blue-600 mt-10 text-white font-bold border border-none rounded-xl animate-jump-in">Download Now</button>
                    </div>
                </div>
                <div className="text-yellow-400 ml-60 animate-bounce">
                    <GoDotFill size={40} />
                </div>
                <div className="text-yellow-400 float-end flex justify-end mr-60 animate-bounce">
                    <GoDotFill size={40} />
                </div>
                <div className="text-green-400 float-end flex justify-end mr-20">
                    <span className="-rotate-90 animate-bounce">
                        <BiSolidCircleHalf size={60} />
                    </span>
                </div>
                <div className="absolute mt-[500px] ml-[1000px] animate-spin text-pink-500">
                    <AiOutlineLoading3Quarters size={40} />
                </div>
                <div className="absolute mt-[400px] ml-[200px] text-green-500 animate-bounce">
                    <FaSquareFull size={40} />
                </div>
                <div className="flex justify-center ">
                    <div className="flex flex-col justify-center bg-slate-200 border border-none rounded-3xl p-10 w-4/12 relative">
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <div className="text-blue-600">
                                    <GiHamburgerMenu size={38} />
                                </div>
                                <Image
                                    height={40}
                                    width={40}
                                    src='/first.jpg'
                                    className="outline rounded-full"
                                />
                            </div>
                            <span className="text-gray-500 font-bold mt-8 text-xl">Hello,</span>
                            <span className="font-bold mt-2 text-xl">Ms. Angelly Docken</span>
                        </div>
                        <div className="flex justify-between absolute">
                            <motion.div
                                initial="initial"
                                transition={{ duration: 1, delay: 1 }}
                                variants={fadeInAnimationVarients}
                                whileInView='animate'
                                className="bg-white p-5 rounded-2xl -ml-36 w-72">
                                <div className="flex justify-between h-10">
                                    <Image
                                        height={40}
                                        width={40}
                                        src='/Google.png'
                                        className=""
                                    />
                                    <Image
                                        height={40}
                                        width={40}
                                        src='/first.jpg'
                                        className="outline rounded-full"
                                    />
                                </div>
                                <div>
                                    <span className="text-gray-600 font-medium">Drive Storage</span>
                                    <div className="flex justify-between px-2 text-gray-600 mt-3">
                                        <span>20 GB</span>
                                        <span>100 GB</span>
                                    </div>
                                    <div className="w-full flex">
                                        <div className="w-2/6 bg-green-500 text-transparent  rounded-l-full">1</div>
                                        <div className="w-full bg-slate-200 text-transparent  rounded-r-full ">1</div>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <div className=" items-center flex flex-col">
                                        <div className="bg-blue-600 p-3 border border-none rounded-xl items-center flex text-white"><MdFileCopy size={30} /></div>
                                        <span className="text-gray-500 font-semibold">My Drive</span>
                                    </div>
                                    <div className=" items-center flex flex-col">
                                        <div className="bg-blue-600 p-3 border border-none rounded-xl items-center flex text-white"><FiClock size={30} /></div>
                                        <span className="text-gray-500 font-semibold">Recent</span>
                                    </div>
                                    <div className=" items-center flex flex-col">
                                        <div className="bg-blue-600 p-3 border border-none rounded-xl items-center flex text-white"><FaRegTrashAlt size={30} /></div>
                                        <span className="text-gray-500 font-semibold">Trash</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="initial"
                                transition={{ duration: 1, delay: 1 }}
                                variants={fadeInAnimationVarients}
                                whileInView='animate'
                                className="bg-blue-600 text-white p-5 rounded-2xl ml-10 -mb-10 mt-10 w-72">
                                <div className="flex justify-between">
                                    <IoMdCloudUpload size={40} />
                                    <Image
                                        height={40}
                                        width={40}
                                        src='/first.jpg'
                                        className="outline rounded-full"
                                    />
                                </div>
                                <div>
                                    <span className=" font-medium">Drive Storage</span>
                                    <div className="flex justify-between px-2 mt-3">
                                        <span>20 GB</span>
                                        <span>100 GB</span>
                                    </div>
                                    <div className="w-full flex">
                                        <div className="w-2/6 bg-green-500 text-transparent  rounded-l-full">1</div>
                                        <div className="w-full bg-slate-200 text-transparent  rounded-r-full ">1</div>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <div className=" items-center flex flex-col">
                                        <div className="bg-blue-50 p-3 border border-none rounded-xl items-center flex text-gray-500"><MdFileCopy size={30} /></div>
                                        <span className="font-semibold">My Drive</span>
                                    </div>
                                    <div className=" items-center flex flex-col">
                                        <div className="bg-blue-50 p-3 border border-none rounded-xl items-center flex text-gray-500"><FiClock size={30} /></div>
                                        <span className="text-gray-50 font-semibold">Recent</span>
                                    </div>
                                    <div className=" items-center flex flex-col">
                                        <div className="bg-blue-50 p-3 border border-none rounded-xl items-center flex text-gray-500"><FaRegTrashAlt size={30} /></div>
                                        <span className="text-gray-50 font-semibold">Trash</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial="initial"
                            transition={{ duration: 1, delay: 1 }}
                            variants={fadeInAnimationVarients}
                            whileInView='animate'
                            className="mt-96 mb-2">
                            <span className="font-bold text-gray-500">Share with me</span>
                            <div className="flex justify-between h-10 mt-3 ">
                                <Image
                                    height={40}
                                    width={40}
                                    src='/second.jpg'
                                    className="outline rounded-full"
                                />
                                <Image
                                    height={40}
                                    width={40}
                                    src='/third.jpg'
                                    className="outline rounded-full"
                                />
                                <Image
                                    height={40}
                                    width={40}
                                    src='/fourth.jpg'
                                    className="outline rounded-full"
                                />
                                <Image
                                    height={40}
                                    width={40}
                                    src='/fifth.jpg'
                                    className="outline rounded-full"
                                />
                                <Image
                                    height={40}
                                    width={40}
                                    src='/sixth.jpg'
                                    className="outline rounded-full"
                                />
                            </div>
                            <div className="flex mt-6 gap-3">
                                <button className="flex items-center bg-white py-2 font-bold text-gray-500 px-5 outline rounded-full outline-none"><span className="text-orange-600"><FaPlus size={30} /></span>New</button>
                                <div className="relative h-10 items-center">
                                    <span className="absolute p-3 text-blue-600"><IoSearch size={30} /></span>
                                    <input type="text" className="outline rounded-full outline-none h-[46px] pl-11 w-48" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="bg-blue-600 -z-20 -mt-64 pt-64">
                    <div className=" text-white absolute -mt-[315px] grid grid-cols-4 ml-10 animate-bounce">
                        <CgMenuGridO size={30} color="#2563eb" />
                        <CgMenuGridO size={30} color="#2563eb" />
                        <CgMenuGridO size={30} color="#2563eb" />
                        <CgMenuGridO size={30} color="#2563eb" />
                        <CgMenuGridO size={30} color="#2563eb" />
                        <CgMenuGridO size={30} color="#2563eb" />
                        <CgMenuGridO size={30} color="#2563eb" />
                        <CgMenuGridO size={30} color="#2563eb" />
                        <CgMenuGridO size={30} />
                        <CgMenuGridO size={30} />
                        <CgMenuGridO size={30} />
                        <CgMenuGridO size={30} />
                        <CgMenuGridO size={30} />
                        <CgMenuGridO size={30} />
                        <CgMenuGridO size={30} />
                        <CgMenuGridO size={30} />
                    </div>
                    <div className="text-yellow-400 absolute z-30 ml-[800px] animate-bounce">
                        <GoDotFill size={40} />
                    </div>
                    <div className="text-green-400 absolute z-30 mt-28 ml-[200px] animate-bounce">
                        <GoDotFill size={40} />
                    </div>
                    <div className="text-green-50 absolute z-30 mt-28 ml-[900px] animate-bounce">
                        <BiSolidCircleHalf size={60} />
                    </div>
                    <div className="absolute mt-[500px] ml-[200px] animate-spin text-pink-500">
                        <AiOutlineLoading3Quarters size={80} />
                    </div>
                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate' className="flex mt-56 px-32 text-white font-semibold justify-between mb-10">
                        <div className="px-5 flex flex-col gap-5">
                            <TbDevicesPc size={40} />
                            <span className="font-bold text-xl">One Management</span>
                            <p>All data from multiple storage media platforms will be managed in one mobile app.</p>
                            <span className="text-green-400 flex items-center gap-2">Learn more <GoArrowRight /></span>
                        </div>
                        <div className="px-5 flex flex-col gap-5">
                            <IoMdCloudUpload size={40} />
                            <span className="font-bold text-xl">Connecting Cloud</span>
                            <p>Datanew connects several mainstream storage media in one application for easy management of your data.</p>
                            <span className="text-green-400 flex items-center gap-2">Learn more <GoArrowRight /></span>
                        </div>
                        <div className="px-5 flex flex-col gap-5">
                            <BsDatabaseFillLock size={40} />
                            <span className="font-bold text-xl">Best Security</span>
                            <p>We guarantee your data will be protected by a high security system that we have established.</p>
                            <span className="text-green-400 flex items-center gap-2">Learn more <GoArrowRight /></span>
                        </div>
                        <div className="absolute text-yellow-400 flex justify-end ml-[800px] mt-[300px]">
                            <FaSquareFull size={60} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate'
                        className="flex flex-col justify-center mt-48">

                        <div className="flex justify-center">
                            <span className="font-bold text-5xl text-white">How it works</span>
                        </div>
                        <div className="pb-10">
                            <div className="text-green-500 mb-16 flex ml-52 mt-12 animate-bounce">
                                <FaSquareFull size={60} />
                            </div>
                            <div className=" text-white absolute grid grid-cols-2 ml-96 -mt-28">
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                            </div>
                            <motion.div
                                initial="initial"
                                transition={{ duration: 1, }}
                                variants={fadeInAnimationVarients}
                                whileInView='animate'
                                className="flex justify-end pr-20 ">
                                <div className="max-h-10 max-w-[600px] w-7/12 opacity-85">
                                    <video
                                        height={2}
                                        src="/video.mp4"
                                        className="rounded-2xl"
                                        controls
                                        loop
                                        autoPlay
                                        muted
                                    />
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
                <div className="flex">
                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate'
                        className="w-6/12 -z-30 px-28 pr-44 pb-52 sk text-white font-bold bg-blue-600 flex text-center">
                        <p className="mt-20">We provide easy and fun steps for you, please see our video for more details.</p>
                        <div className="absolute mt-60 text-green-400 animate-bounce">
                            <GoDotFill size={40} />
                        </div>
                    </motion.div>
                    <div className="w-4/12 -z-30 pb-60 -ml-28 rounded-br-3xl -skew-x-12 text-white font-bold bg-blue-600">

                    </div>
                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate'
                        className=" text-white grid grid-cols-2 ml-80 gap-0 mt-28">
                        <CgMenuGridO size={40} color="#2563eb" />
                        <CgMenuGridO size={40} color="#2563eb" />
                        <CgMenuGridO size={40} color="#2563eb" />
                        <CgMenuGridO size={40} color="#2563eb" />
                    </motion.div>
                </div>

                <motion.div
                    initial="initial"
                    transition={{ duration: 1, delay: 1 }}
                    variants={fadeInAnimationVarients}
                    whileInView='animate'
                    className="flex flex-col justify-center mb-96">
                    <span className="text-center pt-20 text-5xl text-gray-500 font-bold">Testimonials</span>
                    <span className="text-gray-500 font-semibold text-center mt-5 text-xl">Include friend and family</span>
                    <div className="mt-24 flex justify-center">
                        <button className="px-10 font-bold text-white py-3 rounded-xl bg-rose-400 animate-wiggle">Share Story</button>
                    </div>
                    <div className="absolute mt-10 ml-56 text-rose-500 animate-bounce">
                        <GoDotFill size={40} />
                    </div>
                    <div className="absolute mt-80 ml-56 text-green-500 animate-bounce">
                        <FaSquareFull size={40} />
                    </div>
                    <div className="absolute mt-[500px] ml-[800px] text-cyan-300 animate-pulse">
                        <GoDotFill size={60} />
                    </div>
                    <div className="absolute mt-[800px] ml-[400px] text-yellow-300 animate-pulse">
                        <GoDotFill size={60} />
                    </div>
                    <div className="absolute mt-[800px] ml-[900px] animate-spin text-green-500">
                        <AiOutlineLoading3Quarters size={40} />
                    </div>

                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate'
                        className="absolute mt-[500px] ml-10">
                        <Image
                            height={200}
                            width={200}
                            src='/second.jpg'
                        />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate'
                        className="absolute mt-[700px] ml-[540px]">
                        <Image
                            height={200}
                            width={200}
                            src='/third.jpg'
                            className="rounded-3xl"
                        />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate'
                        className="absolute mt-[200px] ml-[840px]">
                        <Image
                            height={200}
                            width={200}
                            src='/first.jpg'
                            className="rounded-full"
                        />
                    </motion.div>
                    <div>
                        <Image />
                    </div>

                </motion.div>
                <motion.div
                    initial="initial"
                    transition={{ duration: 1, delay: 1 }}
                    variants={fadeInAnimationVarients}
                    whileInView='animate'
                    className="mt-44 flex flex-col gap-5 justify-center">
                    <span className="text-gray-600 text-5xl text-center font-bold">Download Now</span>
                    <div>
                        <p className="text-gray-600 text-xl text-center font-bold">to get convinience that we provide. we also </p>
                        <p className="text-gray-600 text-xl text-center font-bold"> give you a free trial for 3 months</p>
                    </div>
                    <div className="flex justify-center gap-3 items-center">
                        <button className="bg-zinc-950 text-white flex p-2 rounded-xl gap-1 text-xs pr-3">
                            <FaApple size={45} />
                            <div className="flex flex-col">
                                <span className="text-gray-200">Download on the</span>
                                <span className="text-xl font-bold">App Store</span>
                            </div>
                        </button>
                        <button className="bg-zinc-950 text-white flex p-2 rounded-xl gap-1 text-xs pr-3">
                            <FaGooglePlay size={45} />
                            <div className="flex flex-col">
                                <span className="text-gray-200">Available on the</span>
                                <span className="text-xl font-bold">Google Play</span>
                            </div>
                        </button>
                    </div>
                </motion.div>
                <div className="flex flex-col bg-rose-500 mt-36 text-white">
                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate'
                        className="flex">
                        <div className="flex flex-col w-6/12 mt-20">
                            <div className="absolute text-white grid grid-cols-4 -mt-20 gap-0 ">
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                                <CgMenuGridO size={40} />
                            </div>
                            <div className="flex flex-col justify-center text-center gap-5">
                                <span className="font-bold text-3xl text">DATANEW</span>
                                <p className="font-semibold">easy steps for your data management</p>
                            </div>
                            <div className="absolute mt-10 ml-[500px] text-yellow-300 animate-pulse">
                                <GoDotFill size={40} />
                            </div>
                        </div>
                        <div className="flex justify-between gap-16 mt-20 font-semibold">
                            <ul className="flex flex-col gap-2">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Service</li>
                                <li>Package</li>
                                <li>Help</li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>Contact Us</li>
                                <li>Faq</li>
                                <li>Our Team</li>
                                <li>Terms of use</li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>info@datanew</li>
                                <li>33-6877793</li>
                                <li className="text-transparent">j</li>
                                <li>GPJ Yogyakarta</li>
                                <li>Indonasia</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        transition={{ duration: 1, delay: 1 }}
                        variants={fadeInAnimationVarients}
                        whileInView='animate'
                        className="flex pb-20 pt-20">
                        <div className="flex w-6/12 justify-center gap-5">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaXTwitter />
                            <FaLinkedinIn />
                        </div>
                        <div className="w-3/12 font-semibold">
                            <span>Company 2024 All Rights Reseerved </span>
                        </div>
                        <div className="W-3/12 flex justify-center">
                            <select name="language" id="language" className="bg-rose-500">
                                <option value="en">EN</option>
                                <option value="hin">HIN</option>
                                <option value="tam">TAM</option>
                                <option value="mal">MAL</option>
                            </select>
                        </div>
                        <div className="absolute ml-[1000px] text-green-500">
                            <FaSquareFull size={40} />
                        </div>

                    </motion.div>

                </div>
            </section>
        </div>
    )
}

export default FirstPage