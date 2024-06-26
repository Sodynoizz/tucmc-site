import { BackgroundNames, StickerNames } from "@map/tucmcWork"
import { ChevronDownIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { DownloadIcon } from "@heroicons/react/solid"
import { BackgroundImageType } from "./types"
import { BackgroundImage, StickerImage } from "./Elements"

const PNGGiveaway = ({ stickerImgPaths }: { stickerImgPaths: Record<string, { name: string; path: string }[]> }) => {
  const [show, setShow] = useState(true)

  function downloadFile(imgCategoryPath: string) {
    // @ts-ignore
    if (typeof window !== "undefined" && window.gtag) {
      // @ts-ignore
      window.gtag("event", "download_all_stickers")
    }

    const a = document.createElement("a")
    // a.href = `/api/stickers/${imgCategoryPath}`
    a.href = `/assets/images/work/stickers/${imgCategoryPath}.zip`
    a.download = `TUCMC-stickers`
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <>
      <div className="flex items-end justify-between">
        <div className="mt-6">
          <h2 className="text-lg font-light text-TUCMC-gray-700">แจก PNG Sticker</h2>
        </div>

        <motion.button
          variants={{
            show: {
              rotate: 0,
            },
            hide: {
              rotate: 180,
            },
          }}
          animate={show ? "show" : "hide"}
          onClick={() => setShow(!show)}
        >
          <ChevronDownIcon className="h-6 w-6 text-TUCMC-gray-500" />
        </motion.button>
      </div>

      <hr className="mt-4 text-TUCMC-gray-600" />

      <AnimatePresence>
        {show && (
          <motion.section
            initial={{
              opacity: 0,
              height: "0",
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: "0",
            }}
            className="my-4"
          >
            {Object.keys(stickerImgPaths).map((imgArr) => {
              return (
                <article className="mt-8 mb-16" key={imgArr}>
                  <div className="mb-6 flex flex-col justify-center gap-2 sm:flex-row sm:items-center sm:justify-start sm:gap-6">
                    <h3 className="text-lg font-light text-TUCMC-gray-600">{StickerNames[imgArr]}</h3>
                    <button
                      onClick={() => downloadFile(imgArr)}
                      className="flex items-center justify-center gap-1 rounded-md bg-TUCMC-pink-500 px-6 py-2 text-white transition-colors hover:bg-TUCMC-pink-600"
                    >
                      <DownloadIcon className="h-5 w-5" />
                      Download All
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                    {stickerImgPaths[imgArr].map((img) => {
                      return <StickerImage key={img.path} src={img.path} name={img.name} />
                    })}
                  </div>
                </article>
              )
            })}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

const BGGiveaway = ({ backgroundImgPaths }: { backgroundImgPaths: Record<string, BackgroundImageType[]> }) => {
  const [show, setShow] = useState(true)

  return (
    <>
      <div className="flex items-end justify-between">
        <h2 className="mt-6 text-lg font-light text-TUCMC-gray-700">แจก Wallpaper/Background</h2>

        <motion.button
          variants={{
            show: {
              rotate: 0,
            },
            hide: {
              rotate: 180,
            },
          }}
          animate={show ? "show" : "hide"}
          onClick={() => setShow(!show)}
        >
          <ChevronDownIcon className="h-6 w-6 text-TUCMC-gray-500" />
        </motion.button>
      </div>

      <hr className="mt-8 text-TUCMC-gray-600" />

      <AnimatePresence>
        {show && (
          <motion.section
            initial={{
              opacity: 0,
              height: "0",
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: "0",
            }}
            className="my-4 flex flex-col"
          >
            {Object.keys(backgroundImgPaths).map((imgArrName) => {
              return (
                <article className="my-4" key={imgArrName}>
                  <div className="mb-6 flex flex-col justify-center gap-2 sm:flex-row sm:items-center sm:justify-start sm:gap-6">
                    <h3 className="text-lg font-light text-TUCMC-gray-600">{BackgroundNames[imgArrName]}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {backgroundImgPaths[imgArrName].map((img) => {
                      return <BackgroundImage key={img[1].path} img={img} />
                    })}
                  </div>
                </article>
              )
            })}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export const GiveawaySection = ({
  stickerImgPaths,
  backgroundImgPaths,
}: {
  stickerImgPaths: Record<string, { name: string; path: string }[]>
  backgroundImgPaths: Record<string, BackgroundImageType[]>
}) => {
  return (
    <>
      <PNGGiveaway stickerImgPaths={stickerImgPaths} />
      <BGGiveaway backgroundImgPaths={backgroundImgPaths} />
    </>
  )
}
