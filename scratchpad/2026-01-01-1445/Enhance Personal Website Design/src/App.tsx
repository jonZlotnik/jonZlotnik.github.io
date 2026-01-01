import { Hero } from "./components/Hero";
import { Feed } from "./components/Feed";

export default function App() {
  return (
    <div className="bg-black min-h-screen antialiased">
      <Hero />
      <Feed />
    </div>
  );
}