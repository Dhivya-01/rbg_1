'use client';

import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@/components/ui/progressive-carousel';

const items = [
  {
    img: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976847/upload_not_edited_fgus4l.svg",
    title: 'Upload',
    desc: 'Upload any format: text, scanned PDFs, images, or audio files through our secure platform.',
    sliderName: 'Upload',
  },
  {
    img: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg",
    title: 'Preprocessing',
    desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
    sliderName: 'Preprocessing',
  },
  {
    img: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg",
    title: 'Transcription',
    desc: 'Files such as images or audio are converted into machine-readable text using advanced AI technology.',
    sliderName: 'Transcription',
  },
  {
    img: "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg",
    title: 'Extraction',
    sliderName: 'Extraction',
    desc: 'Large Language Models extract key data points and generate structured JSON output with precision.',
  },
];
export default function Progress() {
  return (
    <main className="max-w-4xl px-10 mx-auto">
      <ProgressSlider vertical={false} activeSlider='bridge'>
        <SliderContent>
          {items.map((item, index) => (
            <SliderWrapper key={index} value={item?.sliderName}>
              <img
                className='rounded-xl 2xl:h-[500px] h-[450px] object-cover'
                src={item.img}
                width={1900}
                height={1080}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className='absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4  rounded-md'>
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className='text-left cursor-pointer p-3 border-r'
              progressBarClass='dark:bg-black bg-white h-full'
            >
              <h2 className='relative px-4 rounded-full w-fit dark:bg-white dark:text-black text-white bg-gray-900 mb-2'>
                {item.title}
              </h2>
              <p className='text-sm font-medium  line-clamp-2'>{item.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </main>
  );
}
