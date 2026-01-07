import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { LandingPage } from "./pages/LandingPage";
import { TripApp } from "./pages/TripApp";
import { useHashLocation } from "./hooks/useHashLocation";

// Force refresh trigger
function App() {
  return (
    <ErrorBoundary>
      {/* @ts-ignore - wouter types are strict about mutable arrays but readonly works fine */}
      <Router hook={useHashLocation}>
        <Switch>
          <Route path="/" component={LandingPage} />
          {/* Dynamic route for all trips */}
          <Route path="/:tripId" component={TripApp} />
          
          {/* Fallback 404 */}
          <Route>
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">404</h1>
                <p className="text-muted-foreground">找不到頁面</p>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
