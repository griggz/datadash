import React from "react";
import BaseLayout from "../../components/prebuilt/BaseLayout";
import { withRouter } from "next/router";

import RegionalAnalysis from "../../components/views/regional_analysis/RegionalAnalysis";

function RegionalAnalysisPage() {
  return (
    <BaseLayout>
      <RegionalAnalysis />
    </BaseLayout>
  );
}

export default withRouter(RegionalAnalysisPage);
