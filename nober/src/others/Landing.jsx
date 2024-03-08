import React from 'react'
import logo from '../images/wms5.jpg'
import { motion } from 'framer-motion'
import pass from '../images/passport.jpg'
import register from '../images/register.png'
import contributions from '../images/contributions.png'
import membership from '../images/membership.png'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='bg-slate-00 h-screen overflow-y-scroll'>

            <div className=''>
                <nav className='font-bold flex md:justify-end border-bottom shadow-lg text-blue-700 space-x-4 p-4 '>
                    <a className='underline' href="#howtouse">How to Use</a>
                    <a className='underline' href="#developer">About Developer</a>
                    <a className='underline' href="#contacts">Contacts</a>


                </nav>
                <div className='flex items-center space-x-10'>
                    <div className='md:flex space-x-2 w-8/12 pt-7 md:justify-center justify-between items-center'>
                        <motion.div
                            whileHover={{
                                scale: [1, 1.2, 1.2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                            }}
                        ><img
                                src={logo}
                                alt="wms logo"
                                width={200}
                                className='rounded-full'
                            /></motion.div>
                        <div className='text-xl text-center font-bold text-3xl text-blue-700 hover:text-blue-800'>
                            Know Your Welfare Manager!</div>
                    </div>
                    <div className='text-yellow-200 bg-green-400  md:w-1/12 mt-3 text-center hover:green-500 hover:text-white p-2 font-bold rounded-xl'>
                        <Link to='/'>Visit Now</Link></div>
                </div>
                <div
                    className='md:grid md:space-y-0 space-y-8 md:grid-cols-2 gap-2  justify-around mb-4 ml-12 w-9/12 mt-4'>
                    <div></div>
                    <motion.div
                        whileHover={{
                            rotate: 20
                        }}
                        transition={{ duration: 4 }}
                        className='border rounded md:w-[25rem] bg-blue-800 pl-4'>
                        <h1 className='text-yellow-200 font-bold text-xl'>What We Do</h1>
                        <div className='mt-2 text-neutral-200'> We Ease Management of Welfares.</div>
                        <div className='mt-3 mt-2 text-neutral-200'>Centrally Managing Eligible Members List Matters.</div>
                        <div className='mt-3 mt-2 text-neutral-200'>Real Time Update of Contributions Made.</div>
                        <div className='mt-3 mt-2 text-neutral-200'>Automated Payment and Immediate Enlisting.</div>
                        <div className='mt-3 mt-2 text-neutral-200'>We take Pride in managing your funds efficiently.</div>
                    </motion.div>


                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{ scale: 2 }}
                        className='border rounded pl-4 md:w-[25rem] bg-blue-800'>
                        <h1 className='text-yellow-200 font-bold text-xl'>Ultimate Benefits</h1>
                        <div className='mt-3 mt-2 text-neutral-200'>Accountability in Fund Management.</div>
                        <div className='mt-3 mt-2 text-neutral-200'>Efficiency in Participating in Welfare Activities.</div>
                        <div className='mt-3 mt-2 text-neutral-200'>Increasing Trust Between Leadership and Membership.</div>
                        <div className='mt-3 mt-2 text-neutral-200'>Increasing Membership.</div>
                        <div className='mt-3 mt-2 text-neutral-200'>Reaching out to More Members.</div>
                    </motion.div>
                    <div></div>
                </div>
                <div className='bg-green-00 flex justify-center' id='howtouse'>
                    <div className='bg-green-00 w-4/12'>
                        <h1 className='bg-green-00 text-center font-bold text-3xl text-blue-700'>How to use the system</h1>
                        <div className='md:grid space-y-3 grid-cols-2 gap-1 place-content-center p-2 gap-10'>
                            <div className='border p-1 h-[8rem] bg-blue-700'>
                                <div className='text-yellow-200  flex justify-between  mb-4 font-bold'>
                                    <p>step 0</p>
                                    <p className='animate-ping'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    </p>
                                </div>
                                <p className='text-neutral-200'>Login and Register</p>
                            </div>
                            <div></div>
                            <div></div>
    
                            <div className='border p-1 bg-blue-700 h-[8rem]'>
                                <div className='text-yellow-200  flex justify-between  mb-4 font-bold'>
                                    <p>step 1</p>
                                    <p className='animate-ping'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    </p>
                                </div>
                                <p className='text-neutral-200'>Pay Registration Fee</p>
                            </div>
                            <div className='border p-1 bg-blue-700 h-[8rem]'>
                                <div className='text-yellow-200 flex justify-between  mb-4 font-bold'>
                                    <p>step 2</p>
                                    <p className='animate-ping'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    </p>
                                </div>
                                <p className='text-neutral-200'>Contact Admin for member activation</p>
                            </div>
                            <div></div>
                            <div></div>
                            <div className='border p-1 bg-blue-700'>
                                <div className='text-yellow-200 flex justify-between  mb-4 font-bold'>
                                    <p>step 3</p>
                                    <p className='animate-ping'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    </p>
                                </div>
                                <p className='text-neutral-200'>Check to confirm your Registration status in members list</p>
                            </div>
                            <div className='border p-1 bg-blue-700'>
                                <div>
                                    <div className='text-yellow-200 flex justify-between  mb-4 font-bold'>
                                        <p>step 4</p>
                                        <p className='animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        </p>
                                    </div>
                                    <p className='text-neutral-200'>Check Running Contributions to contribute</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className=' mt-4'>
                    <h1 className='text-center font-bold text-2xl  text-blue-700'>Easy Steps in Pictorial</h1>
                    <div className='grid grid-cols-2 pl-7 place-items-center space-y-10 p-2 justify-around'>
                        <div className='border '>
                            <p className='text-blue-700 justify-center  mb-4 font-bold'>Step 1: Register and login to the wms</p>
                            <img src={register} width={400} alt="" />
                        </div>
                        <div></div>
                        <div></div>
                        <div className='border'>
                            <p className='text-blue-700 flex justify-between mb-4 font-bold'>Step 2: Confirm Membership</p>
                            <img src={membership} width={400} alt="" />
                        </div>
                        <div className='border'>
                            <p className='text-blue-700 flex justify-between  mb-4 font-bold'>Step 3: Start Contributing</p>
                            <img src={contributions} width={400} alt="" />
                        </div>

                    </div>

                </div>
                <div className='mt-10' id='developer'>
                    <div className='text-center font-bold text-3xl  text-blue-700'>Hire Me!</div>
                    <div className='bg-slate-700  text-neutral-200 flex justify-center'>
                        <div className='md:flex justify-around w-10/12 border-t'>
                            <div className='borde w-8/12'>
                                <div className='w-10/12 mt-2'><img src={pass} width={100} className='rounded-full' alt="" /></div>
                                <p className='text-neutral-300 font-bold'>Norbert Osiemo</p>
                            </div>
                            <div className='border-l p-1'>
                                <div>
                                    <h1 className='font-bold text-neutral-200 text-lg'>About the Project</h1>
                                    <p className='font-light text-neutral-300'>The Welfare Management System (WMS) addresses the challenges associated
                                        with traditional methods of managing welfare contributions and financial activities within communities.
                                        By streamlining and automating these processes, the WMS fosters transparency, accountability,
                                        and ease of access to welfare-related information. The system's value lies in its ability to empower
                                        communities by providing a transparent platform for contributions, accountable financial management,
                                        and seamless interaction. With plans for future integration of the Mpesa API for automated transactions,
                                        the WMS promises to enhance efficiency and effectiveness in managing welfare activities.</p>
                                    <div className='md:flex justify-around'>
                                        <div>
                                            <h1 className='text-yellow-300'>Timelines</h1>
                                            <p>January, 2024 - February, 2024</p>
                                        </div>
                                        <div>
                                            <h1 className='text-yellow-300'>Technologies Used</h1>
                                            <ul className='list-disc font-italic pl-8'>
                                                <li>Tailwind</li>
                                                <li>React Js</li>
                                                <li>Django</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h1 className='text-yellow-300'>Access Code</h1>
                                            <ul>
                                                <div className='text-neutral-300 hover:text-blue-500 md:text-center rounded hover:underline'><a href='https://github.com/mainanorbert/wms-frontend'>Frontend</a> </div>
                                                <div className='text-neutral-300 hover:text-blue-500 md:text-center rounded hover:underline'>  <a
                                                    target={'_blank'}
                                                    href='https://github.com/mainanorbert/Welfare_Management_System'>Backend</a></div>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-bold text-neutral-200 text-lg'>About Developer</h1>
                                    <p className='font-light text-neutral-00'>
                                        Norbert Osiemo is a fervent advocate of web development, possessing adeptness in various web and software
                                        development technologies. My commitment
                                        to augmenting skill set is exemplified by ongoing pursuit to discover new software
                                        technologies and use them to develop problem solving applications. Holding
                                        a distinguished bachelor's degree (BSc. Mathematics and Computer Science), I aspires to catalyze  transformative
                                        changes on a global scale through the strategic utilization of technology. I have developed at least 3 viable web apps that have improved services and enhanced efficiency. My unwavering objective is
                                        to orchestrate the alignment of technological prowess with business imperatives to
                                        effect operational enhancements in a streamlined and productive manner.
                                    </p>
                                </div>
                                <div>
                                    <h1 className='font-bold text-neutral-200 text-lg'>Skills</h1>
                                    <div className='font-light md:flex justify-between pl-5 text-neutral-00'>
                                        <div>
                                            <h1 className='text-yellow-300'>Programming Languages</h1>
                                            <ul className='list-disc pl-2'>
                                                <li>C</li>
                                                <li>PHP</li>
                                                <li>Python</li>
                                                <li>JavaSript</li>
                                                <li>HTML</li>
                                                <li>CSS</li>

                                            </ul>
                                        </div>
                                        <div>
                                            <h1 className='text-yellow-300'>Frameworks</h1>
                                            <ul className='list-disc pl-6'>
                                                <li>Laravel</li>
                                                <li>Flask</li>
                                                <li>Django</li>
                                                <li>React Js</li>
                                                <li>Tailwind</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h1 className='text-yellow-300'>Databases</h1>
                                            <ul className='list-disc pl-6'>
                                                <li>SQLite</li>
                                                <li>MySQL</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='' id='contacts'>
                                    <h1 className='font-bold text-neutral-200 text-lg'>Contacts</h1>
                                    <div className='md:flex justify-around'>
                                        <div>
                                            <h1 className='text-yellow-300'>Phone</h1>
                                            <p>0799535642</p>
                                        </div>
                                        <div>
                                            <h1 className='text-yellow-300'>Email</h1>
                                            <p>mainanorbert@gmail.com</p>

                                        </div>
                                        <div>
                                            <h1 className='text-yellow-300'>Online Profile</h1>
                                            <div><a href="https://github.com/mainanorbert?tab=repositories" target={'_blank'} >GitHub</a></div>
                                            <div><a href="https://twitter.com/mainanorbert2" target={'_blank'} >Twitter</a></div>
                                            <div><a href="https://www.linkedin.com/in/norbert-osiemo-0256a4144/" target={'_blank'} >LinkedIn</a></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing