import Navbar from './navbar'
import Footer from './footer'
import { useRouter } from 'next/router';
import { motion } from "framer-motion"

export default function Layout({ children }) {
  
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
        <Navbar />      
            <motion.main
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                className="relative w-11/12 flex-grow sm:max-w-[686px]"
                >
                {children}
            </motion.main>
        <Footer />
    </div>
  )
}