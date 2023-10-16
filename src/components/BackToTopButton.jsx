import { useEffect, useState } from 'react'

import { Button } from './ui/button'

import { ChevronUp } from 'lucide-react'

const BackToTopButton = () => {
    const [BackToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className=' w-screen'>
        {BackToTopButton && (            
                <Button className='fixed m-4 right-4 bottom-4 p-2 ' onClick={scrollUp}><ChevronUp /></Button>
            
        )}
    </div>
  )
}

export default BackToTopButton