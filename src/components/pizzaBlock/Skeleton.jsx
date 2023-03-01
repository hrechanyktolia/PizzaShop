import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={320}
        height={500}
        viewBox="0 0 320 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="146" cy="102" r="99" />
        <rect x="10" y="215" rx="8" ry="8" width="275" height="35" />
        <rect x="10" y="293" rx="8" ry="8" width="260" height="15" />
        <rect x="10" y="317" rx="8" ry="8" width="120" height="15" />
        <rect x="10" y="267" rx="8" ry="8" width="260" height="15" />
        <rect x="10" y="352" rx="8" ry="8" width="290" height="47" />
        <rect x="28" y="421" rx="8" ry="8" width="75" height="31" />
        <rect x="154" y="414" rx="8" ry="8" width="120" height="45" />
    </ContentLoader>
)

export default Skeleton;