import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
      <div className='body-dash'>
          <div className="main-content">
              <div className="welcome">Welcome, Poramat Chianvichai</div>
              <div className="menu">
                  <div className="exper">
                      <div className="logo-1">
                          <img src="/qwanta-gui.png" alt="Create qwanta with gui" />
                      </div>
                      <div className="head-1">
                          Graphically build quantum network with 
                          <h1>Qwanta experiment</h1>
                      </div>
                      
                      <Link href="Experiment">
                        <motion.button className='bg-gradient-to-r from-violet-500 to-fuchsia-500' whileHover={{ scale:1.1}}>
                            Lunch Experiment
                        </motion.button>
                      </Link>

                  </div>
                  <div className="lab">
                      <div className="logo-2">
                          <img src="/qwanta-code.png" alt="" />
                      </div>
                      <div className="head-2">
                          Develop quantum network with
                          <h1>Qwanta Lab</h1>
                      </div>

                      <Link href="/Lab">
                          <motion.button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-5' whileHover={{ scale:1.1 }}>
                            Lunch Lab
                          </motion.button>
                      </Link>

                  </div>
              </div>
              <div className="user-job">

              </div>
          </div>
          <div className="notification">
              <h1>Recent notification</h1>
          </div>
      </div>
  )
}