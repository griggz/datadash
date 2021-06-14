import React from "react";
import BaseLayout from "../components/prebuilt/BaseLayout";
import { useRouter, withRouter } from "next/router";
import Dashboard from "../components/views/dashboard/Dashboard"

function DashboardPage() {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <BaseLayout>
      <Dashboard />
    </BaseLayout>
  );
}

export default withRouter(DashboardPage);
