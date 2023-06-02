import Image from 'next/image'

const Slider = ({ partners }) => {
  return (
    <div class='slider'>
      <div class='slide-track'>
        {partners.map((partners) => (
          <div class='slide' key={partners.id}>
            <Image
              src={partners?.page_cover}
              width={500}
              height={500}
              alt={`${partners.title}`}
              className=' md:h-[200px] w-full h-[150px] rounded-lg shadow-lg object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
