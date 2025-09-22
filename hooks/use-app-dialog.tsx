"use client";

import { useState } from "react";
import { AppDialog } from "@/components/app-dialog";
import { AppLinks, AppText } from "@/utils/constants";

export function useAppDialog() {
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
  const [getCoveredDialogOpen, setGetCoveredDialogOpen] = useState(false);

  const openDownloadDialog = () => setDownloadDialogOpen(true);
  const openGetCoveredDialog = () => setGetCoveredDialogOpen(true);

  const DialogComponents = (
    <>
      <AppDialog
        open={downloadDialogOpen}
        onOpenChange={setDownloadDialogOpen}
        title={AppText.downloadTheApp}
        url={AppLinks.downloadTheApp}
      />
      <AppDialog
        open={getCoveredDialogOpen}
        onOpenChange={setGetCoveredDialogOpen}
        title={AppText.getCoveredInMinutes}
        url={AppLinks.getCoveredInMinutes}
      />
    </>
  );

  return {
    openDownloadDialog,
    openGetCoveredDialog,
    DialogComponents,
  };
}