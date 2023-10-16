import BackToTopButton from '@/components/BackToTopButton'
import Footer from '@/components/Footer'
import MainBanner from '@/components/MainBanner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <MainBanner
        text = "Contact"                     
      />

      <div className='flex border-muted-foreground border justify-between m-20 px-20 py-12'>
        <div className='flex flex-col gap-12 w-1/2'>
          <h1 className='text-3xl font-light text-center'>Send Us A Message</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <Input type="email" placeholder='Your Email Address' />
            <Textarea placeholder="How Can We Help?"/>
            <Button className="w-full" type="submit">Submit</Button>
          </form>
        </div>
        <Separator orientation="vertical"/>
        <div className='flex flex-col justify-between'>
          <div className='flex gap-6'>
            <MapPin />
            <div className='flex flex-col gap-2'>
              <h3>Address</h3>
              <p className='text-muted-foreground'>Fake Store Center 6th floor, 42 Wallaby Way, Sydney</p>
            </div>
          </div>

          <div className='flex gap-6'>
            <Phone />
            <div className='flex flex-col gap-2'>
              <h3>Let's Talk</h3>
              <p className='text-primary'>(12) 3456-7890</p>
            </div>
          </div>

          <div className='flex gap-6'>
            <Mail />
            <div className='flex flex-col gap-2'>
              <h3>Sale Support</h3>
              <p className='text-primary'>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default Contact