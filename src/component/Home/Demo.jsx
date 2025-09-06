import { FeatureCarousel } from "../../components/animated-feature-carousel";


    const images = {
  alt: "Feature screenshot",
  // step1img1: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1740&auto=format&fit=crop",
  // step1img2: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1740&auto=format&fit=crop",
  // step2img1: "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=1740&auto=format&fit=crop",
  // step2img2: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=1740&auto=format&fit=crop",
  // step3img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1740&auto=format&fit=crop",
  // step4img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1740&auto=format&fit=crop",
    step1img1: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756457107/Screenshot_2025-08-29_141403_gprs1s.png",
  step1img2: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756447884/Screenshot_2025-08-29_113216_ck9c8p.png",
  step2img1: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",
  step2img2: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756457107/Screenshot_2025-08-29_141403_gprs1s.png",
  step3img: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756447884/Screenshot_2025-08-29_113216_ck9c8p.png",
  step4img: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",

}


  export default function Demo() {
  return (
    <FeatureCarousel image={images} />
  )
}

