import { SiteHeader } from "@/components/dashboard/site-header";
import { columns, Exercise } from "./columns";
import { DataTable } from "./data-table";
import { CirclePlusIcon } from "lucide-react";

async function getData(): Promise<Exercise[]> {
  return [
    {
      id: 1,
      name: "Push-Up",
      description:
        "A bodyweight exercise that primarily targets the chest, shoulders, and triceps.",
      video_url: "https://www.youtube.com/watch?v=_l3ySVKYVJ8",
    },
    {
      id: 2,
      name: "Squat",
      description:
        "A lower-body movement that strengthens the legs and glutes.",
      video_url: "https://www.youtube.com/watch?v=aclHkVaku9U",
    },
    {
      id: 3,
      name: "Plank",
      description:
        "An isometric core exercise that improves endurance and posture.",
      video_url: "https://www.youtube.com/watch?v=pSHjTRCQxIw",
    },
    {
      id: 4,
      name: "Deadlift",
      description:
        "A compound lift that targets the posterior chain, including hamstrings, glutes, and back.",
      video_url: "https://www.youtube.com/watch?v=op9kVnSso6Q",
    },
    {
      id: 5,
      name: "Bench Press",
      description:
        "A strength training exercise that focuses on chest, shoulders, and triceps.",
      video_url: "https://www.youtube.com/watch?v=gRVjAtPip0Y",
    },
    {
      id: 6,
      name: "Pull-Up",
      description:
        "A bodyweight exercise that works the upper back and biceps.",
      video_url: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
    },
    {
      id: 7,
      name: "Lunges",
      description:
        "A unilateral leg exercise that improves balance, coordination, and strength.",
      video_url: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
    },
    {
      id: 8,
      name: "Bicep Curl",
      description: "An isolation movement to strengthen the biceps.",
      video_url: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
    },
    {
      id: 9,
      name: "Tricep Dips",
      description: "Targets the triceps using body weight for resistance.",
      video_url: "https://www.youtube.com/watch?v=0326dy_-CzM",
    },
    {
      id: 10,
      name: "Shoulder Press",
      description: "A pressing movement that targets the deltoids and triceps.",
      video_url: "https://www.youtube.com/watch?v=B-aVuyhvLHU",
    },
    {
      id: 11,
      name: "Mountain Climbers",
      description:
        "A cardio move that also strengthens the core and shoulders.",
      video_url: "https://www.youtube.com/watch?v=nmwgirgXLYM",
    },
    {
      id: 12,
      name: "Burpees",
      description:
        "A full-body exercise combining squats, jumps, and push-ups.",
      video_url: "https://www.youtube.com/watch?v=TU8QYVW0gDU",
    },
    {
      id: 13,
      name: "Russian Twists",
      description: "A seated core exercise that targets the obliques.",
      video_url: "https://www.youtube.com/watch?v=wkD8rjkodUI",
    },
    {
      id: 14,
      name: "Jumping Jacks",
      description:
        "A basic cardio move that increases heart rate and warms up the body.",
      video_url: "https://www.youtube.com/watch?v=c4DAnQ6DtF8",
    },
    {
      id: 15,
      name: "Leg Raises",
      description:
        "Targets the lower abs by lifting legs while lying on the back.",
      video_url: "https://www.youtube.com/watch?v=l4kQd9eWclE",
    },
    {
      id: 16,
      name: "Wall Sit",
      description:
        "An isometric lower-body exercise that builds endurance in the quads and glutes.",
      video_url: "https://www.youtube.com/watch?v=y-wV4Venusw",
    },
    {
      id: 17,
      name: "High Knees",
      description:
        "A cardio exercise that strengthens legs and core while increasing heart rate.",
      video_url: "https://www.youtube.com/watch?v=8opcQdC-V-U",
    },
    {
      id: 18,
      name: "Superman",
      description:
        "Strengthens the lower back by lifting arms and legs while lying face down.",
      video_url: "https://www.youtube.com/watch?v=z6PJMT2y8GQ",
    },
    {
      id: 19,
      name: "Calf Raises",
      description:
        "Targets the calf muscles by lifting the heels off the ground.",
      video_url: "https://www.youtube.com/watch?v=-M4-G8p8fmc",
    },
    {
      id: 20,
      name: "Glute Bridge",
      description:
        "An effective way to activate and strengthen the glutes and lower back.",
      video_url: "https://www.youtube.com/watch?v=8bbE64NuDTU",
    },
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <SiteHeader
        title={"Exercises"}
        button={{
          url: "dashboard/exercises/add",
          text: "Add exercise",
          icon: CirclePlusIcon,
        }}
      />
      <div className="px-5 py-2">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
