import FirtsComponent from "./FirtsComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";

const HomePage = () => {
  return (
    <div className="h-[150dvh]">
      <ResizablePanelGroup direction="vertical" className="w-full h-full p-8">
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={30}>
              <div className="flex justify-center items-center p-4 border h-full">
                <FirtsComponent />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={70}>
              <div className="flex justify-center items-center p-4 border h-full">
                <SecondComponent />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex justify-center items-center p-4 border h-full">
            <ThirdComponent />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default HomePage;
