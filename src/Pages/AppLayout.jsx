import Map from "../Components/Map";
import SideBar from "../Components/SideBar";
import User from "../Components/User";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
