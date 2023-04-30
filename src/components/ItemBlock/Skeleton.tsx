import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 470"
    backgroundColor="#c7c7c7"
    foregroundColor="#b5b5b5"
    {...props}
  >
    <rect x="25" y="0" rx="20" ry="20" width="206" height="260" /> 
    <rect x="25" y="266" rx="5" ry="5" width="206" height="40" /> 
    <rect x="0" y="316" rx="5" ry="5" width="260" height="88" /> 
    <rect x="0" y="423" rx="5" ry="5" width="95" height="27" /> 
    <rect x="135" y="415" rx="5" ry="5" width="124" height="41" />
  </ContentLoader>
)

export default Skeleton