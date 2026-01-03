import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = `Dashboard | ${process.env.REACT_APP_APP_NAME}`;
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">
        POS Dashboard
      </h1>
    </div>
  );
}