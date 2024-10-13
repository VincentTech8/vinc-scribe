import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import FileDisplay from "./components/FileDisplay";


function App() {
  // Check for a file (upload)
  const [file, setFile] = useState(null);
  // Check for a live recording
  const [audioStream, setAudioStream] = useState(null);

  const isAudioAvailable = file || audioStream;

  return (
    <div className="flex flex-col">
      <section className="container mx-auto flex flex-col min-h-screen w-full max-w-[1000px]">
        <Header />
        {/* Conditions start here! */}
        {isAudioAvailable ? (
          <FileDisplay />
        ) : (
          <Homepage setFile={setFile} setAudioStream={setAudioStream} />
        )}
      </section>
      <Footer />
    </div>
  )
};

export default App;
