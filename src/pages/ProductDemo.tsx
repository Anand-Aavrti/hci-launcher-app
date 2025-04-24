import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";

const productMap = {
  whiteboard: {
    name: "Whiteboard",
    description:
      "Interactive digital whiteboard for patient info, care plans & team collaboration.",
    image: "/src/media/whiteboard.png",
    docsUrl: "https://hci-tv.gitbook.io/patientbord-documentation/",
  },
  webusb: {
    name: "Web USB",
    description: "Secure USB access for healthcare professionals.",
    image: "/src/media/USB.png",
    docsUrl: "https://hci-tv.gitbook.io/unit-status-board-documentation/ ",
  },
  wallmate: {
    name: "WallMate",
    description: "Smart room control for patients to manage their environment.",
    image: "/src/media/wallMate.png",
    docsUrl: "https://hci-tv.gitbook.io/wallmate-documentation",
  },
  evs: {
    name: "EVS",
    description:
      "Housekeeping & maintenance tracking for hospital environments.",
    image: "/src/media/EVS.png",
    docsUrl: "https://docs.hci.gitbook.io/evs",
  },
  handheldusb: {
    name: "Handheld USB",
    description: "Mobile solution for clinicians to access data anywhere.",
    image: "/src/media/handheldUSB.png",
    docsUrl: "https://docs.hci.gitbook.io/handheld-usb",
  },
  lobbyapp: {
    name: "Patient Lobby App",
    description: "Digital check-in & waiting room experience for patients.",
    image: "/demo-images/lobbyapp.jpg",
    docsUrl: "https://docs.hci.gitbook.io/lobby-app",
  },
  launchertv: {
    name: "Launcher TV",
    description:
      "Education & entertainment platform for in-room patient engagement.",
    image: "/src/media/publisher-TV.png",
    docsUrl: "https://hci-tv.gitbook.io/samsung-tv-launcher/",
  },
  discharge: {
    name: "Discharge Records",
    description: "Streamlined discharge process for staff & patients.",
    image: "/src/media/dischargeRecords.png",
    docsUrl: "https://hci-tv.gitbook.io/hci-discharge-records-documentation",
  },
};

const ProductDemo = () => {
  const { demoId } = useParams();
  const navigate = useNavigate();

  const demo = productMap[demoId ?? ""] || null;

  if (!demo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-hci-navy mb-4">
            Product Not Found
          </h2>
          <Button
            onClick={() => navigate("/")}
            className="bg-hci-blue text-white"
          >
            Back to Launcher
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-hci-blue/5 via-white to-gray-50 flex flex-col items-center">
      <header className="w-full bg-hci-navy">
        <div className="max-w-4xl mx-auto flex items-center px-4 py-3 md:py-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white mr-2 md:mr-3 hover:bg-hci-blue/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft />
          </Button>
          <span className="text-lg md:text-xl text-white font-semibold">
            {demo.name}
          </span>
        </div>
      </header>
      <main className="flex-grow w-full flex flex-col items-center px-4 mb-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl mt-6 md:mt-10 mb-4 md:mb-8 overflow-hidden animate-fade-in">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={demo.image}
              alt={demo.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-6 md:p-8 w-full flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-hci-navy mb-3">
              {demo.name}
            </h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              {demo.description}
            </p>
            <Button
              onClick={() => window.open(demo.docsUrl, "_blank")}
              className="bg-hci-blue hover:bg-hci-blue/90 text-white w-full sm:w-48"
              size="lg"
            >
              <BookOpen className="h-5 w-5 mr-2" /> Know More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDemo;
