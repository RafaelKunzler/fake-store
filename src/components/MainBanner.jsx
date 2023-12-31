/* eslint-disable react/prop-types */

const MainBanner = (props) => {
  return (
    <div className='w-full bg-main-banner bg-cover p-20 text-center'>
        <h1 className='font-bold text-5xl text-white'>
            {props.text}
        </h1>
    </div>
  )
}

export default MainBanner