import { ToastContainer } from "react-toastify";
import ModalDetailCar from "./components/modals/modalDetailImage";
import { useModal } from "./context/modal.context";
import ProfileViewAdmin from "./pages/profileViewAdmin";
import Routers from "./routes/index.router";
import { FormProvider, useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import ModalEditeProfile from "./components/modals/modalEditeProfile";
import ModalDeleteProfile from "./components/modals/modalDeleteProfile";

function App() {
  const { openModalImageCar, openModalEditeProfile, openModalDeleteProfile } =
    useModal();
  const methods = useForm();
  return (
    <>
      <div>
        <FormProvider {...methods}>
          <Routers />
          {/* <ProfileViewUser /> */}
          {/* <ProfileViewAdmin /> */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ fontSize: "14px" }}
          />
          {/* Same as */}
        </FormProvider>
      </div>
      {openModalImageCar && <ModalDetailCar />}
      {openModalEditeProfile && <ModalEditeProfile />}
      {openModalDeleteProfile && <ModalDeleteProfile />}
    </>
  );
}

export default App;
