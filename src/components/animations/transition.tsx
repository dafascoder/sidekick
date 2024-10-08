import * as React from "react"

import type { MotionBoxProps } from "./box"

import { MotionBox } from "./box"

export const PageTransition: React.FC<MotionBoxProps> = (props) => (
  <MotionBox
    initial={{ y: -24, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    {...props}
  />
)
