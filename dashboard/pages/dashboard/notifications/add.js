import Dashboard from "@/layouts/Dashboard";
import Notifications from "@/components/AddNotification";
export default function Page() {
  return <Notifications/>;
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
