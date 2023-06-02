import Image from 'next/image'

const Slider = ({ partners }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='slider '>
        <div className='slide-track'>
          {partners.map((partners) => (
            <div className='slide' key={partners.id}>
              <img src={partners?.page_cover} height='100' width='250' alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
