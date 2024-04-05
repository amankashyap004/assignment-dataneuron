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
    <div className="h-[90dvh]">
      <ResizablePanelGroup
        direction="vertical"
        className="w-full h-full"
      >
        <ResizablePanel defaultSize={30}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={45}>
              <div className="flex justify-center items-center p-4 border h-full">
                <FirtsComponent />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={55}>
              <div className="flex justify-center items-center p-4 border h-full overflow-scroll no-scrollbar pt-20 lg:pt-10">
                <SecondComponent />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex justify-center items-start border h-full overflow-scroll no-scrollbar lg:pt-10 p-4 ps-20 lg:ps-0">
            <ThirdComponent />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default HomePage;
