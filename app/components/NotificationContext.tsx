"use client";

import { createContext, useContext, useState } from "react";

// types
type NotificationType = "success" | "error";
type NotificationContextType = {
  message: string;
  type: NotificationType;
  showNotification: (message: string, type: NotificationType) => void;
};

export const NotificationContext = createContext<NotificationContextType>({
  message: "",
  type: "success",
  showNotification: () => {},
});

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<NotificationType>("success");

  const showNotification = (msg: string, notifType: NotificationType) => {
    setMessage(msg);
    setType(notifType);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <NotificationContext value={{ message, type, showNotification }}>
      {children}
    </NotificationContext>
  );
};

export const useNotification = () => useContext(NotificationContext);
