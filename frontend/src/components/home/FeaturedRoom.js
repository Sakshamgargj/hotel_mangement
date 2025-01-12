"use client";
import { useState } from "react";
// import { Pannellum } from "pannellum-react";

const FeaturedRoom = () => {
    const [currentScene, setCurrentScene] = useState("/images/pannellum/room3.jpg");

    const toggleScene = (nextScene) => {
        setCurrentScene(nextScene);
    };

    return (
        <div className="h-auto w-full p-10 flex items-center justify-center bg-black to-black/10">
            {/* <Pannellum
                width="100%"
                height="100%"
                image={currentScene}
                yaw={300}
                hfov={110}
                autoLoad
                autoRotate={-5}
                compass
                showZoomCtrl={false}
                mouseZoom={false}
                onLoad={() => console.log("Panorama loaded")}
            >
                <Pannellum.Hotspot
                    type="custom"
                    pitch={-10}
                    yaw={-120}
                    handleClick={() => toggleScene(currentScene === "/images/pannellum/room3.jpg" ? "/images/pannellum/room2.jpg" : "/images/pannellum/room3.jpg")}
                />
                <Pannellum.Hotspot
                    type="custom"
                    pitch={-10}
                    yaw={-20}
                    handleClick={() => toggleScene(currentScene === "/images/pannellum/room2.jpg" ? "/images/pannellum/room1.jpg" : "/images/pannellum/room2.jpg")}
                />
            </Pannellum> */}
        </div>
    );
};

export default FeaturedRoom;
