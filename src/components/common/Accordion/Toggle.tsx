import { type SVGMotionProps, motion } from "framer-motion"

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} {...props} />
)

interface ToogleProps {
  toggle: () => void
}

const Toggle = ({ toggle }: ToogleProps) => {
  return (
    <button onClick={toggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 pt-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  )
}

export default Toggle
