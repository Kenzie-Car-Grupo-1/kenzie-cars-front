import ModalDetailCar from "./components/modals/modalDetailImage";
import { useModal } from "./context/modal.context";
import ProfileViewUser from "./pages/profileViewUser";
import Routers from "./routes/index.router";

function App() {
  const { openModalImageCar } = useModal();
  return (
    <>
      <div className="App">
        <Routers />
        {/* <ProfileViewUser /> */}
      </div>
      {openModalImageCar && <ModalDetailCar />}
    </>
  );
}

export default App;
