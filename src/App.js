import './App.css';
import Accordion from './components/Accordion';
const questions = [
  {
    key: 0,
    question: "What area does the company's service cover?",
    answer:
      "The company's service area mainly covers western Georgia, and within specific projects, the company has experience working on projects in eastern Georgia and abroad",
  },
  {
    key: 1,
    question: "When do we need to use a rover base?",
    answer:
      "There are certain areas in Georgia where there is no mobile internet connection and, consequently, no reception of the GeoCors signal. In such cases, a rover base is used within a radius of 5 km to 50 km.",
  },
  {
    key: 2,
    question: "How can one get employed at the company",
    answer:
      "The company is actively looking for new employees. You can send your CV to ltd.nueva@gmail.com",
  },
  {
    key: 3,
    question: "How is the price for topographic work determined?",
    answer:
      "The price for topography depends on the terrain, location, and area (from 300 GEL per hectare).",
  },
];
function App() {
  return (
    <div className="App">
      <Accordion questions={questions}/>
    </div>
  );
}

export default App;
