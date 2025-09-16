// import * as React from "react"
// import { cn } from "@/lib/utils"
// import { ChevronRight } from "lucide-react"

// const RetroGrid = ({
//   angle = 65,
//   cellSize = 60,
//   opacity = 0.5,
//   lightLineColor = "gray",
//   darkLineColor = "gray",
// }) => {
//   const gridStyles = {
//     "--grid-angle": `${angle}deg`,
//     "--cell-size": `${cellSize}px`,
//     "--opacity": opacity,
//     "--light-line": lightLineColor,
//     "--dark-line": darkLineColor
//   }

//   return (
//     <div
//       className={cn(
//         "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
//         `opacity-[var(--opacity)]`
//       )}
//      >
//       <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
//         <div
//           className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
//       </div>
//       <div
//         className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
//     </div>
//   );
// }

// const HeroSection = React.forwardRef((
//   {
//     className,
//     title = "Build products for everyone",
//     subtitle = {
//       regular: "Designing your projects faster with ",
//       gradient: "the largest figma UI kit.",
//     },
//     description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
//     ctaText = "Browse courses",
//     ctaHref = "#",
//     bottomImage = {
//       light: "https://farmui.vercel.app/dashboard-light.png",
//       dark: "https://farmui.vercel.app/dashboard.png",
//     },
//     gridOptions,
//     ...props
//   },
//   ref,
// ) => {
//   return (
//     <div className={cn("relative", className)} ref={ref} {...props}>
//       <div
//         className="absolute top-0 z-[0] h-screen w-screen " />
//       <section className="relative max-w-full mx-auto z-1">
//         <RetroGrid {...gridOptions} />
//         <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
//           <div
//             className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
//             <h1
//               className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
//               {title}
//               <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
//             </h1>
//             <h2
//               className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
//               {subtitle.regular}
//               <span
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500 dark:from-red-300 dark:to-orange-200">
//                 {subtitle.gradient}
//               </span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
//               {description}
//             </p>
//             <div
//               className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
//               <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
//                 <span
//                   className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//                 <div
//                   className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
//                   <a
//                     href={ctaHref}
//                     className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-red-400/30 to-transparent dark:from-zinc-300/5 dark:via-red-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-red-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-red-400/30 transition-all sm:w-auto py-4 px-10">
//                     {ctaText}
//                   </a>
//                 </div>
//               </span>
//             </div>
//           </div>
//           {bottomImage && (
//             <div className="mt-32 mx-10 relative z-10">
//               <img
//                 src={bottomImage.light}
//                 className="w-full shadow-lg rounded-lg border border-gray-200 dark:hidden"
//                 alt="Dashboard preview" />
//               <img
//                 src={bottomImage.dark}
//                 className="hidden w-full shadow-lg rounded-lg border border-gray-800 dark:block"
//                 alt="Dashboard preview" />
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// })
// HeroSection.displayName = "HeroSection"

// export { HeroSection }



import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">This is something</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
