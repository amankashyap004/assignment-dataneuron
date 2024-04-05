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
    <div className="h-screen lg:h-[150dvh]">
      <ResizablePanelGroup
        direction="vertical"
        className="w-full h-full p-2 lg:p-8"
      >
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={45}>
              <div className="flex justify-center items-center p-4 border h-full">
                <FirtsComponent />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={55}>
              <div className="flex justify-center items-center p-4 border h-full">
                <SecondComponent />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex justify-center items-start border h-full overflow-scroll no-scrollbar lg:pt-10 p-4 ps-20 lg:ps-0">
            <ThirdComponent />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default HomePage;
