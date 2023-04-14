import ModalDetailCar from "./components/modals/modalDetailImage";
import { useModal } from "./context/modal.context";
import Routers from "./routes/index.router";

function App() {
  const { openModalImageCar } = useModal();
  return (
    <>
      <div className="App">
        <Routers />
      </div>
      {openModalImageCar && <ModalDetailCar />}
    </>
  );
}

export default App;
