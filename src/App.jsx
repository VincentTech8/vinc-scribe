import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FileDisplay from "./components/FileDisplay";
import Homepage from "./components/HomePage";


function App() {
  // Check for an uploaded file 
  const [file, setFile] = useState(null);
  // Check for a live recording
  const [audioStream, setAudioStream] = useState(null);

  const isAudioAvailable = file || audioStream;

  function handleAudioReset() {
    setFile(null)
    setAudioStream(null)
  };

  return (
    <div className="flex flex-col">
      <section className="container mx-auto flex flex-col min-h-screen w-full max-w-[1000px]">
        <Header />
        {/* Conditions start here! */}
        {isAudioAvailable ? (
          <FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset} />
        ) : (
          <Homepage setFile={setFile} setAudioStream={setAudioStream} />
        )}
      </section>
      <Footer />
    </div>
  )
};

export default App;
