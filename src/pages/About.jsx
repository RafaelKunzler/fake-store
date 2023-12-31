import BackToTopButton from '@/components/BackToTopButton'
import Footer from '@/components/Footer'
import MainBanner from '@/components/MainBanner'



const About = () => {

  

  return (
    <div>
      <MainBanner 
        text = "About" 
      />

      <div className='flex w-full lg:flex-nowrap flex-wrap p-20 gap-10 lg:gap-40'>
        <div className='flex flex-col gap-3' >
          <h1 className='text-2xl font-semibold'>Our Story</h1>
          <p className='text-muted-foreground font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.<br/> <br/>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
        </div>
        <img src="/about-01.jpg" alt="" className='w-96 h-auto hover:scale-110 transition duration-500'/>
      </div>

      <div className='flex w-full lg:flex-nowrap flex-wrap p-20 gap-40'>
        <img src="/about-02.jpg" alt="" className='hidden lg:block w-96 h-auto hover:scale-110 transition duration-500'/>
        <div className='flex flex-col gap-3' >
          <h1 className='text-2xl font-semibold'>Our Mission</h1>
          <p className='text-muted-foreground font-thin'>Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
          <div className='flex flex-col gap-4 border-l-4 pl-8 pt-2 text-muted-foreground'>
            <h3 className='italic'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</h3>
            <p className='text-sm'>- Steve Job’s</p>
          </div>
        </div>
        <img src="/about-02.jpg" alt="" className='block lg:hidden w-96 h-auto'/>

      </div>

      <Footer />

      
      <BackToTopButton />
    </div>
  )
}

export default About