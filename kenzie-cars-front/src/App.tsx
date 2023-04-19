import ModalDetailCar from "./components/modals/modalDetailImage";
import { useModal } from "./context/modal.context";
import ProfileViewAdmin from "./pages/profileViewAdmin";
import Routers from "./routes/index.router";
import { FormProvider, useForm } from "react-hook-form";

function App() {
  const { openModalImageCar } = useModal();
  const methods = useForm();
  return (
    <>
      <div className="App">
        <FormProvider {...methods}>
          <Routers />
          {/* <ProfileViewUser /> */}
          {/* <ProfileViewAdmin /> */}
        </FormProvider>
      </div>
      {openModalImageCar && <ModalDetailCar />}
    </>
  );
}

export default App;
