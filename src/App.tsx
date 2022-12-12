import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <div className="flex p-4 items-center justify-center">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Hello</h1>
      </div>
      <div className="flex-0">
        <ConnectButton />
      </div>
    </div>
  );
}

export default App;
