import Image from "next/image";

interface ProjectAvatarProps {
  name: string;
  image?: string;
  className?: string;
}

const ProjectAvatar = ({ name, image, className }: ProjectAvatarProps) => {
  return (
    <div
      className={`overflow-hidden border border-gray-300 ${className} rounded-md`} // rounded-md = subtle corner radius
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          width={32} // matches w-8
          height={32}
          className="object-cover"
        />
      ) : (
        <div className="bg-gray-300 flex items-center justify-center w-full h-full text-xs font-bold">
          {name.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default ProjectAvatar;
