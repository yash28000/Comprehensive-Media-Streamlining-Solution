import { Download, PenTool, Tv, Upload, Video } from "lucide-react";
import { Button } from "../ui/button";
import { RecentUploads } from "../Cards/recent.uploads";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export const MainPageContent = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="w-full grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        <ActionButton
          icon={<Upload size={24} />}
          label="Upload"
          subLabel="from computer"
          color="bg-sky-500"
          link="/upload"
          router={router}
        />
        <ActionButton
          icon={<Download size={24} />}
          label="Import"
          subLabel="from Drive and more"
          color="bg-amber-500"
        />
        <ActionButton
          icon={<PenTool size={24} />}
          label="Create"
          subLabel="new or from template"
          color="bg-blue-500"
        />
        <ActionButton
          icon={<Video size={24} />}
          label="Record"
          subLabel="screen or webcam"
          color="bg-red-500"
        />
        <ActionButton
          icon={<Tv size={24} />}
          label="Host"
          subLabel="event or webinar"
          color="bg-teal-600"
        />
      </div>
      <div className="w-full mt-10">
        <RecentUploads />
      </div>
    </div>
  );
};
const ActionButton = ({
  icon,
  label,
  subLabel,
  color,
  router,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  subLabel: string;
  color: string;
  router?: AppRouterInstance;
  link?: string;
}) => (
  <Button
    variant="outline"
    className="flex items-center gap-4 p-4 justify-start h-auto whitespace-normal md:w-full w-[150px] "
    onClick={() => router && link && router.push(link)}
  >
    <div className={`${color} text-white p-2 rounded-lg `}>{icon}</div>
    <span className="flex flex-col items-start">
      <h3 className="font-semibold">{label}</h3>
      <span className="text-xs text-gray-500 hidden md:block">{subLabel}</span>
    </span>
  </Button>
);
