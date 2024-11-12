import "../styles/home.css";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Home() {
  return (
    <div>
      {/* Project Title Section with Bounce Effect */}
      <div className="project-title bg-red-500 text-white flex flex-col items-center justify-center p-8 h-screen">
        <Bounce>
          <h1 className="text-5xl font-bold">
            Data Encryption Video Converter
          </h1>
          <p className="text-lg mt-4">
            Converting Images and Text to Secure Video Frames
          </p>
        </Bounce>
      </div>

      {/* Project Importance Section with Slide Effect */}
      <Slide direction="left">
        <div className="project-importance bg-white text-red-500 flex flex-col items-center justify-center p-12 h-screen">
          <h2 className="text-4xl font-semibold">
            Why is this Project Important?
          </h2>
          <p className="text-md mt-4 max-w-2xl text-center">
            In a world where data security is crucial, this project provides a
            unique approach to ensure your files remain confidential and secure.
            By encrypting files into video frames, the data becomes obscured and
            difficult to intercept.
          </p>
        </div>
      </Slide>

      {/* Process Section with Zoom Effect */}
      <Zoom>
        <div className="process bg-red-500 text-white flex flex-col items-center justify-center p-12 h-screen">
          <h2 className="text-4xl font-semibold">How Does the Process Work?</h2>
          <ol className="list-decimal text-md mt-4 max-w-3xl">
            <li>1. Input an image or text file into the app.</li>
            <li>
              2. The file is encrypted and converted to a binary representation.
            </li>
            <li>
              3. Binary data is segmented into frames, creating a video file.
            </li>
            <li>
              4. The process can be reversed to retrieve the original file from
              the video.
            </li>
          </ol>
        </div>
      </Zoom>

      {/* Data Safety Section with Slide Effect */}
      <Slide direction="right">
        <div className="data-safety bg-white text-red-500 flex flex-col items-center justify-center p-12 h-screen">
          <h2 className="text-4xl font-semibold">
            How is Your Data Kept Safe?
          </h2>
          <p className="text-md mt-4 max-w-2xl text-center">
            Our encryption ensures that even if the video file is intercepted,
            it is practically impossible to extract meaningful data without the
            decryption key. By integrating cutting-edge cryptographic
            techniques, your data remains secure at all stages.
          </p>
        </div>
      </Slide>

      <Zoom>
        <h1 className="flex flex-col items-center text-4xl font-bold">Convertion Steps</h1>
        {/* Vertical Timelines for Encryption and Decryption */}
        <div className="flex flex-col md:flex-row justify-around items-center p-12">
          {/* Encryption Timeline */}
          <div className="encryption-timeline md:w-1/2">
            <h2 className="text-4xl font-semibold text-center mb-6">
              Encryption Process
            </h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Step 1"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Original File Input
                </h3>
                <p>Input the file to be encrypted.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Step 2"
                contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">Encryption</h3>
                <p>The file is encrypted into a secure format.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Step 3"
                contentStyle={{ background: "rgb(76, 175, 80)", color: "#fff" }}
                iconStyle={{ background: "rgb(76, 175, 80)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Video Convertion
                </h3>
                <p>The encrypted data is converted into secure video format.</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>

          {/* Decryption Timeline */}
          <div className="decryption-timeline md:w-1/2 mt-12 md:mt-0">
            <h2 className="text-4xl font-semibold text-center mb-6">
              Decryption Process
            </h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Step 1"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Secure Video Input
                </h3>
                <p>Input the encrypted video file.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Step 2"
                contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">Decryption</h3>
                <p>
                  The encrypted data is decrypted back into the original format.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Step 3"
                contentStyle={{ background: "rgb(76, 175, 80)", color: "#fff" }}
                iconStyle={{ background: "rgb(76, 175, 80)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Original File Access
                </h3>
                <p>Access the original file from the decrypted data.</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Home;
