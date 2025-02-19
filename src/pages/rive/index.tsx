import Back from "@/components/Back";
import { Rive, useRive } from "@rive-app/react-canvas";
import { RiveEventType, EventType } from "@rive-app/canvas";
import { useEffect } from "react";

const Page = () => {
  const { rive, RiveComponent } = useRive({
    // src: "delicat_logo.riv",
    src: "character.riv",
    // src: "vehicles.riv",
    autoplay: true,
    automaticallyHandleEvents: true,
    stateMachines: "State Machine 1",
  });
  // const onRiveEventReceived = (riveEvent) => {
  //   const eventData = riveEvent.data;
  //   const eventProperties = eventData.properties;
  //   if (eventData.type === RiveEventType.General) {
  //     console.log("Event name", eventData.name);
  //     // Added relevant metadata from the event
  //     console.log("Rating", eventProperties.rating);
  //     console.log("Message", eventProperties.message);
  //   } else {
  //     console.log("Event name", eventData.name);
  //     // Handle OpenUrl event manually
  //   }
  // };
  // useEffect(() => {
  //   console.log("Event name", EventType.RiveEvent);

  //   if (rive) {
  //     rive.on(EventType.RiveEvent, onRiveEventReceived);
  //   }
  // }, [rive]);
  return (
    <>
      <h2 className="font-bold text-3xl px-2">[RIVE.App]</h2>
      <div className="mt-4">
        <p>這有點複雜Ｑ＿Ｑ</p>
        <p>目前還有點摸不著頭緒</p>
        <a
          className="text-orange-600 underline underline-offset-1"
          href="https://rive.app/"
          target="_blank"
        >
          rive
        </a>
        <div className="w-[80%] h-[600px]">
          <RiveComponent />
          {/* <RiveDemo /> */}
          {/* <Rive src="character.riv" stateMachines="bumpy" /> */}
        </div>
        <Back />
      </div>
    </>
  );
};

export default Page;
