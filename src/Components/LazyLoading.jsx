import React,{ Suspense } from 'react'
const Dashboard = React.lazy(() => import("./ToDoList"));
function LazyLoading() {
   return (
    <div>
      <h1>My App</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export {LazyLoading}