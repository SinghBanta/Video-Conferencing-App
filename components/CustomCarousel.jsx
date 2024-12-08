import { Carousel } from "flowbite-react"
import Image from "next/image"

const CustomCarousel = () => {
  return (
    <Carousel slideInterval={3000}>
        <Image width={200} height={200} src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" alt="..." className="h-96 w-96 border-[3px] rounded-full" />
        <Image width={200} height={200} src="https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg" alt="..." className="h-96 w-96 border-[3px] rounded-full" />
        <Image width={200} height={200} src="https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg" alt="..." className="h-96 w-96 border-[3px] rounded-full" />
      </Carousel>
  )
}

export default CustomCarousel