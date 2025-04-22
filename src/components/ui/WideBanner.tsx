import { Link } from 'react-router-dom';

interface WideBannerProps {
  imageSrc: string;
  altText: string;
  link?: string;
}

const WideBanner = ({ imageSrc, altText, link }: WideBannerProps) => {
  const bannerContent = (
    <div className="relative w-full overflow-hidden group shadow-lg">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block w-full shadow-lg">
        {bannerContent}
      </Link>
    );
  }

  return bannerContent;
};

export default WideBanner;
