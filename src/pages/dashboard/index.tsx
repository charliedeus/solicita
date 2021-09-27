import MyDashboardLayout from "../../layouts/MyDashboardLayout";
import PageHeader from "../../components/PageHeader";

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard" />
    </>
  );
}

Dashboard.layout = MyDashboardLayout;
