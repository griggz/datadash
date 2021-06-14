import React from "react";
import BaseLayout from "../../components/prebuilt/BaseLayout";
import DataCompare from "../../components/views/data_comparison_tool/DataCompare";
import { withRouter } from "next/router";

function DataComparePage() {
  return (
    <BaseLayout>
      <DataCompare />
    </BaseLayout>
  );
}

export default withRouter(DataComparePage);
