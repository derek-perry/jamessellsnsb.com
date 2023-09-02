import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ImageGallery from "react-image-gallery";

interface IListingImagesProps {
  address: string,
  images: string[]
}

const ListingImages: FC<IListingImagesProps> = ({ address, images }): JSX.Element => {
  let listingResult: JSX.Element = <></>;
  const galleryImages = [] as Array<{ original: string; thumbnail: string; }>;

  for (const image of images) {
    if (image) {
      galleryImages.push({
        original: image,
        thumbnail: image
      });
    }
  };

  listingResult = (
    <ImageGallery
      items={galleryImages}
      lazyLoad={true}
      showPlayButton={false}
    />
  );

  return (
    listingResult
  );
};

export default ListingImages