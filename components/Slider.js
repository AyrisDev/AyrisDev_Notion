import Image from 'next/image'

const Slider = ({ partners }) => {
  return (
    <div class='slider'>
      <div class='slide-track'>
        {partners.map((projects) => (
          <div class='slide'>
            <Image
              src={projects?.page_cover}
              width={500}
              height={500}
              alt={`${projects.title}`}
              className=' md:h-[200px] w-full h-[150px] rounded-lg shadow-lg object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
