"use client";

import { CldImage as CldImageDefault, CldImageProps } from 'next-cloudinary';

function ImagesNextCloudinary(props: CldImageProps) {
    return <CldImageDefault {...props} />
}

export default ImagesNextCloudinary;